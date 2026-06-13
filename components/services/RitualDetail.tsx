"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  type MotionValue,
} from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Service, ServiceStep } from "@/data/services";
import FloatingLeaves from "@/components/ui/FloatingLeaves";
import GoldDivider from "@/components/ui/GoldDivider";
import { getServiceIcon } from "@/lib/service-icons";

const DOT_SPACING_PX = 11;

type TrailDot = { x: number; y: number; progress: number };
type Connector = { d: string };

function samplePathDots(
  path: SVGPathElement,
  container: HTMLElement,
  progressFrom: number,
  progressTo: number
): TrailDot[] {
  const svg = path.ownerSVGElement;
  const ctm = path.getScreenCTM();
  if (!svg || !ctm) return [];

  const totalLength = path.getTotalLength();
  if (totalLength <= 0) return [];

  const containerRect = container.getBoundingClientRect();
  const dots: TrailDot[] = [];

  const toPercent = (screenX: number, screenY: number, local: number) => ({
    x: ((screenX - containerRect.left) / containerRect.width) * 100,
    y: ((screenY - containerRect.top) / containerRect.height) * 100,
    progress: progressFrom + (progressTo - progressFrom) * local,
  });

  const toScreen = (distance: number) => {
    const point = path.getPointAtLength(distance);
    const svgPoint = svg.createSVGPoint();
    svgPoint.x = point.x;
    svgPoint.y = point.y;
    return svgPoint.matrixTransform(ctm);
  };

  let cursor = 0;
  let previous = toScreen(0);
  dots.push(toPercent(previous.x, previous.y, 0));

  while (cursor < totalLength) {
    let step = 0.5;
    let placed = false;

    while (cursor + step <= totalLength) {
      const next = toScreen(cursor + step);
      const pixelDistance = Math.hypot(next.x - previous.x, next.y - previous.y);

      if (pixelDistance >= DOT_SPACING_PX) {
        cursor += step;
        previous = next;
        dots.push(toPercent(next.x, next.y, cursor / totalLength));
        placed = true;
        break;
      }

      step += 0.5;
    }

    if (!placed) break;
  }

  return dots;
}

// Build one connector that leaves the bottom edge of the current card and
// arrives at the top edge of the next card, staying entirely in the gap
// between the two boxes (so it never runs underneath a card).
function buildConnector(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): string {
  const cy1 = fromY + (toY - fromY) * 0.5;
  const cy2 = toY - (toY - fromY) * 0.5;
  return `M ${fromX} ${fromY} C ${fromX} ${cy1}, ${toX} ${cy2}, ${toX} ${toY}`;
}
function RitualTimeline({
  steps,
  scrollYProgress,
}: {
  steps: ServiceStep[];
  scrollYProgress: MotionValue<number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const connectorRefs = useRef<(SVGPathElement | null)[]>([]);
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [revealed, setRevealed] = useState(1);
  const [progress, setProgress] = useState(0);

  const stepCount = steps.length;
  const connectorCount = Math.max(1, stepCount - 1);

  // Phase 1: measure real card positions and build one connector per gap.
  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      setSvgSize({ width: containerRect.width, height: containerRect.height });

      // How far inset from the card's inner corner the connector attaches,
      // and how far below/above the edge it starts so the trail never
      // overlaps the (translucent) card body.
      const CORNER_INSET = 18;
      const EDGE_GAP = 14;

      const next: Connector[] = [];
      for (let i = 0; i < stepCount - 1; i++) {
        const fromCard = cardRefs.current[i];
        const toCard = cardRefs.current[i + 1];
        if (!fromCard || !toCard) continue;

        const fromRect = fromCard.getBoundingClientRect();
        const toRect = toCard.getBoundingClientRect();

        const fromIsLeft = i % 2 === 0;
        const toIsLeft = (i + 1) % 2 === 0;

        // Attach to each card's inner corner (the side facing the centre).
        const fromX =
          (fromIsLeft ? fromRect.right - CORNER_INSET : fromRect.left + CORNER_INSET) -
          containerRect.left;
        const fromY = fromRect.bottom - containerRect.top + EDGE_GAP;

        const toX =
          (toIsLeft ? toRect.right - CORNER_INSET : toRect.left + CORNER_INSET) -
          containerRect.left;
        const toY = toRect.top - containerRect.top - EDGE_GAP;

        next.push({ d: buildConnector(fromX, fromY, toX, toY) });
      }
      setConnectors(next);
    };

    measure();
    window.addEventListener("resize", measure);

    // Remeasure whenever the container OR any card changes size, so the
    // connectors follow cards as they expand/collapse on scroll.
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [stepCount]);

  // Phase 2: once connector paths are rendered, sample dots along each one,
  // mapping every dot into its slice of the overall scroll progress.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || connectors.length === 0) {
      setTrailDots([]);
      return;
    }

    const dots: TrailDot[] = [];
    connectors.forEach((_, i) => {
      const path = connectorRefs.current[i];
      if (!path) return;
      const from = i / connectorCount;
      const to = (i + 1) / connectorCount;
      dots.push(...samplePathDots(path, container, from, to));
    });
    setTrailDots(dots);
  }, [connectors, connectorCount, svgSize.width, svgSize.height]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const easedProgress = Math.min(1, value * 1.12);
    setProgress(easedProgress);
    if (stepCount <= 1) {
      setRevealed(1);
    } else {
      setRevealed(
        Math.min(stepCount, Math.max(1, Math.ceil(easedProgress * stepCount)))
      );
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-5xl"
      style={{ minHeight: `${stepCount * 15}rem` }}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${svgSize.width || 1} ${svgSize.height || 1}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        {connectors.map((connector, i) => (
          <path
            key={i}
            ref={(el) => {
              connectorRefs.current[i] = el;
            }}
            d={connector.d}
            fill="none"
            stroke="#2e5b38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 7"
            opacity="0.3"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden>
        {trailDots.map((dot, index) => {
          const isFilled = dot.progress <= progress;

          return (
            <motion.span
              key={`${index}-${dot.x.toFixed(2)}-${dot.y.toFixed(2)}`}
              className="absolute block rounded-full"
              style={{
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: 5,
                height: 5,
                transform: "translate(-50%, -50%)",
              }}
              initial={false}
              animate={{
                backgroundColor: isFilled ? "#d4b87a" : "#3f6d47",
                opacity: isFilled ? 1 : 0.38,
                scale: isFilled ? 1 : 0.9,
                boxShadow: isFilled
                  ? "0 0 7px rgba(212, 184, 122, 0.65)"
                  : "0 0 0 rgba(0, 0, 0, 0)",
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          );
        })}
      </div>

      <div className="relative z-10">
        {steps.map((step, index) => {
          const segmentProgress = Math.min(
            1,
            Math.max(0, progress * stepCount - index)
          );
          const isReached = index < revealed;
          const isCurrent = index === revealed - 1;
          const isLeft = index % 2 === 0;

          return (
            <RitualCheckpoint
              key={step.title}
              step={step}
              index={index}
              isLeft={isLeft}
              isReached={isReached}
              isCurrent={isCurrent}
              segmentProgress={segmentProgress}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function RitualCheckpoint({
  step,
  index,
  isLeft,
  isReached,
  isCurrent,
  segmentProgress,
  cardRef,
}: {
  step: ServiceStep;
  index: number;
  isLeft: boolean;
  isReached: boolean;
  isCurrent: boolean;
  segmentProgress: number;
  cardRef: (el: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-25% 0px -25% 0px" });
  const isActive = isReached && (isInView || isCurrent);

  return (
    <div
      ref={ref}
      className={`flex min-h-[17rem] items-center py-8 sm:min-h-[20rem] sm:py-10 ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <motion.article
        ref={cardRef}
        initial={false}
        animate={{ opacity: isActive ? 1 : 0.45 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`relative w-[88%] rounded-2xl border p-5 transition-colors duration-500 sm:w-[38%] sm:p-6 ${
          isActive
            ? "border-gold/45 bg-gold/10 shadow-xl shadow-gold/10"
            : "border-gold/15 bg-canopy/40"
        }`}
      >
        <div className="flex items-start gap-3">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-serif text-base transition-colors duration-500 ${
              isReached
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-sage/40 bg-deep/50 text-gold/35"
            }`}
          >
            {index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/70 sm:text-xs">
              Step {index + 1}
            </p>
            <h3 className="mt-1.5 font-serif text-xl text-cream sm:text-2xl md:text-3xl">
              {step.title}
            </h3>
          </div>
        </div>

        <div>
          <p className="mt-3 text-sm leading-relaxed text-cream/65">
            {step.description}
          </p>
          {step.benefit && (
            <p className="mt-3 text-sm font-medium text-gold/85">
              Benefit: {step.benefit}
            </p>
          )}
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-goldLight"
          initial={false}
          animate={{ scaleX: isActive ? segmentProgress : 0 }}
          style={{ transformOrigin: isLeft ? "left" : "right" }}
          transition={{ duration: 0.3 }}
        />
      </motion.article>
    </div>
  );
}

interface RitualDetailProps {
  service: Service;
  categoryLabel: string;
}

export default function RitualDetail({ service, categoryLabel }: RitualDetailProps) {
  const journeyRef = useRef<HTMLElement>(null);
  const ServiceIcon = getServiceIcon(service.icon);
  const stepCount = service.steps.length;

  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start 0.85", "end 0.15"],
  });

  return (
    <div className="bg-forest">
      <section className="relative overflow-hidden bg-gradient-to-b from-deep to-forest pt-28">
        <FloatingLeaves />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gold/80 transition-colors hover:text-gold"
            >
              <ArrowLeft size={16} />
              Back to services
            </Link>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/25 bg-gold/10">
                <ServiceIcon className="h-7 w-7 text-gold" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                {categoryLabel} Ritual Journey
              </p>
            </div>
            <h1 className="mt-3 max-w-4xl font-serif text-5xl font-light leading-tight text-cream md:text-7xl">
              {service.name}
              <span className="ml-3 inline-block text-2xl font-light text-gold/75 md:text-3xl">
                · {stepCount} {stepCount === 1 ? "Step" : "Steps"}
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/60">
              {service.description}
            </p>
            <GoldDivider className="mt-8 max-w-sm" />
          </motion.div>
        </div>
      </section>

      <section ref={journeyRef} className="relative overflow-hidden py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <RitualTimeline steps={service.steps} scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </div>
  );
}
