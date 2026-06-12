"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GoldDivider from "@/components/ui/GoldDivider";

const values = [
  {
    title: "Salon-First Formulations",
    description:
      "Every product is designed for professional salon use — tested in real treatments, refined through real practice, not market research.",
  },
  {
    title: "Ingredients From Our Soil",
    description:
      "We do not source from distant suppliers. Neem, tulsi, hibiscus, henna, and dozens more grow in our own land — harvested with care, used with purpose.",
  },
  {
    title: "Ancestral Knowledge",
    description:
      "Our formulas are not invented in a lab. They are inherited — refined over generations of hands that knew which leaf heals, which root nourishes, which flower restores.",
  },
  {
    title: "Zero Compromise",
    description:
      "No synthetics. No shortcuts. No dilution. What our ancestors trusted, we trust. What our land provides, we honour.",
  },
];

export default function FounderStory() {
  return (
    <section id="story" className="scroll-mt-24 bg-deep py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Heritage
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
            A Story Rooted in
            <span className="mt-2 block italic text-gold">Our Own Land</span>
          </h2>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
        </RevealOnScroll>

        <div className="mx-auto max-w-4xl">
          <RevealOnScroll>
            <div className="space-y-6 text-sm leading-relaxed text-cream/60">
              <p>
                In a world where herbal brands multiply by the day, most follow
                the same path — generic ingredients, mass production, products
                meant for anyone and everyone. Jawahar saw something different.
              </p>
              <p>
                Growing up surrounded by the medicinal plants of Tamil Nadu, he
                understood what our land already offers. Neem leaves along the
                riverbanks. Tulsi in every courtyard. Hibiscus, henna, and
                herbs that his ancestors had used for generations — not as
                business, but as a way of life.
              </p>
              <p>
                While others looked outward for ingredients and inspiration,
                Jawahar looked inward — to the soil beneath his feet, to the
                wisdom passed through his family, to the professional ritual that
                demanded something more than ordinary herbal products.
              </p>
              <p>
                Fresh Face Herbals was born from that vision: herbals made
                exclusively for salon service, using only what our own land
                provides, following only what our ancestors taught. Not the
                ordinary path. The ancestral one.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-12 flex items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <span className="font-serif text-2xl text-gold">J</span>
            </div>
            <div>
              <p className="font-serif text-xl text-cream">Jawahar</p>
              <p className="text-sm italic text-gold/70">Founder, Fresh Face Herbals</p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {values.map((value, index) => (
            <RevealOnScroll key={value.title} delay={index * 0.1}>
              <div className="h-full rounded-lg border border-gold/10 bg-forest p-8 transition-all hover:border-gold/30">
                <h3 className="font-serif text-xl text-gold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">
                  {value.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
