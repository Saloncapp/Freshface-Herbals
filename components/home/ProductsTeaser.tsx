"use client";

import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GoldDivider from "@/components/ui/GoldDivider";
import { featuredProducts } from "@/data/products";

export default function ProductsTeaser() {
  return (
    <section className="bg-deep py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Collection
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-cream md:text-5xl">
            Daily Care, Professional Grade
          </h2>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/45">
            Shampoos, serums, moisturisers, and lip care — herbal formulations
            made for professional salon service.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 0.15}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-gold/10 bg-forest p-6 transition-all duration-500 hover:scale-[1.02] hover:border-gold/30 hover:shadow-[0_4px_24px_rgba(201,168,76,0.06)]">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gold/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                  {product.category}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-cream transition-colors duration-300 group-hover:text-goldLight">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.ingredients.slice(0, 3).map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full bg-moss/50 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-cream/55"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block rounded-sm border border-gold bg-gold/10 px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            View All Products
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
