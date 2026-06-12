"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export interface ClickRipple {
  id: number;
  x: number;
  y: number;
  variant: "burst" | "trail";
}

interface WaterClickRippleProps {
  ripples: ClickRipple[];
  onRippleComplete: (id: number) => void;
}

const BURST_DURATION_MS = 1600;
const TRAIL_DURATION_MS = 1000;
const MAX_RIPPLES = 60;
const TRAIL_DISTANCE_PX = 28;
const TRAIL_INTERVAL_MS = 45;

function ClickRippleBurst({
  x,
  y,
  variant,
  onComplete,
}: {
  x: number;
  y: number;
  variant: "burst" | "trail";
  onComplete: () => void;
}) {
  const isBurst = variant === "burst";
  const durationMs = isBurst ? BURST_DURATION_MS : TRAIL_DURATION_MS;

  useEffect(() => {
    const timer = setTimeout(onComplete, durationMs);
    return () => clearTimeout(timer);
  }, [onComplete, durationMs]);

  const rings = isBurst
    ? [
        { size: 180, delay: 0, border: "border-gold/45" },
        { size: 320, delay: 0.1, border: "border-sage/35" },
        { size: 480, delay: 0.2, border: "border-gold/20" },
      ]
    : [
        { size: 110, delay: 0, border: "border-gold/35" },
        { size: 200, delay: 0.06, border: "border-sage/25" },
        { size: 300, delay: 0.12, border: "border-gold/15" },
      ];

  const animDuration = isBurst ? 1.4 : 0.9;
  const dropletReach = isBurst ? 72 : 48;

  return (
    <div className="pointer-events-none absolute" style={{ left: x, top: y }}>
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25"
        initial={{
          width: isBurst ? 16 : 10,
          height: isBurst ? 16 : 10,
          opacity: isBurst ? 0.75 : 0.5,
        }}
        animate={{
          width: isBurst ? 56 : 32,
          height: isBurst ? 56 : 32,
          opacity: 0,
        }}
        transition={{ duration: isBurst ? 0.6 : 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {rings.map((ring, i) => (
        <motion.div
          key={i}
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${ring.border}`}
          initial={{ width: 0, height: 0, opacity: isBurst ? 0.65 : 0.45 }}
          animate={{
            width: ring.size,
            height: ring.size,
            opacity: 0,
          }}
          transition={{
            duration: animDuration,
            delay: ring.delay,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      ))}

      {isBurst &&
        [0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.div
            key={angle}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/50"
            initial={{ x: 0, y: 0, opacity: 0.85, scale: 1 }}
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * dropletReach,
              y: Math.sin((angle * Math.PI) / 180) * dropletReach,
              opacity: 0,
              scale: 0.25,
            }}
            transition={{
              duration: 0.85,
              delay: 0.05 + i * 0.025,
              ease: "easeOut",
            }}
          />
        ))}
    </div>
  );
}

export function WaterClickRippleLayer({
  ripples,
  onRippleComplete,
}: WaterClickRippleProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {ripples.map((ripple) => (
        <ClickRippleBurst
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          variant={ripple.variant}
          onComplete={() => onRippleComplete(ripple.id)}
        />
      ))}
    </div>
  );
}

function getLocalPoint(
  e: React.PointerEvent<HTMLElement> | PointerEvent,
  element: HTMLElement
) {
  const rect = element.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return !!target.closest(
    'a, button, input, textarea, select, label, [role="button"], [data-no-ripple]'
  );
}

export function useWaterClickRipple() {
  const [ripples, setRipples] = useState<ClickRipple[]>([]);
  const isDragging = useRef(false);
  const lastSpawn = useRef({ x: 0, y: 0, time: 0 });
  const elementRef = useRef<HTMLElement | null>(null);
  const idCounter = useRef(0);

  const addRipple = useCallback(
    (x: number, y: number, variant: "burst" | "trail") => {
      idCounter.current += 1;
      setRipples((prev) => {
        const next = [
          ...prev,
          { id: idCounter.current, x, y, variant },
        ];
        return next.length > MAX_RIPPLES
          ? next.slice(next.length - MAX_RIPPLES)
          : next;
      });
    },
    []
  );

  const spawnAt = useCallback(
    (
      e: React.PointerEvent<HTMLElement>,
      variant: "burst" | "trail"
    ) => {
      const { x, y } = getLocalPoint(e, e.currentTarget);
      addRipple(x, y, variant);
      lastSpawn.current = { x, y, time: Date.now() };
    },
    [addRipple]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (e.button !== 0) return;
      if (isInteractiveTarget(e.target)) return;
      elementRef.current = e.currentTarget;
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      spawnAt(e, "burst");
    },
    [spawnAt]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (!isDragging.current) return;

      const { x, y } = getLocalPoint(e, e.currentTarget);
      const dx = x - lastSpawn.current.x;
      const dy = y - lastSpawn.current.y;
      const dist = Math.hypot(dx, dy);
      const elapsed = Date.now() - lastSpawn.current.time;

      if (dist >= TRAIL_DISTANCE_PX || elapsed >= TRAIL_INTERVAL_MS) {
        addRipple(x, y, "trail");
        lastSpawn.current = { x, y, time: Date.now() };
      }
    },
    [addRipple]
  );

  const endDrag = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  }, []);

  const removeRipple = useCallback((id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }, []);

  return {
    ripples,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp: endDrag,
    handlePointerLeave: endDrag,
    removeRipple,
  };
}
