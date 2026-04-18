"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Where exactly is the property located?",
    a: "The complex is at Raja Mandi Main Market, Agra 282002 — roughly a 5-minute walk from Raja Ki Mandi railway station and within 2 km of Sanjay Place and MG Road.",
  },
  {
    q: "What types of units are available?",
    a: "Ground floor retail shops (100–300 sq. ft.), first floor offices with finished interiors, and a basement godown for storage. Units can be combined based on your requirement.",
  },
  {
    q: "Is it ready-to-move?",
    a: "Yes. Flooring, ceiling, electricity, water and paint are all in place. You can start operations from day one — just bring your fittings and stock.",
  },
  {
    q: "Do you work through brokers?",
    a: "No. We rent directly to tenants. That means zero brokerage, faster paperwork, and a direct line to the owner for any issue.",
  },
  {
    q: "What kind of businesses do you prefer?",
    a: "Retail shops (clothing, mobile, pharmacy, grocery, salon, food), professional offices (CA, advocate, doctor, consultant, coaching), and small warehousing (wholesale, e-commerce). We will happily discuss any genuine business.",
  },
  {
    q: "How do I schedule a visit?",
    a: "Call or WhatsApp +91 88392 69122. Visits are possible 7 days a week between 10 AM and 7 PM. For outstation enquiries, we can share a video walkthrough too.",
  },
  {
    q: "What are the rent and deposit terms?",
    a: "Rent depends on floor, size and intended use. Standard deposit is 3–6 months rent. Lock-in is flexible. Final terms are always discussed directly with the owner.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-32 bg-gradient-to-b from-ink via-surface to-ink"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag justify-center [&::before]:hidden">
            <span className="text-gold">✦</span> Your questions
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Things tenants usually{" "}
            <span className="gold-text italic">ask first.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? "bg-card/80 border-gold/30"
                    : "bg-card/30 border-cream/10 hover:border-gold/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 md:px-7 py-5 flex items-center justify-between gap-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg md:text-xl font-semibold pr-4">
                    {f.q}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? "border-gold bg-gold text-ink rotate-45"
                        : "border-cream/20 text-cream/60"
                    }`}
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-7 pb-6 text-cream/70 leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
