"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#shops", label: "Shops" },
  { href: "#offices", label: "Offices" },
  { href: "#godown", label: "Godown" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass py-3" : "py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-goldLight to-gold flex items-center justify-center font-display font-bold text-ink text-lg group-hover:scale-110 transition-transform">
            R
          </div>
          <div className="hidden sm:block">
            <div className="font-display text-base font-semibold leading-none">
              Raja Mandi
            </div>
            <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-gold mt-1">
              Trikon Complex · Agra
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium tracking-wide text-cream/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918839269122"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink font-semibold text-sm btn-shimmer hover:bg-goldLight transition-colors"
          >
            <Phone size={14} strokeWidth={2.5} />
            88392 69122
          </a>
          <button
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-5 pt-4 pb-5 mt-2 mx-5 rounded-2xl bg-card/95 backdrop-blur border border-gold/10 flex flex-col gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 text-sm text-cream/80 hover:text-gold hover:bg-gold/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+918839269122"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-ink font-semibold text-sm"
            >
              <Phone size={14} strokeWidth={2.5} />
              Call 88392 69122
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
