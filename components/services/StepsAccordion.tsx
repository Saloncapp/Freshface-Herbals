"use client";

import { motion } from "framer-motion";
import { ServiceStep } from "@/data/services";

interface StepsAccordionProps {
  steps: ServiceStep[];
  isVisible: boolean;
}

export default function StepsAccordion({ steps, isVisible }: StepsAccordionProps) {
  return (
    <ol className="mt-6 space-y-4">
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="flex gap-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">
            {index + 1}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-cream">{step.title}</h4>
            <p className="mt-1 text-sm text-cream/50">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
