"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";

const heroSlides = [
  "/images/Front_Image_complex_1.png",
  "/images/Busy_market_place_image.png",
  "/images/Front_complex_image.jpg",
  "/images/Big_Shop_image.png",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
    >
      {/* Video-effect background: crossfading Ken Burns images */}
      <div className="absolute inset-0 bg-ink">
        {heroSlides.map((src, i) => (
          <div key={i} className="slide-bg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover ken-burns"
            />
          </div>
        ))}
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
        <div className="absolute inset-0 stripe-bg opacity-40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 w-full pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 backdrop-blur mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
            <span className="text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-gold">
              Available · Direct Owner · No Broker
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="hero-title font-display font-bold leading-[0.95] tracking-tight text-[clamp(3rem,9vw,7rem)]">
            <span className="block text-cream">Commercial Shops,</span>
            <span className="block">
              <span className="gold-text italic">Offices & Godown</span>
            </span>
            <span className="block text-cream/90 text-[0.7em] font-normal font-display mt-3">
              on rent in Raja Mandi, Agra
            </span>
          </h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-base md:text-lg text-cream/70 max-w-2xl leading-relaxed"
          >
            Ready-to-move retail shops, modern offices and storage godown at the
            heart of one of Agra&apos;s oldest and busiest markets — walking
            distance from Raja Ki Mandi railway station.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/918839269122?text=Hi%2C%20I%20am%20interested%20in%20renting%20commercial%20space%20at%20Raja%20Mandi%20Agra."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gold text-ink font-semibold btn-shimmer hover:bg-goldLight transition-colors"
            >
              Book a Site Visit
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+918839269122"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold transition-colors"
            >
              <Phone size={16} strokeWidth={2.5} />
              <span className="font-medium">+91 88392 69122</span>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10 border border-cream/10 rounded-2xl overflow-hidden backdrop-blur-sm max-w-4xl"
          >
            {[
              { n: "12+", l: "Units Available" },
              { n: "3", l: "Floors" },
              { n: "0", l: "Brokerage" },
              { n: "24/7", l: "Access" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-ink/60 px-4 py-5 md:py-6 flex flex-col items-start gap-1"
              >
                <div className="font-display text-3xl md:text-4xl font-bold gold-text tabular">
                  {s.n}
                </div>
                <div className="text-[10px] md:text-xs font-mono tracking-[0.18em] uppercase text-cream/50">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Location pill, bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="hidden md:flex absolute right-8 bottom-28 items-center gap-3 px-5 py-3 rounded-full bg-card/80 backdrop-blur border border-gold/20 float-soft"
        >
          <MapPin size={14} className="text-gold" />
          <span className="text-xs font-mono tracking-wider text-cream/80">
            RAJA MANDI MAIN MARKET · AGRA 282002
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cream/40">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-cream/20 relative overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-3 bg-gold scroll-dot" />
        </div>
      </div>
    </section>
  );
}
