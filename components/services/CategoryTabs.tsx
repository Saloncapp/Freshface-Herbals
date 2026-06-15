"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import {
  serviceCategories,
  type ServiceCategory,
  type ServiceSubCategory,
} from "@/data/services";
import ServiceCard from "./ServiceCard";

function getActiveServices(
  category: ServiceCategory | undefined,
  subTabId: string | undefined
) {
  if (!category) return [];

  if (category.subCategories) {
    const subCategory =
      category.subCategories.find((sub) => sub.id === subTabId) ??
      category.subCategories[0];
    return subCategory?.services ?? [];
  }

  return category.services ?? [];
}

function getDefaultSubTab(category: ServiceCategory | undefined) {
  return category?.subCategories?.[0]?.id;
}

export default function CategoryTabs() {
  const visibleCategories = serviceCategories;
  const [activeTab, setActiveTab] = useState("facial");
  const [activeSubTabs, setActiveSubTabs] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(
        visibleCategories
          .filter((category) => category.subCategories?.length)
          .map((category) => [category.id, category.subCategories![0].id])
      )
  );
  const [direction, setDirection] = useState(0);
  const [subDirection, setSubDirection] = useState(0);

  const tabIds = visibleCategories.map((category) => category.id);
  const activeIndex = tabIds.indexOf(activeTab);
  const activeCategory = visibleCategories.find(
    (category) => category.id === activeTab
  );
  const activeSubTab =
    activeSubTabs[activeTab] ?? getDefaultSubTab(activeCategory);
  const activeServices = getActiveServices(activeCategory, activeSubTab);
  const contentKey = activeCategory?.subCategories
    ? `${activeTab}-${activeSubTab}`
    : activeTab;

  const handleTabChange = (value: string) => {
    const newIndex = tabIds.indexOf(value);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveTab(value);
  };

  const handleSubTabChange = (value: string) => {
    const subTabs = activeCategory?.subCategories ?? [];
    const currentIndex = subTabs.findIndex((sub) => sub.id === activeSubTab);
    const newIndex = subTabs.findIndex((sub) => sub.id === value);
    setSubDirection(newIndex > currentIndex ? 1 : -1);
    setActiveSubTabs((current) => ({ ...current, [activeTab]: value }));
  };

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

      {activeCategory?.subCategories && activeSubTab && (
        <Tabs.Root
          value={activeSubTab}
          onValueChange={handleSubTabChange}
          className="mt-8"
        >
          <Tabs.List className="flex flex-wrap justify-center gap-2">
            {activeCategory.subCategories.map((subCategory: ServiceSubCategory) => (
              <Tabs.Trigger
                key={subCategory.id}
                value={subCategory.id}
                className="rounded-full border border-gold/15 px-5 py-2 text-xs font-medium uppercase tracking-wider text-cream/50 transition-all data-[state=active]:border-gold/40 data-[state=active]:bg-gold/10 data-[state=active]:text-gold hover:text-gold"
              >
                {subCategory.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      )}

      <div className="relative mt-10 min-h-[400px] overflow-hidden">
        <AnimatePresence mode="wait" custom={activeCategory?.subCategories ? subDirection : direction}>
          <motion.div
            key={contentKey}
            custom={activeCategory?.subCategories ? subDirection : direction}
            initial={{ opacity: 0, x: (activeCategory?.subCategories ? subDirection : direction) * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: (activeCategory?.subCategories ? subDirection : direction) * -60 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {activeServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Tabs.Root>
  );
}
