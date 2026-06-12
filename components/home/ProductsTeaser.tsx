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
            From Our Land to Your Salon
          </h2>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 0.15}>
              <div className="group h-full rounded-lg border border-gold/10 bg-forest p-6 transition-all duration-300 hover:scale-[1.02] hover:border-gold/30">
                <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {product.category}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-cream">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.ingredients.slice(0, 3).map((ing) => (
                    <span
                      key={ing}
                      className="rounded-full bg-moss/50 px-2 py-0.5 text-xs text-cream/60"
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
            className="inline-block rounded-sm border border-gold bg-gold/10 px-8 py-3 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep"
          >
            View All Products
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
