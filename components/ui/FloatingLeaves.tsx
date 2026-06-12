"use client";

import { motion } from "framer-motion";

const leaves = [
  { id: 1, x: "10%", y: "20%", size: 80, delay: 0, rotate: -15 },
  { id: 2, x: "75%", y: "15%", size: 60, delay: 0.5, rotate: 25 },
  { id: 3, x: "85%", y: "60%", size: 70, delay: 1, rotate: -30 },
  { id: 4, x: "5%", y: "70%", size: 55, delay: 1.5, rotate: 20 },
];

function LeafSVG({ size }: { size: number }) {
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

export default function FloatingLeaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden text-sage">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ left: leaf.x, top: leaf.y }}
          animate={{
            y: [0, -20, 0, 15, 0],
            rotate: [leaf.rotate, leaf.rotate + 8, leaf.rotate, leaf.rotate - 5, leaf.rotate],
          }}
          transition={{
            duration: 8,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <LeafSVG size={leaf.size} />
        </motion.div>
      ))}
    </div>
  );
}
