"use client";

import { motion } from "framer-motion";
import { MapPin, Train, ShoppingBag, Utensils, School, Clock } from "lucide-react";

const nearby = [
  { icon: Train, name: "Raja Ki Mandi Railway Station", dist: "0.4 km" },
  { icon: ShoppingBag, name: "Sanjay Place Market", dist: "2.1 km" },
  { icon: School, name: "Agra College", dist: "1.3 km" },
  { icon: Utensils, name: "MG Road & Eateries", dist: "1.8 km" },
  { icon: MapPin, name: "Agra Fort Station", dist: "3.0 km" },
  { icon: Clock, name: "ISBT Bus Stand", dist: "5.5 km" },
];

export default function Location() {
  return (
    <section id="location" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="section-tag">The location</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Right in the{" "}
            <span className="gold-text italic">middle of everything.</span>
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed">
            Raja Mandi is one of the oldest, most well-connected commercial
            stretches in Agra. Customers, staff and suppliers all reach you
            without a second thought.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-5 md:gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-7 relative rounded-3xl overflow-hidden border border-gold/20 aspect-[4/3] md:aspect-auto md:min-h-[520px] bg-card"
          >
            <iframe
              title="Raja Mandi Market, Agra — map"
              src="https://www.google.com/maps?q=Raja+Ki+Mandi,+Agra,+Uttar+Pradesh&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[60%] contrast-110 opacity-90"
            />
            <div className="absolute top-5 left-5 px-4 py-2.5 rounded-full bg-ink/90 backdrop-blur border border-gold/30 flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              <span className="text-xs font-mono tracking-wider text-cream">
                RAJA MANDI · AGRA 282002
              </span>
            </div>
          </motion.div>

          {/* Nearby list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 flex flex-col justify-center"
          >
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-gold mb-4">
              What&apos;s nearby
            </div>
            <ul className="space-y-px bg-cream/5 rounded-2xl overflow-hidden border border-cream/10">
              {nearby.map((n) => {
                const Icon = n.icon;
                return (
                  <li
                    key={n.name}
                    className="flex items-center justify-between gap-4 px-5 py-4 bg-ink/40 hover:bg-gold/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full border border-gold/30 text-gold flex items-center justify-center flex-shrink-0">
                        <Icon size={14} strokeWidth={2} />
                      </div>
                      <span className="text-sm text-cream/90 font-medium">
                        {n.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gold tabular">
                      {n.dist}
                    </span>
                  </li>
                );
              })}
            </ul>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Raja+Ki+Mandi+Agra"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 self-start px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-ink transition-colors text-sm font-medium"
            >
              <MapPin size={14} />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
