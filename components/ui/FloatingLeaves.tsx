"use client";

import type { ClickRipple } from "@/components/ui/WaterClickRipple";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";
import { useCallback, useEffect, useRef, type RefObject } from "react";

type ElementType = "leaf" | "flower";
type LeafVariant = "broad" | "slender";
type FlowerVariant = "hibiscus" | "blossom";

interface FloatingElement {
  id: number;
  type: ElementType;
  variant: LeafVariant | FlowerVariant;
  x: string;
  y: string;
  size: number;
  delay: number;
  rotate: number;
  color: string;
  duration?: number;
}

const SPRING: SpringOptions = { stiffness: 65, damping: 9, mass: 1.2 };

const RIPPLE_RADIUS = { burst: 360, trail: 240 };
const RIPPLE_FORCE = { burst: 95, trail: 58 };

const elements: FloatingElement[] = [
  { id: 1, type: "leaf", variant: "broad", x: "10%", y: "20%", size: 80, delay: 0, rotate: -15, color: "text-sage" },
  { id: 2, type: "leaf", variant: "slender", x: "75%", y: "15%", size: 60, delay: 0.5, rotate: 25, color: "text-sage" },
  { id: 3, type: "leaf", variant: "broad", x: "85%", y: "60%", size: 70, delay: 1, rotate: -30, color: "text-sage/80" },
  { id: 4, type: "leaf", variant: "slender", x: "5%", y: "70%", size: 55, delay: 1.5, rotate: 20, color: "text-sage" },
  { id: 5, type: "leaf", variant: "slender", x: "22%", y: "8%", size: 48, delay: 0.3, rotate: -8, color: "text-sage/70" },
  { id: 6, type: "leaf", variant: "broad", x: "92%", y: "32%", size: 52, delay: 0.8, rotate: 35, color: "text-sage/75" },
  { id: 7, type: "leaf", variant: "slender", x: "14%", y: "42%", size: 65, delay: 1.2, rotate: -22, color: "text-sage" },
  { id: 8, type: "leaf", variant: "broad", x: "68%", y: "72%", size: 58, delay: 0.6, rotate: 18, color: "text-sage/80" },
  { id: 9, type: "leaf", variant: "slender", x: "38%", y: "10%", size: 44, delay: 1.8, rotate: 12, color: "text-sage/65" },
  { id: 10, type: "leaf", variant: "broad", x: "52%", y: "90%", size: 50, delay: 2.1, rotate: -28, color: "text-sage/70" },
  { id: 12, type: "flower", variant: "blossom", x: "88%", y: "20%", size: 56, delay: 1.1, rotate: 15, color: "text-gold/80", duration: 7 },
  { id: 13, type: "flower", variant: "blossom", x: "6%", y: "38%", size: 48, delay: 0.9, rotate: -5, color: "text-gold/70", duration: 8 },
  { id: 15, type: "flower", variant: "blossom", x: "20%", y: "80%", size: 52, delay: 1.7, rotate: -18, color: "text-gold/75", duration: 7.5 },
  { id: 16, type: "flower", variant: "hibiscus", x: "80%", y: "82%", size: 60, delay: 0.2, rotate: 8, color: "text-gold/80", duration: 9.5 },
  { id: 17, type: "flower", variant: "blossom", x: "48%", y: "6%", size: 40, delay: 2.3, rotate: 0, color: "text-gold/60", duration: 6.5 },
  { id: 18, type: "leaf", variant: "slender", x: "95%", y: "78%", size: 46, delay: 1.3, rotate: 40, color: "text-sage/60" },
  { id: 19, type: "flower", variant: "hibiscus", x: "4%", y: "11%", size: 58, delay: 0.5, rotate: -12, color: "text-gold/75", duration: 8.5 },
  { id: 20, type: "flower", variant: "blossom", x: "93%", y: "48%", size: 50, delay: 1.6, rotate: 20, color: "text-gold/70", duration: 7 },
  { id: 21, type: "flower", variant: "hibiscus", x: "91%", y: "70%", size: 54, delay: 0.7, rotate: -8, color: "text-gold/80", duration: 9 },
  { id: 22, type: "flower", variant: "blossom", x: "7%", y: "86%", size: 48, delay: 2, rotate: 14, color: "text-gold/65", duration: 7.5 },
  { id: 23, type: "flower", variant: "hibiscus", x: "74%", y: "5%", size: 52, delay: 1.3, rotate: 18, color: "text-gold/70", duration: 8 },
];

function getElementCenter(
  el: FloatingElement,
  containerWidth: number,
  containerHeight: number
) {
  return {
    x: (parseFloat(el.x) / 100) * containerWidth + el.size / 2,
    y: (parseFloat(el.y) / 100) * containerHeight + el.size / 2,
  };
}

function getLocalPoint(
  e: React.PointerEvent<HTMLElement>,
  container: HTMLElement
) {
  const rect = container.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function BroadLeafSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 5 C20 30, 10 60, 50 95 C90 60, 80 30, 50 5Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M50 5 L50 95"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M50 30 C35 40, 25 55, 50 70"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.2"
      />
      <path
        d="M50 30 C65 40, 75 55, 50 70"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.2"
      />
    </svg>
  );
}

function SlenderLeafSVG({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52 8 C38 25, 32 50, 50 92 C58 55, 62 28, 52 8Z"
        fill="currentColor"
        opacity="0.14"
      />
      <path
        d="M50 10 L50 90"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.28"
      />
      <path
        d="M50 28 C44 42, 42 58, 50 72"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.18"
      />
    </svg>
  );
}

function HibiscusSVG({ size }: { size: number }) {
  const petals = [0, 72, 144, 216, 288];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {petals.map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="50"
          rx="14"
          ry="28"
          fill="currentColor"
          opacity="0.18"
          transform={`rotate(${angle} 50 50) translate(0 -18)`}
        />
      ))}
      {petals.map((angle) => (
        <ellipse
          key={`stroke-${angle}`}
          cx="50"
          cy="50"
          rx="14"
          ry="28"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.25"
          transform={`rotate(${angle} 50 50) translate(0 -18)`}
        />
      ))}
      <circle cx="50" cy="50" r="7" fill="currentColor" opacity="0.35" />
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function BlossomSVG({ size }: { size: number }) {
  const petals = [0, 90, 180, 270];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {petals.map((angle) => (
        <circle
          key={angle}
          cx="50"
          cy="50"
          r="14"
          fill="currentColor"
          opacity="0.16"
          transform={`rotate(${angle} 50 50) translate(0 -16)`}
        />
      ))}
      <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function FloatingElementGraphic({
  type,
  variant,
  size,
}: {
  type: ElementType;
  variant: LeafVariant | FlowerVariant;
  size: number;
}) {
  if (type === "flower") {
    return variant === "hibiscus" ? (
      <HibiscusSVG size={size} />
    ) : (
      <BlossomSVG size={size} />
    );
  }

  return variant === "slender" ? (
    <SlenderLeafSVG size={size} />
  ) : (
    <BroadLeafSVG size={size} />
  );
}

function FloatingElementItem({
  el,
  ripples = [],
  containerRef,
  onRipple,
}: {
  el: FloatingElement;
  ripples?: ClickRipple[];
  containerRef?: RefObject<HTMLElement | null>;
  onRipple?: (x: number, y: number, variant: "burst" | "trail") => void;
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const offsetRotate = useMotionValue(0);
  const springX = useSpring(offsetX, SPRING);
  const springY = useSpring(offsetY, SPRING);
  const springRotate = useSpring(offsetRotate, SPRING);
  const processedRipples = useRef<Set<number>>(new Set());
  const returnTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyImpulse = useCallback(
    (px: number, py: number, pr: number) => {
      offsetX.set(offsetX.get() + px);
      offsetY.set(offsetY.get() + py);
      offsetRotate.set(offsetRotate.get() + pr);

      if (returnTimer.current) clearTimeout(returnTimer.current);
      returnTimer.current = setTimeout(() => {
        offsetX.set(0);
        offsetY.set(0);
        offsetRotate.set(0);
      }, 140);
    },
    [offsetX, offsetY, offsetRotate]
  );

  useEffect(() => {
    const container = containerRef?.current;
    if (!container || ripples.length === 0) return;

    const { width, height } = container.getBoundingClientRect();
    const center = getElementCenter(el, width, height);
    const weight = el.type === "flower" ? 0.75 : 1;

    ripples.forEach((ripple) => {
      if (processedRipples.current.has(ripple.id)) return;
      processedRipples.current.add(ripple.id);

      const dx = center.x - ripple.x;
      const dy = center.y - ripple.y;
      const dist = Math.hypot(dx, dy);
      const radius = RIPPLE_RADIUS[ripple.variant];

      if (dist >= radius || dist < 1) return;

      const falloff = 1 - dist / radius;
      const force = RIPPLE_FORCE[ripple.variant] * falloff * falloff * weight;
      const nx = dx / dist;
      const ny = dy / dist;

      applyImpulse(nx * force, ny * force, nx * 14 * weight);
    });
  }, [ripples, el, containerRef, applyImpulse]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.stopPropagation();

      const container = containerRef?.current;

      if (container && onRipple) {
        const { x, y } = getLocalPoint(e, container);
        onRipple(x, y, "burst");
        return;
      }

      const rect = e.currentTarget.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const len = Math.hypot(dx, dy) || 1;
      const weight = el.type === "flower" ? 0.75 : 1;
      const force = (el.type === "flower" ? 55 : 78) * weight;

      applyImpulse(
        (dx / len) * force,
        (dy / len) * force,
        (dx / len) * 16 * weight
      );
    },
    [containerRef, onRipple, el.type, applyImpulse]
  );

  return (
    <div className="pointer-events-auto absolute" style={{ left: el.x, top: el.y }}>
      <motion.div style={{ x: springX, y: springY, rotate: springRotate }}>
        <motion.div
          role="presentation"
          className={`${el.color} cursor-pointer touch-none`}
          animate={{
            y: [0, -20, 0, 15, 0],
            rotate: [
              el.rotate,
              el.rotate + 8,
              el.rotate,
              el.rotate - 5,
              el.rotate,
            ],
            ...(el.type === "flower" && {
              scale: [1, 1.05, 1, 0.97, 1],
            }),
          }}
          transition={{
            duration: el.duration ?? 8,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="-m-4 p-4"
            onPointerDown={handlePointerDown}
          >
            <FloatingElementGraphic
              type={el.type}
              variant={el.variant}
              size={el.size}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

interface FloatingLeavesProps {
  ripples?: ClickRipple[];
  containerRef?: RefObject<HTMLElement | null>;
  onRipple?: (x: number, y: number, variant: "burst" | "trail") => void;
}

export default function FloatingLeaves({
  ripples,
  containerRef,
  onRipple,
}: FloatingLeavesProps = {}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
      {elements.map((el) => (
        <FloatingElementItem
          key={el.id}
          el={el}
          ripples={ripples}
          containerRef={containerRef}
          onRipple={onRipple}
        />
      ))}
    </div>
  );
}
