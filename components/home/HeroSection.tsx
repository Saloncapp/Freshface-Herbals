"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FloatingLeaves from "@/components/ui/FloatingLeaves";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-deep via-forest to-canopy">
      <FloatingLeaves />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold"
        >
          Kavery Delta · Tamil Nadu
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl font-light leading-tight text-cream md:text-7xl lg:text-8xl"
        >
          Beauty Rooted in
          <span className="mt-2 block font-medium italic text-gold">
            Ancient Earth
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl font-serif text-lg italic text-cream/70 md:text-xl"
        >
          ஆற்று மண்ணில் வளர்ந்த அழகு — Beauty born from river soil
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/50"
        >
          Premium herbal skincare crafted from 43 botanicals. Three generations
          of ancestral formulas. 100% natural. Zero synthetics.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <Link
            href="/services"
            className="inline-block rounded-sm border border-gold bg-gold/10 px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep"
          >
            Explore Our Rituals
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-px bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
}
