"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Service } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25 }}
      className="h-full overflow-hidden rounded-lg border border-gold/10 bg-canopy/50 transition-colors hover:border-gold/30"
    >
      <Link href={`/services/${service.id}`} className="block h-full p-6">
        <div className="flex items-start justify-between">
          <Icon className="h-8 w-8 text-gold" />
          {service.duration && (
            <span className="flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-xs text-gold">
              <Clock size={12} />
              {service.duration}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-serif text-xl text-cream">{service.name}</h3>
        <p className="mt-1 text-sm text-gold/80">{service.tagline}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-cream/55">
          {service.description}
        </p>

        <span className="mt-6 inline-block rounded-sm border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep">
          View Steps
        </span>
      </Link>
    </motion.div>
  );
}
