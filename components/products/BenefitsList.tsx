"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface BenefitsListProps {
  benefits: string[];
  isVisible: boolean;
}

export default function BenefitsList({ benefits, isVisible }: BenefitsListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {benefits.map((benefit, index) => (
        <motion.li
          key={benefit}
          initial={{ opacity: 0, x: -10 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
          <span className="text-sm text-cream/70">{benefit}</span>
        </motion.li>
      ))}
    </ul>
  );
}
