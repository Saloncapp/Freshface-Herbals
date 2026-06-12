"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingLeaves from "@/components/ui/FloatingLeaves";
import WaterSplash from "@/components/ui/WaterSplash";
import {
  useWaterClickRipple,
  WaterClickRippleLayer,
} from "@/components/ui/WaterClickRipple";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const {
    ripples,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerLeave,
    removeRipple,
  } = useWaterClickRipple();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      className="relative flex min-h-screen cursor-pointer select-none items-center justify-center overflow-hidden bg-gradient-to-b from-deep via-forest to-canopy"
    >
      {/* Parallax background layers */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.1)_0%,_transparent_70%)]"
        style={{ y: bgY }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(74,122,80,0.15)_0%,_transparent_50%)]"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
      />

      <motion.div style={{ y: bgY }}>
        <FloatingLeaves />
      </motion.div>

      <WaterSplash variant="hero" />
      <WaterClickRippleLayer ripples={ripples} onRippleComplete={removeRipple} />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ y: textY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold"
        >
          Tamil Nadu · Salon Herbals
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl font-light leading-tight text-cream md:text-7xl lg:text-8xl"
        >
          Herbals Crafted for
          <span className="mt-2 block font-medium italic text-gold">
            Salon Rituals
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl font-serif text-lg italic text-cream/70 md:text-xl"
        >
          ஆற்று மண்ணில் வளர்ந்த அழகு — Beauty born from our own land
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/50"
        >
          Many herbal brands exist — but ours are made exclusively for salon
          service. We follow our ancestors, using ingredients already growing in
          our land. Nothing ordinary. Nothing synthetic.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/services"
            className="inline-block rounded-sm border border-gold bg-gold/10 px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep"
          >
            Explore Our Rituals
          </Link>
          <Link
            href="#story"
            className="inline-block rounded-sm border border-gold/30 px-8 py-3 text-sm font-medium uppercase tracking-wider text-cream/70 transition-all hover:border-gold/60 hover:text-gold"
          >
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-10 w-px bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
