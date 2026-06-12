"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GoldDivider from "@/components/ui/GoldDivider";
import WaterSplash from "@/components/ui/WaterSplash";

const differences = [
  {
    title: "Made for Salons, Not Shelves",
    description:
      "Most herbal brands sell the same products to everyone. We formulate exclusively for professional salon rituals — facials, massages, hair colour, and pedicures that demand real results.",
  },
  {
    title: "Ancestral Wisdom, Not Shortcuts",
    description:
      "Others follow the ordinary path — mass-produced blends with generic ingredients. We follow our ancestors. Every formula carries generations of hands-on practice passed down through our land.",
  },
  {
    title: "From Our Own Land",
    description:
      "Every botanical we use already grows in our soil — neem, tulsi, hibiscus, henna, and more. We do not import what nature has already placed at our feet. Our land is our laboratory.",
  },
  {
    title: "Nothing Synthetic, Ever",
    description:
      "If nature did not make it, we do not use it. No chemicals, no fillers, no artificial fragrances. Pure earth, pure intention — the way our ancestors intended.",
  },
];

function LandSVG() {
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
      <text
        x="200"
        y="105"
        textAnchor="middle"
        fill="#c9a84c"
        fontSize="10"
        fontFamily="serif"
      >
        Our Land
      </text>
      <text
        x="200"
        y="250"
        textAnchor="middle"
        fill="#f9f4e8"
        fontSize="12"
        opacity="0.5"
        fontFamily="sans-serif"
      >
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
      <text x="60" y="170" fill="#4a7a50" fontSize="9" opacity="0.6">
        Native Herbs
      </text>
      <text x="280" y="180" fill="#4a7a50" fontSize="9" opacity="0.6">
        River Plains
      </text>
    </svg>
  );
}

export default function OriginSection() {
  return (
    <section id="difference" className="relative overflow-hidden bg-forest py-24">
      <WaterSplash variant="accent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Why We Stand Apart
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
            Not Just Another Herbal Brand
          </h2>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/50">
            The market is full of herbal companies — but very few are built for
            the salon. We are.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-gold/10">
              <LandSVG />
            </div>
          </RevealOnScroll>

          <div className="space-y-6">
            {differences.map((item, index) => (
              <RevealOnScroll key={item.title} delay={index * 0.12}>
                <div className="group rounded-lg border border-gold/10 bg-canopy/30 p-6 transition-all duration-500 hover:border-gold/30">
                  <h3 className="font-serif text-xl text-gold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
