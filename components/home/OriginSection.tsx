"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GoldDivider from "@/components/ui/GoldDivider";

const timeline = [
  {
    year: "1952",
    title: "The First Harvest",
    description:
      "Grandmother Lakshmi begins cultivating medicinal herbs along the Kavery riverbanks in Thanjavur district.",
  },
  {
    year: "1978",
    title: "Salon Heritage",
    description:
      "The family opens their first herbal salon, introducing delta botanicals to professional skincare rituals.",
  },
  {
    year: "2001",
    title: "Cold Press Revolution",
    description:
      "Second generation pioneers cold-pressed oil extraction, preserving nutrient integrity of every botanical.",
  },
  {
    year: "Today",
    title: "Fresh Face Herbals",
    description:
      "Three generations united — 43 botanicals, salon-grade formulations, and a promise of zero synthetics.",
  },
];

function KaveryMapSVG() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" fill="none">
      <rect width="400" height="300" fill="#1a3320" rx="8" />
      <path
        d="M50 150 Q120 80, 200 120 Q280 160, 350 100"
        stroke="#4a7a50"
        strokeWidth="3"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M50 150 Q120 80, 200 120 Q280 160, 350 100"
        stroke="#c9a84c"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        strokeDasharray="4 4"
      />
      <circle cx="200" cy="120" r="6" fill="#c9a84c" />
      <text x="200" y="105" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="serif">
        Kavery Delta
      </text>
      <text x="200" y="250" textAnchor="middle" fill="#f9f4e8" fontSize="12" opacity="0.5" fontFamily="sans-serif">
        Tamil Nadu, India
      </text>
      {[80, 140, 260, 320].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={100 + i * 30}
          r="3"
          fill="#4a7a50"
          opacity="0.5"
        />
      ))}
      <text x="60" y="170" fill="#4a7a50" fontSize="9" opacity="0.6">Herb Gardens</text>
      <text x="280" y="180" fill="#4a7a50" fontSize="9" opacity="0.6">Delta Plains</text>
    </svg>
  );
}

export default function OriginSection() {
  return (
    <section className="bg-forest py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Origin
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
            Born Along the Kavery
          </h2>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gold/10">
              <KaveryMapSVG />
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <RevealOnScroll key={item.year} delay={index * 0.15}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                      <span className="text-xs font-semibold text-gold">
                        {item.year.slice(2)}
                      </span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-gold/20" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-medium uppercase tracking-wider text-gold">
                      {item.year}
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
