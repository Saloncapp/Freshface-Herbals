"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import BenefitsList from "./BenefitsList";

interface ProductCardProps {
  product: Product;
  index?: number;
}

function CardBotanicalMark() {
  return (
    <svg
      className="absolute -right-2 -top-2 h-16 w-16 opacity-[0.06]"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.6" className="text-gold" />
      <path
        d="M32 8 C24 20 16 28 20 40 C22 48 28 52 32 56 C36 52 42 48 44 40 C48 28 40 20 32 8Z"
        stroke="currentColor"
        strokeWidth="0.5"
        className="text-gold"
      />
    </svg>
  );
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-fit w-full self-start"
    >
      <div
        className={`relative overflow-hidden rounded-lg border bg-gradient-to-br from-canopy/70 to-canopy/40 backdrop-blur-sm transition-all duration-500 ${
          expanded
            ? "border-gold/35 shadow-[0_8px_32px_rgba(201,168,76,0.08)]"
            : "border-gold/10 hover:border-gold/30 hover:shadow-[0_4px_24px_rgba(201,168,76,0.06)]"
        }`}
      >
        <CardBotanicalMark />

        {product.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-deep/40">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-canopy/50 to-transparent" />
          </div>
        ) : null}

        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold/40 via-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="inline-block rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
              {product.category}
            </span>
            <span className="font-serif text-sm text-gold/30">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="mt-5 font-serif text-2xl leading-tight text-cream transition-colors duration-300 group-hover:text-goldLight">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/50">
            {product.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.ingredients.slice(0, 3).map((ing) => (
              <span
                key={ing}
                className="rounded-full bg-moss/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-cream/50"
              >
                {ing}
              </span>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-6 border-t border-gold/10 pt-6">
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Ritual Steps
                  </h4>
                  <ol className="mt-4 space-y-3">
                    {product.howToUse.map((step, stepIndex) => (
                      <motion.li
                        key={step}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: stepIndex * 0.08,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex gap-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-[10px] font-semibold text-gold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-cream/65">
                          {step}
                        </span>
                      </motion.li>
                    ))}
                  </ol>
                </div>

                <div className="mt-6">
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Benefits
                  </h4>
                  <BenefitsList benefits={product.benefits} isVisible={expanded} />
                </div>

                <div className="mt-6">
                  <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                    Full Ingredient List
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.ingredients.map((ing, ingIndex) => (
                      <motion.span
                        key={ing}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: ingIndex * 0.06,
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="rounded-full border border-moss/40 bg-moss/50 px-3 py-1 text-xs text-cream/70"
                      >
                        {ing}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="mt-7 w-full py-2 text-xs font-medium uppercase tracking-[0.15em] text-gold/60 transition-colors duration-300 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  Collapse
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
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="mt-6 rounded-sm border border-gold/30 bg-gold/10 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97]"
                >
                  View Ritual Details
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
