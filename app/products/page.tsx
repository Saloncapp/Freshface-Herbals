import ProductCard from "@/components/products/ProductCard";
import GoldDivider from "@/components/ui/GoldDivider";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      <section className="flex min-h-[40vh] items-center justify-center bg-gradient-to-b from-deep to-forest pt-20">
        <div className="px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Collection
          </p>
          <h1 className="mt-3 font-serif text-5xl font-light text-cream md:text-6xl">
            Botanical Products
          </h1>
          <GoldDivider className="mx-auto mt-6 max-w-xs" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cream/50">
            Cold-pressed oils and salon-grade facial kits — every product
            carries the essence of the Kavery Delta.
          </p>
        </div>
      </section>

      <section className="bg-forest py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
