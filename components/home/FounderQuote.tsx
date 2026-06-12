"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function FounderQuote() {
  return (
    <section className="relative overflow-hidden bg-forest py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.05)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <RevealOnScroll>
          <span className="font-serif text-8xl leading-none text-gold/20 md:text-9xl">
            &ldquo;
          </span>
          <blockquote className="-mt-8 font-serif text-2xl font-light italic leading-relaxed text-cream md:text-3xl lg:text-4xl">
            Others use what is ordinary. We use what our ancestors knew — what
            our land already gives. That is not a business strategy. That is who
            we are.
          </blockquote>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            — Jawahar, Founder
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
