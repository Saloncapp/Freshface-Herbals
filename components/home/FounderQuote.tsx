"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function FounderQuote() {
  return (
    <section className="bg-deep py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <RevealOnScroll>
          <span className="font-serif text-8xl leading-none text-gold/20 md:text-9xl">
            &ldquo;
          </span>
          <blockquote className="-mt-8 font-serif text-2xl font-light italic leading-relaxed text-cream md:text-3xl lg:text-4xl">
            We do not create beauty — we reveal what the earth has already
            perfected. Every leaf, every seed, every drop carries the wisdom of
            our ancestors.
          </blockquote>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            — Lakshmi Devi, Founder
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
