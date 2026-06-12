const items = [
  "Made for Salons",
  "From Our Land",
  "Ancestral Wisdom",
  "Chemical Free",
  "Professional Grade",
  "Zero Synthetics",
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden bg-gold py-3">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-deep"
          >
            {item}
            <span className="mx-8 text-deep/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
