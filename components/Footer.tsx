"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-cream/10 bg-ink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-goldLight to-gold flex items-center justify-center font-display font-bold text-ink text-xl">
                R
              </div>
              <div>
                <div className="font-display text-lg font-semibold">
                  Raja Mandi Commercial
                </div>
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold">
                  Trikon Complex · Agra
                </div>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-md">
              Prime commercial shops, offices and godown for rent in Raja Mandi
              Agra — one of the city&apos;s oldest and most active markets. Rent
              directly from the owner, skip the broker.
            </p>
          </div>

          {/* Spaces */}
          <div className="md:col-span-2">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-gold mb-4">
              Spaces
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                { h: "#shops", l: "Retail Shops" },
                { h: "#offices", l: "Offices" },
                { h: "#godown", l: "Godown" },
                { h: "#gallery", l: "Gallery" },
              ].map((l) => (
                <li key={l.h}>
                  <a
                    href={l.h}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="md:col-span-2">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-gold mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm">
              {[
                { h: "#about", l: "About" },
                { h: "#location", l: "Location" },
                { h: "#faq", l: "FAQ" },
                { h: "#contact", l: "Contact" },
              ].map((l) => (
                <li key={l.h}>
                  <a
                    href={l.h}
                    className="text-cream/60 hover:text-gold transition-colors"
                  >
                    {l.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-gold mb-4">
              Reach us
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+918839269122"
                  className="flex items-start gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone size={14} className="mt-0.5 text-gold" />
                  +91 88392 69122
                </a>
              </li>
              <li>
                <a
                  href="mailto:rent@trikoncomplex.com"
                  className="flex items-start gap-3 text-cream/70 hover:text-gold transition-colors break-all"
                >
                  <Mail size={14} className="mt-0.5 text-gold flex-shrink-0" />
                  rent@trikoncomplex.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin size={14} className="mt-0.5 text-gold flex-shrink-0" />
                Raja Mandi Main Market,
                <br />
                Agra, Uttar Pradesh 282002
              </li>
            </ul>
          </div>
        </div>

        {/* Keyword strip for SEO */}
        <div className="py-6 border-t border-cream/10 text-[11px] text-cream/40 leading-relaxed">
          <strong className="text-cream/70">Searched for:</strong>{" "}
          shops for rent in Agra · office space Raja Mandi · godown for rent
          Agra · commercial property Raja Ki Mandi · shop on rent near Raja
          Mandi station · retail space Agra · first floor office Agra · startup
          office Raja Mandi · warehouse Agra · basement storage Raja Mandi
          market · Trikon Complex Agra · direct owner commercial rental Agra
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-cream/10 text-xs text-cream/40">
          <div>
            © {year} Trikon Complex, Raja Mandi Agra. All rights reserved.
          </div>
          <div className="font-mono tracking-wider">
            Made in Agra · No brokers · Direct owner
          </div>
        </div>
      </div>
    </footer>
  );
}
