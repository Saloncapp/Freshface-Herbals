import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GoldDivider from "@/components/ui/GoldDivider";

const generations = [
  {
    name: "Lakshmi Devi",
    era: "First Generation · 1952",
    role: "The Herbalist",
    story:
      "Born along the Kavery riverbanks, Lakshmi learned botanical medicine from village elders. She cultivated the first herb garden that would become the foundation of everything we create today.",
  },
  {
    name: "Priya Lakshmi",
    era: "Second Generation · 1978",
    role: "The Innovator",
    story:
      "Priya transformed her mother's garden remedies into salon-grade formulations. She pioneered cold-pressed oil extraction in the delta region, ensuring every nutrient reached the skin intact.",
  },
  {
    name: "Ananya Priya",
    era: "Third Generation · Today",
    role: "The Visionary",
    story:
      "Ananya carries the legacy into the modern world — maintaining ancestral purity while bringing Fresh Face Herbals to a new generation who values authenticity over artificiality.",
  },
];

const values = [
  {
    title: "Zero Synthetics",
    description:
      "Not a single artificial ingredient has ever entered our formulations. If nature didn't make it, we don't use it.",
  },
  {
    title: "Delta Sourced",
    description:
      "Every botanical is grown or wild-harvested within the Kavery Delta region, supporting local farming communities.",
  },
  {
    title: "Salon Heritage",
    description:
      "Our formulas were perfected in professional salon settings over decades — not in laboratories.",
  },
  {
    title: "Generational Wisdom",
    description:
      "Each recipe carries refinements from three generations of hands-on practice, not market research.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="flex min-h-[50vh] items-center justify-center bg-gradient-to-b from-deep to-forest pt-20">
        <div className="px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Heritage
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light text-cream md:text-6xl">
            Three Generations of
            <span className="mt-2 block italic text-gold">River Soil Wisdom</span>
          </h1>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
        </div>
      </section>

      <section className="bg-forest py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl font-light text-cream md:text-4xl">
              The Kavery Delta Story
            </h2>
            <div className="mt-8 space-y-6 text-sm leading-relaxed text-cream/60">
              <p>
                Where the sacred Kavery river meets the Bay of Bengal, a unique
                delta ecosystem has nurtured medicinal plants for millennia. The
                alluvial soil — rich in minerals deposited over centuries of
                monsoon floods — produces botanicals of extraordinary potency.
              </p>
              <p>
                In 1952, Lakshmi Devi recognised what this land offered. While
                others sought chemical shortcuts, she walked the riverbanks at
                dawn, collecting neem leaves, tulsi stems, and hibiscus petals.
                Her small herb garden grew into a sanctuary of 43 medicinal
                plants — each one catalogued, each one cherished.
              </p>
              <p>
                Today, Fresh Face Herbals stands as proof that the most powerful
                skincare doesn&apos;t come from a lab. It comes from the earth,
                from patience, and from three generations of women who believed
                that beauty and nature are inseparable.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section id="generations" className="bg-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealOnScroll className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              The Lineage
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-cream">
              Three Generations
            </h2>
            <GoldDivider className="mx-auto mt-6 max-w-xs" />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {generations.map((gen, index) => (
              <RevealOnScroll key={gen.name} delay={index * 0.15}>
                <div className="h-full rounded-lg border border-gold/10 bg-forest p-8 transition-all hover:border-gold/30">
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">
                    {gen.era}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-cream">
                    {gen.name}
                  </h3>
                  <p className="mt-1 text-sm italic text-gold/70">{gen.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/50">
                    {gen.story}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="font-serif text-8xl leading-none text-gold/20">
            &ldquo;
          </span>
          <blockquote className="-mt-8 font-serif text-2xl font-light italic leading-relaxed text-cream md:text-3xl">
            The river gives us water. The soil gives us herbs. Our hands give
            them purpose. This is not a business — it is a covenant with the
            earth.
          </blockquote>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            — Priya Lakshmi, Second Generation
          </p>
        </div>
      </section>

      <section id="philosophy" className="bg-forest py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealOnScroll className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              What We Believe
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-cream">
              Our Philosophy
            </h2>
            <GoldDivider className="mx-auto mt-6 max-w-xs" />
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value, index) => (
              <RevealOnScroll key={value.title} delay={index * 0.1}>
                <div className="rounded-lg border border-gold/10 bg-canopy/30 p-8">
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
    </>
  );
}
