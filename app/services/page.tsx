import CategoryTabs from "@/components/services/CategoryTabs";
import GoldDivider from "@/components/ui/GoldDivider";

export default function ServicesPage() {
  return (
    <>
      <section className="flex min-h-[40vh] items-center justify-center bg-gradient-to-b from-deep to-forest pt-20">
        <div className="px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Rituals
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light text-cream md:text-6xl">
            Salon Services
          </h1>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/50">
            Every treatment follows ancestral protocols — step by step, botanical
            by botanical. Click any service to open the full animated ritual.
          </p>
        </div>
      </section>

      <section className="bg-forest py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryTabs />
        </div>
      </section>
    </>
  );
}
