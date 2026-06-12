"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import BenefitsList from "./BenefitsList";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`h-fit w-full self-start overflow-hidden rounded-lg border bg-canopy/50 transition-all duration-300 hover:scale-[1.02] ${
        product.isOil
          ? "border-gold/10 hover:border-gold/40"
          : "border-gold/10 hover:border-gold/20"
      }`}
    >
      <div className="p-6">
        <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          {product.category}
        </span>

        <h3 className="mt-4 font-serif text-2xl text-cream">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-cream/50">
          {product.description}
        </p>

        <AnimatePresence mode="wait">
          {expanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-6 border-t border-gold/10 pt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
                  How to Use
                </h4>
                <ol className="mt-4 space-y-3">
                  {product.howToUse.map((step, index) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex gap-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-semibold text-gold">
                        {index + 1}
                      </span>
                      <span className="text-sm text-cream/70">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Benefits
                </h4>
                <BenefitsList benefits={product.benefits} isVisible={expanded} />
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Key Ingredients
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.ingredients.map((ing, index) => (
                    <motion.span
                      key={ing}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                      className="rounded-full bg-moss/60 px-3 py-1 text-xs text-cream/70"
                    >
                      {ing}
                    </motion.span>
                  ))}
                </div>
              </div>

              <button className="mt-6 w-full rounded-sm border border-gold bg-gold/10 py-3 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep">
                Add to Enquiry
              </button>

              <button
                onClick={() => setExpanded(false)}
                className="mt-4 w-full text-sm font-medium uppercase tracking-wider text-gold/70 transition-colors hover:text-gold"
              >
                Collapse ↑
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setExpanded(true)}
                className="mt-6 rounded-sm border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep"
              >
                Learn More
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
