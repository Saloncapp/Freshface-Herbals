"use client";

import { useRef, useState, useMemo, useLayoutEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useInView,
  type MotionValue,
} from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import { Service, ServiceStep } from "@/data/services";
import FloatingLeaves from "@/components/ui/FloatingLeaves";
import GoldDivider from "@/components/ui/GoldDivider";
import { getServiceIcon } from "@/lib/service-icons";

const VIEWBOX_WIDTH = 100;
const ROW_HEIGHT = 100;
const PATH_CENTER_X = VIEWBOX_WIDTH / 2;
const LEFT_CARD_ANCHOR_X = 46;
const RIGHT_CARD_ANCHOR_X = 54;
const PATH_CORRIDOR_SWAY = 5;
const DOT_SPACING_PX = 11;

type TrailDot = { x: number; y: number; progress: number };

function samplePathDots(
  path: SVGPathElement,
  container: HTMLElement
): TrailDot[] {
  const svg = path.ownerSVGElement;
  const ctm = path.getScreenCTM();
  if (!svg || !ctm) return [];

  const totalLength = path.getTotalLength();
  if (totalLength <= 0) return [];

  const containerRect = container.getBoundingClientRect();
  const dots: TrailDot[] = [];

  const toPercent = (screenX: number, screenY: number, progress: number) => ({
    x: ((screenX - containerRect.left) / containerRect.width) * 100,
    y: ((screenY - containerRect.top) / containerRect.height) * 100,
    progress,
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

function checkpointY(index: number): number {
  return ROW_HEIGHT * index + ROW_HEIGHT / 2;
}

function checkpointX(index: number): number {
  return index % 2 === 0 ? LEFT_CARD_ANCHOR_X : RIGHT_CARD_ANCHOR_X;
}

function buildCurvedPath(stepCount: number): string {
  if (stepCount <= 0) return "";
  if (stepCount === 1) return `M ${checkpointX(0)} ${checkpointY(0)}`;

  let path = `M ${checkpointX(0)} ${checkpointY(0)}`;

  for (let i = 0; i < stepCount - 1; i++) {
    const y0 = checkpointY(i);
    const y1 = checkpointY(i + 1);
    const controlOut =
      PATH_CENTER_X + (i % 2 === 0 ? PATH_CORRIDOR_SWAY : -PATH_CORRIDOR_SWAY);
    const controlIn =
      PATH_CENTER_X + (i % 2 === 0 ? -PATH_CORRIDOR_SWAY : PATH_CORRIDOR_SWAY);
    path += ` C ${controlOut} ${y0 + ROW_HEIGHT * 0.38}, ${controlIn} ${
      y1 - ROW_HEIGHT * 0.38
    }, ${checkpointX(i + 1)} ${y1}`;
  }

  return path;
}

function RitualTimeline({
  steps,
  scrollYProgress,
}: {
  steps: ServiceStep[];
  scrollYProgress: MotionValue<number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [revealed, setRevealed] = useState(1);
  const [progress, setProgress] = useState(0);

  const stepCount = steps.length;
  const pathD = useMemo(() => buildCurvedPath(stepCount), [stepCount]);
  const viewBoxHeight = stepCount * ROW_HEIGHT;

  useLayoutEffect(() => {
    const measure = () => {
      const path = trackRef.current;
      const container = containerRef.current;
      if (!path || !container) return;
      setTrailDots(samplePathDots(path, container));
    };

    measure();
    window.addEventListener("resize", measure);

    const observer = new ResizeObserver(measure);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", measure);
      observer.disconnect();
    };
  }, [pathD]);

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
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <path ref={trackRef} d={pathD} fill="none" stroke="transparent" />
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
                width: 3,
                height: 3,
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
}: {
  step: ServiceStep;
  index: number;
  isLeft: boolean;
  isReached: boolean;
  isCurrent: boolean;
  segmentProgress: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-25% 0px -25% 0px" });
  const isActive = isReached && (isInView || isCurrent);
  const slideFrom = isLeft ? -40 : 40;

  return (
    <div
      ref={ref}
      className={`flex min-h-[13rem] items-center py-4 sm:min-h-[15rem] sm:py-5 ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      <motion.article
        initial={false}
        animate={{
          opacity: isActive ? 1 : isReached ? 0.55 : 0.28,
          x: isActive ? 0 : slideFrom * 0.5,
          y: isActive ? 0 : 18,
        }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        className={`relative w-[88%] rounded-2xl border p-5 sm:w-[46%] sm:p-6 ${
          isCurrent
            ? "border-gold/45 bg-gold/10 shadow-xl shadow-gold/10"
            : isReached
              ? "border-gold/25 bg-canopy/55"
              : "border-gold/10 bg-canopy/30"
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

        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
            height: isActive ? "auto" : 0,
          }}
          transition={{ duration: 0.5, delay: isActive ? 0.08 : 0 }}
          className="overflow-hidden"
        >
          <p className="mt-3 text-sm leading-relaxed text-cream/65">
            {step.description}
          </p>
          {step.benefit && (
            <p className="mt-3 text-sm font-medium text-gold/85">
              Benefit: {step.benefit}
            </p>
          )}
        </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-2 text-gold">
              <MapPin size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Ritual Map
              </span>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              {stepCount} Steps
            </p>
            <h2 className="mt-2 font-serif text-4xl font-light text-cream">
              Scroll the path
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/55">
              Follow the curved golden trail as it winds through each ritual
              stage. Cards alternate along the path, with each connection
              finishing inside each step box as you scroll.
            </p>
          </motion.div>

          <RitualTimeline steps={service.steps} scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </div>
  );
}
