"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/Busy_market_place_image.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20 ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        <div className="absolute inset-0 stripe-bg opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="section-tag justify-center [&::before]:hidden">
            <span className="text-gold">✦</span> Ready to move in?
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1] max-w-4xl mx-auto">
            Let&apos;s find the <span className="gold-text italic">right</span>{" "}
            <br className="hidden md:block" />
            space for your business.
          </h2>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto leading-relaxed">
            One call and we&apos;ll walk you through every unit — in person or
            over video. No broker, no pressure, just a straight conversation
            with the owner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/918839269122?text=Hi%2C%20I%20am%20interested%20in%20the%20Raja%20Mandi%20commercial%20property%20in%20Agra."
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card-lift group relative p-7 md:p-8 rounded-3xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 border border-emerald-400/25 overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6">
              <MessageCircle size={24} strokeWidth={2} />
            </div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-emerald-300 mb-2">
              Fastest
            </div>
            <div className="font-display text-2xl md:text-3xl font-bold mb-2">
              WhatsApp
            </div>
            <div className="text-cream/70 text-sm mb-6 leading-relaxed">
              Send a message, get photos, schedule a visit — all in one thread.
            </div>
            <div className="font-mono text-lg text-emerald-200 tabular">
              +91 88392 69122
            </div>
            <ArrowRight
              size={20}
              className="absolute top-7 right-7 text-emerald-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+918839269122"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="card-lift group relative p-7 md:p-8 rounded-3xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/25 overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-gold text-ink flex items-center justify-center mb-6">
              <Phone size={24} strokeWidth={2.5} />
            </div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-gold mb-2">
              Direct owner
            </div>
            <div className="font-display text-2xl md:text-3xl font-bold mb-2">
              Call Now
            </div>
            <div className="text-cream/70 text-sm mb-6 leading-relaxed">
              Mon–Sat, 10 AM to 7 PM. Call for rent details and available units.
            </div>
            <div className="font-mono text-lg text-goldLight tabular">
              +91 88392 69122
            </div>
            <ArrowRight
              size={20}
              className="absolute top-7 right-7 text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>

          {/* Visit */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Raja+Ki+Mandi+Agra"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="card-lift group relative p-7 md:p-8 rounded-3xl bg-gradient-to-br from-saffron/15 to-saffron/5 border border-saffron/25 overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-saffron text-white flex items-center justify-center mb-6">
              <MapPin size={24} strokeWidth={2} />
            </div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-saffron mb-2">
              Drop by
            </div>
            <div className="font-display text-2xl md:text-3xl font-bold mb-2">
              Visit Us
            </div>
            <div className="text-cream/70 text-sm mb-6 leading-relaxed">
              Raja Mandi Main Market, Agra — opposite the main bazaar lane.
            </div>
            <div className="font-mono text-sm text-saffron/90">
              Agra, UP 282002
            </div>
            <ArrowRight
              size={20}
              className="absolute top-7 right-7 text-saffron group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </div>

        {/* Email row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-3 text-sm text-cream/60"
        >
          <Mail size={14} className="text-gold" />
          <span>Or email us at</span>
          <a
            href="mailto:rent@trikoncomplex.com"
            className="text-gold hover:underline font-medium"
          >
            rent@trikoncomplex.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
