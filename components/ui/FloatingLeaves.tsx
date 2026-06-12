"use client";

import { motion } from "framer-motion";

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
  { id: 11, type: "flower", variant: "hibiscus", x: "28%", y: "24%", size: 72, delay: 0.4, rotate: -10, color: "text-gold", duration: 9 },
  { id: 12, type: "flower", variant: "blossom", x: "88%", y: "20%", size: 56, delay: 1.1, rotate: 15, color: "text-gold/80", duration: 7 },
  { id: 13, type: "flower", variant: "blossom", x: "6%", y: "38%", size: 48, delay: 0.9, rotate: -5, color: "text-gold/70", duration: 8 },
  { id: 15, type: "flower", variant: "blossom", x: "20%", y: "80%", size: 52, delay: 1.7, rotate: -18, color: "text-gold/75", duration: 7.5 },
  { id: 16, type: "flower", variant: "hibiscus", x: "80%", y: "82%", size: 60, delay: 0.2, rotate: 8, color: "text-gold/80", duration: 9.5 },
  { id: 17, type: "flower", variant: "blossom", x: "48%", y: "6%", size: 40, delay: 2.3, rotate: 0, color: "text-gold/60", duration: 6.5 },
  { id: 18, type: "leaf", variant: "slender", x: "95%", y: "78%", size: 46, delay: 1.3, rotate: 40, color: "text-sage/60" },
];

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

export default function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute ${el.color}`}
          style={{ left: el.x, top: el.y }}
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
          <FloatingElementGraphic
            type={el.type}
            variant={el.variant}
            size={el.size}
          />
        </motion.div>
      ))}
    </div>
  );
}
