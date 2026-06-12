"use client";

import dynamic from "next/dynamic";

function MapSkeleton() {
  return (
    <div className="flex h-full min-h-[320px] items-center justify-center rounded-lg bg-[#e8e0d0]">
      <div className="text-center">
        <div className="mx-auto mb-3 h-8 w-8 animate-pulse rounded-full border-2 border-gold/40 border-t-gold" />
        <p className="text-xs uppercase tracking-widest text-forest/50">
          Loading map…
        </p>
      </div>
    </div>
  );
}

const LandMapInner = dynamic(() => import("./LandMapInner"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function LandMap() {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-lg">
      <LandMapInner />
    </div>
  );
}
