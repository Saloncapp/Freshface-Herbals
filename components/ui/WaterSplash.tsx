"use client";

import { motion } from "framer-motion";

interface WaterSplashProps {
  className?: string;
  variant?: "hero" | "accent";
}

const droplets = [
  { x: "18%", y: "72%", size: 6, delay: 0 },
  { x: "42%", y: "78%", size: 4, delay: 0.4 },
  { x: "68%", y: "70%", size: 5, delay: 0.8 },
  { x: "82%", y: "76%", size: 3, delay: 1.2 },
  { x: "55%", y: "82%", size: 4, delay: 1.6 },
];

const ripples = [
  { x: "30%", y: "75%", delay: 0 },
  { x: "60%", y: "80%", delay: 1.5 },
  { x: "75%", y: "72%", delay: 3 },
];

function Droplet({ size, delay }: { size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-gold/30"
      style={{ width: size, height: size }}
      initial={{ opacity: 0, y: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        y: [0, -40, -80],
        scale: [0, 1, 0.3],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

function Ripple({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full border border-gold/20"
      initial={{ width: 0, height: 0, opacity: 0.6 }}
      animate={{
        width: [0, 120, 200],
        height: [0, 120, 200],
        opacity: [0.5, 0.2, 0],
        marginLeft: [0, -60, -100],
        marginTop: [0, -60, -100],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export default function WaterSplash({
  className = "",
  variant = "hero",
}: WaterSplashProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Soft water surface gradient */}
      <div
        className={`absolute inset-x-0 bg-gradient-to-t from-sage/10 via-transparent to-transparent ${
          isHero ? "bottom-0 h-1/3" : "bottom-0 h-1/2"
        }`}
      />

      {/* Animated wave line */}
      <svg
        className={`absolute inset-x-0 text-sage/20 ${isHero ? "bottom-16" : "bottom-8"}`}
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        style={{ width: "100%", height: isHero ? 80 : 50 }}
      >
        <motion.path
          d="M0 40 Q360 10, 720 40 T1440 40"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: [
              "M0 40 Q360 10, 720 40 T1440 40",
              "M0 40 Q360 70, 720 40 T1440 40",
              "M0 40 Q360 10, 720 40 T1440 40",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 55 Q360 25, 720 55 T1440 55"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
          animate={{
            d: [
              "M0 55 Q360 25, 720 55 T1440 55",
              "M0 55 Q360 85, 720 55 T1440 55",
              "M0 55 Q360 25, 720 55 T1440 55",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Droplets */}
      {isHero &&
        droplets.map((d, i) => (
          <div
            key={i}
            className="absolute"
            style={{ left: d.x, top: d.y }}
          >
            <Droplet size={d.size} delay={d.delay} />
          </div>
        ))}

      {/* Ripples */}
      {ripples.map((r, i) => (
        <div
          key={i}
          className="absolute"
          style={{ left: r.x, top: r.y }}
        >
          <Ripple delay={r.delay} />
        </div>
      ))}
    </div>
  );
}
