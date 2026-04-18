"use client";

const items = [
  "Shops for Rent in Agra",
  "Office Space Raja Mandi",
  "Godown for Rent Agra",
  "Direct from Owner",
  "No Brokerage",
  "Ready to Move",
  "Near Raja Ki Mandi Station",
  "Prime Commercial Location",
  "CA & Startup Offices",
  "Retail Shops",
  "Basement Storage",
  "High Footfall Market",
];

export default function Marquee() {
  return (
    <section
      aria-label="Property keywords"
      className="py-6 border-y border-gold/10 bg-gradient-to-r from-ink via-surface to-ink"
    >
      <div className="marquee">
        <div className="marquee-content">
          {items.map((t, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center gap-6 pr-6 whitespace-nowrap"
            >
              <span className="font-display italic text-2xl md:text-3xl text-cream/40">
                {t}
              </span>
              <span className="text-gold text-2xl">✦</span>
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {items.map((t, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center gap-6 pr-6 whitespace-nowrap"
            >
              <span className="font-display italic text-2xl md:text-3xl text-cream/40">
                {t}
              </span>
              <span className="text-gold text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
