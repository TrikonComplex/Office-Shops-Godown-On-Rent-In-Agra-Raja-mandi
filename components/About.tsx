"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Corner plot with main-market facing entrance",
  "Ground floor, first floor & basement units",
  "Modern interiors — tiles, false ceiling, ACs possible",
  "Steady power supply with inverter backup available",
  "Wide staircase, two-wheeler parking right outside",
  "Walking distance from Raja Ki Mandi railway station",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-12 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Front_complex_image.jpg"
              alt="Front view of Trikon Commercial Complex in Raja Mandi Agra"
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute -bottom-6 -right-4 md:-right-10 px-6 py-5 rounded-2xl bg-gradient-to-br from-gold to-goldLight text-ink shadow-2xl max-w-[240px]"
          >
            <div className="font-display text-4xl font-bold leading-none tabular">
              12+
            </div>
            <div className="text-xs font-mono uppercase tracking-wider mt-2 opacity-80">
              Rentable Units
            </div>
            <div className="text-sm mt-2 font-medium leading-snug">
              Shops, offices & storage — choose what fits your business.
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-6"
        >
          <div className="section-tag">About the property</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            A landmark complex in{" "}
            <span className="gold-text italic">Agra&apos;s oldest market.</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed text-lg">
            Raja Mandi has been the trading heart of Agra for generations. Our
            three-storey commercial complex sits on the main market road, giving
            your business steady daily footfall, railway-station proximity and
            the kind of visibility you can&apos;t buy on a side lane.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-gold mt-0.5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-sm text-cream/80 leading-relaxed">
                  {h}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
