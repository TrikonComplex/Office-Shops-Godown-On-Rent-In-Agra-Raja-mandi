"use client";

import { motion } from "framer-motion";
import { Store, Briefcase, Warehouse, ArrowUpRight } from "lucide-react";

const spaces = [
  {
    id: "shops",
    icon: Store,
    tag: "Ground Floor",
    title: "Retail Shops",
    image: "/images/Big_Shop_image.png",
    blurb:
      "Main-road facing shops with shutter fronts, tile flooring and bright LED lighting. Perfect for clothing, mobile, pharmacy, salon, bakery and grocery businesses.",
    bullets: [
      "100 – 300 sq. ft. configurations",
      "Full shutter front, lockable",
      "Individual electricity meters",
      "Walk-in ready, move in today",
    ],
    ideal: "Clothing · Mobile · Pharmacy · Salon · Cafe · Electronics",
  },
  {
    id: "offices",
    icon: Briefcase,
    tag: "First Floor",
    title: "Modern Offices",
    image: "/images/Middle_shop_image1.png",
    blurb:
      "Calm, well-lit office cabins above the market bustle. Wallpapered walls, false ceiling, premium flooring and sliding balconies — ready for desks to walk in.",
    bullets: [
      "Designer interiors already done",
      "Natural light + sliding windows",
      "Ideal for 2 – 8 person teams",
      "Shared washroom & staircase",
    ],
    ideal: "CA · Advocate · Coaching · Startup · Digital Agency · Consultant",
  },
  {
    id: "godown",
    icon: Warehouse,
    tag: "Storage",
    title: "Godown Space",
    image: "/images/Small_godown_space.png",
    blurb:
      "Cool, dry storage for wholesalers, e-commerce sellers and distributors. Racked shelving already installed, wide doorway for loading and unloading.",
    bullets: [
      "Covered storage, dust-sealed",
      "Shelving & racking in place",
      "Easy loading access",
      "Secure, lockable area",
    ],
    ideal: "Wholesale · E-commerce · Distribution · Inventory · Backup Stock",
  },
];

export default function Spaces() {
  return (
    <section id="spaces" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="section-tag">What&apos;s on offer</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Three kinds of spaces.{" "}
            <span className="gold-text italic">One address.</span>
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            Whether you&apos;re opening your first shop, shifting your office or
            storing inventory — there&apos;s a unit at Trikon Complex sized for
            it.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {spaces.map((s, idx) => {
            const Icon = s.icon;
            const flip = idx % 2 === 1;
            return (
              <motion.article
                id={s.id}
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`grid md:grid-cols-12 gap-5 md:gap-8 items-stretch ${
                  flip ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="md:col-span-7 relative aspect-[16/10] md:aspect-auto rounded-3xl overflow-hidden group card-lift">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={`${s.title} for rent at Raja Mandi Agra`}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-ink/70 backdrop-blur border border-gold/30 text-[10px] font-mono tracking-[0.2em] uppercase text-gold">
                    {s.tag}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs font-mono text-cream/60 mb-1">
                        0{idx + 1} / 03
                      </div>
                      <div className="font-display text-3xl md:text-4xl font-bold">
                        {s.title}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-ink flex items-center justify-center flex-shrink-0">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="md:col-span-5 flex flex-col justify-center p-6 md:p-10 rounded-3xl bg-card/50 border border-cream/5 hover:border-gold/20 transition-colors">
                  <p className="text-cream/80 leading-relaxed mb-6">
                    {s.blurb}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-cream/70"
                      >
                        <span className="text-gold mt-1.5">◆</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-cream/10">
                    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-cream/40 mb-2">
                      Ideal for
                    </div>
                    <div className="text-sm text-cream/90 leading-relaxed">
                      {s.ideal}
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-gold font-medium group/btn"
                  >
                    Enquire about {s.title.toLowerCase()}
                    <ArrowUpRight
                      size={16}
                      className="group-hover/btn:rotate-45 transition-transform"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
