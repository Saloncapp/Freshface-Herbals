import ProductCard from "@/components/products/ProductCard";
import GoldDivider from "@/components/ui/GoldDivider";
import { products } from "@/data/products";

const categories = Array.from(
  new Set(products.map((p) => p.category))
);

function BotanicalAccent() {
  return (
    <svg
      className="pointer-events-none absolute right-8 top-1/2 hidden h-48 w-48 -translate-y-1/2 opacity-[0.07] lg:block"
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 10 C40 30 20 50 30 80 C35 95 50 100 60 110 C70 100 85 95 90 80 C100 50 80 30 60 10Z"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-gold"
      />
      <path
        d="M60 20 L60 100 M40 50 L80 50 M45 35 L75 65 M75 35 L45 65"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-gold"
      />
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-gradient-to-b from-deep via-forest to-canopy pt-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(42,74,46,0.4) 0%, transparent 40%)",
          }}
        />
        <BotanicalAccent />

        <div className="relative z-10 px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-gold">
            SIGNATURE HERBAL FORMULATIONS
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light text-cream md:text-7xl">
            Daily Care Collection
          </h1>
          <GoldDivider className="mx-auto mt-8 max-w-xs" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/55">
            Herbal shampoos, conditioners, serums, and moisturisers — each
            formula crafted for salon service and everyday skin and hair health.
          </p>

          <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <p className="font-serif text-3xl text-gold">{products.length}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-cream/40">
                Formulations
              </p>
            </div>
            <div className="h-8 w-px bg-gold/20" />
            <div className="text-center">
              <p className="font-serif text-3xl text-gold">{categories.length}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-cream/40">
                Categories
              </p>
            </div>
            <div className="h-8 w-px bg-gold/20" />
            <div className="text-center">
              <p className="font-serif text-3xl text-gold">100%</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-cream/40">
                Natural
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-forest py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-gold/15 bg-canopy/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-gold/80"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-forest pb-24 pt-12">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold/60">
              Curated Shelf
            </p>
            <h2 className="mt-2 font-serif text-3xl font-light text-cream md:text-4xl">
              Select Your Treatment
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
