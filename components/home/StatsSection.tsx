"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { Scissors, Leaf, Mountain, Shield } from "lucide-react";

const pillars = [
  {
    icon: Scissors,
    title: "Made for Salons",
    description: "Formulated exclusively for professional salon rituals",
  },
  {
    icon: Leaf,
    title: "Ancestral Formulas",
    description: "Recipes inherited and refined through generations",
  },
  {
    icon: Mountain,
    title: "From Our Own Land",
    description: "Every ingredient grows in our soil, not imported",
  },
  {
    icon: Shield,
    title: "Nothing Ordinary",
    description: "100% natural, zero synthetics, zero compromise",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-gold/10 bg-canopy py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {pillars.map((pillar, index) => (
            <RevealOnScroll
              key={pillar.title}
              delay={index * 0.1}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold/5 transition-all duration-500 group-hover:border-gold/40 group-hover:bg-gold/10">
                <pillar.icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-serif text-lg text-cream">{pillar.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-cream/50">
                {pillar.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
