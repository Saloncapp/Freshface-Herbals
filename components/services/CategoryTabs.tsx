"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { serviceCategories } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function CategoryTabs() {
  const visibleCategories = serviceCategories.filter((category) =>
    ["facial", "massage", "pedicure", "manicure"].includes(category.id)
  );
  const [activeTab, setActiveTab] = useState("facial");
  const [direction, setDirection] = useState(0);

  const tabIds = visibleCategories.map((c) => c.id);
  const activeIndex = tabIds.indexOf(activeTab);

  const handleTabChange = (value: string) => {
    const newIndex = tabIds.indexOf(value);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveTab(value);
  };

  const activeCategory = visibleCategories.find((c) => c.id === activeTab);

  return (
    <Tabs.Root value={activeTab} onValueChange={handleTabChange}>
      <Tabs.List className="flex flex-wrap justify-center gap-2 border-b border-gold/10 pb-6">
        {visibleCategories.map((category) => (
          <Tabs.Trigger
            key={category.id}
            value={category.id}
            className="rounded-sm px-6 py-2.5 text-sm font-medium uppercase tracking-wider text-cream/60 transition-all data-[state=active]:bg-gold/10 data-[state=active]:text-gold hover:text-gold"
          >
            {category.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <div className="relative mt-10 min-h-[400px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeCategory?.services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Tabs.Root>
  );
}
