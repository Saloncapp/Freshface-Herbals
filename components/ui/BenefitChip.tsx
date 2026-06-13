import { Sparkles } from "lucide-react";

interface BenefitChipProps {
  label: string;
  className?: string;
}

export default function BenefitChip({ label, className = "" }: BenefitChipProps) {
  return (
    <span
      className={`inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-gold/30 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent px-3 py-1 text-xs font-medium leading-snug text-goldLight shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ${className}`}
    >
      <Sparkles size={11} className="shrink-0 text-gold/80" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}
