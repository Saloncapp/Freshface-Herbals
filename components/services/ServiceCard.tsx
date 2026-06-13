"use client";

import Image from "next/image";
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
      className="group h-full overflow-hidden rounded-lg border border-gold/10 bg-canopy/50 transition-colors hover:border-gold/30"
    >
      <Link href={`/services/${service.id}`} className="flex h-full flex-col">
        {service.image ? (
          <div className="relative aspect-[4/3] overflow-hidden bg-deep/40">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex justify-end p-4">
              {service.duration && (
                <span className="flex items-center gap-1 rounded-full border border-gold/20 bg-deep/60 px-3 py-1 text-xs text-gold backdrop-blur-sm">
                  <Clock size={12} />
                  {service.duration}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-start justify-between p-6 pb-0">
            <Icon className="h-8 w-8 text-gold" />
            {service.duration && (
              <span className="flex items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-xs text-gold">
                <Clock size={12} />
                {service.duration}
              </span>
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-xl text-cream">{service.name}</h3>
          <p className="mt-1 text-sm text-gold/80">{service.tagline}</p>
          <p className="mt-4 line-clamp-3 flex-1 text-sm leading-relaxed text-cream/55">
            {service.description}
          </p>

          <span className="mt-6 inline-block w-fit rounded-sm border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-deep">
            View Steps
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
