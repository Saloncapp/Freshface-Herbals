"use client";

import Link from "next/link";
import { Sparkles, Hand, Palette, Footprints } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GoldDivider from "@/components/ui/GoldDivider";

const categories = [
  {
    icon: Sparkles,
    title: "Facial",
    description:
      "Salon-grade facial rituals with ancestral botanicals from our own land",
    href: "/services",
  },
  {
    icon: Hand,
    title: "Massage",
    description:
      "Therapeutic oil massages crafted for professional salon practice",
    href: "/services",
  },
  {
    icon: Palette,
    title: "Hair Color",
    description:
      "100% natural henna and indigo — no chemicals, only what our soil provides",
    href: "/services",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    description:
      "Herbal foot rituals using native ingredients, perfected for salons",
    href: "/services",
  },
];

export default function ServicesTeaser() {
  return (
    <section className="bg-forest py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Rituals
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
            Rituals Built for Salons
          </h2>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <RevealOnScroll key={cat.title} delay={index * 0.1}>
              <Link href={cat.href}>
                <div className="group h-full rounded-lg border border-gold/10 bg-canopy/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gold/30">
                  <cat.icon className="mb-4 h-8 w-8 text-gold transition-transform group-hover:scale-110" />
                  <h3 className="font-serif text-xl text-cream">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/50">
                    {cat.description}
                  </p>
                  <span className="mt-4 inline-block text-xs font-medium uppercase tracking-wider text-gold opacity-0 transition-opacity group-hover:opacity-100">
                    View Services →
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
