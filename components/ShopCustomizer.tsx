"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shirt,
  Scissors,
  ShoppingBag,
  Briefcase,
  Pill,
  Zap,
  Lightbulb,
  BookOpen,
  Gift,
  Sofa,
  PaintBucket,
  Calculator,
  PenTool,
  Check,
  ArrowUpRight,
  Hammer,
  Share2,
  Globe,
  RotateCcw,
} from "lucide-react";

type UnitKey = "shops" | "offices" | "godown";

const UNITS: Record<UnitKey, { label: string; anchor: string; image: string }> = {
  shops: { label: "Retail Shop", anchor: "#shops", image: "/images/Big_Shop_image.png" },
  offices: { label: "Modern Office", anchor: "#offices", image: "/images/Middle_shop_image1.png" },
  godown: { label: "Godown Space", anchor: "#godown", image: "/images/Small_godown_space.png" },
};

// Real map query — same one used in the Location section. No fabricated coordinates.
const MAP_QUERY = "Raja Ki Mandi, Agra, Uttar Pradesh";
const EARTH_URL = `https://earth.google.com/web/search/${encodeURIComponent(MAP_QUERY)}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

const BUILD_DURATION_MS = 38000;

type AddOn = { id: string; label: string; cost: number };

type Trade = {
  id: string;
  name: string;
  icon: typeof Shirt;
  unit: UnitKey;
  rentFrom: number;
  pitch: string;
  addOns: AddOn[];
};

const TRADES: Trade[] = [
  {
    id: "boutique",
    name: "Boutique / Fashion Store",
    icon: Shirt,
    unit: "shops",
    rentFrom: 4500,
    pitch:
      "Garments have been Raja Mandi's core trade for generations — you're walking into demand that already exists, foreign visitors included.",
    addOns: [
      { id: "rails", label: "Extra clothing rails & mannequins", cost: 8000 },
      { id: "trial", label: "Trial room partition", cost: 12000 },
      { id: "mirror", label: "Full-length mirrors + spot lighting", cost: 6000 },
      { id: "signage", label: "Custom shop signage", cost: 9000 },
    ],
  },
  {
    id: "salon",
    name: "Salon & Grooming Studio",
    icon: Scissors,
    unit: "shops",
    rentFrom: 4000,
    pitch:
      "Salon services are already an established Raja Mandi category — ground-floor visibility drives walk-in bookings here.",
    addOns: [
      { id: "chairs", label: "Styling chairs + backwash unit", cost: 35000 },
      { id: "plumbing", label: "Additional plumbing point", cost: 7000 },
      { id: "mirror2", label: "Salon mirror wall", cost: 10000 },
      { id: "waiting", label: "Waiting bench + reception counter", cost: 9000 },
    ],
  },
  {
    id: "garment",
    name: "Garment Shop",
    icon: ShoppingBag,
    unit: "shops",
    rentFrom: 3800,
    pitch:
      "Wholesale or retail, this is the market's identity trade — no need to build footfall from scratch.",
    addOns: [
      { id: "shelving", label: "Extra wall shelving", cost: 7000 },
      { id: "counter", label: "Billing counter", cost: 8000 },
      { id: "hangers", label: "Hanging display system", cost: 6000 },
    ],
  },
  {
    id: "office",
    name: "Office / Coworking Suite",
    icon: Briefcase,
    unit: "offices",
    rentFrom: 7500,
    pitch:
      "Calm, well-lit cabins above the market noise — priced well below city-centre commercial rates.",
    addOns: [
      { id: "desks", label: "Extra desks & partitions", cost: 15000 },
      { id: "internet", label: "Dedicated internet line", cost: 3000 },
      { id: "meeting", label: "Small meeting corner", cost: 12000 },
    ],
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    icon: Pill,
    unit: "shops",
    rentFrom: 4200,
    pitch:
      "Dense daily footfall means steady, non-seasonal chemist demand — ground floor is essential and available.",
    addOns: [
      { id: "fridge", label: "Medicine cold-storage fridge point", cost: 5000 },
      { id: "cabinets", label: "Lockable medicine cabinets", cost: 14000 },
      { id: "counter2", label: "Prescription counter", cost: 9000 },
    ],
  },
  {
    id: "electric",
    name: "Electric & Hardware Shop",
    icon: Zap,
    unit: "shops",
    rentFrom: 3200,
    pitch:
      "Hundreds of shopkeepers around you regularly need wiring, fittings and repairs — demand exists before you open.",
    addOns: [
      { id: "pegboard", label: "Pegboard display wall", cost: 6000 },
      { id: "storage", label: "Bin storage system", cost: 8000 },
    ],
  },
  {
    id: "lighting",
    name: "Fancy Lighting Shop",
    icon: Lightbulb,
    unit: "shops",
    rentFrom: 3600,
    pitch:
      "A lit display window pulls browsing footfall on its own — wedding and festival season drives real spikes here.",
    addOns: [
      { id: "spotrail", label: "Ceiling spotlight rail", cost: 10000 },
      { id: "display", label: "Tiered display shelving", cost: 9000 },
    ],
  },
  {
    id: "stationery",
    name: "Stationery & Book Shop",
    icon: BookOpen,
    unit: "shops",
    rentFrom: 2800,
    pitch:
      "Raja Mandi has a long-standing book market reputation — an existing customer habit, not a new one to build.",
    addOns: [
      { id: "shelving2", label: "Floor-to-ceiling shelving", cost: 8000 },
      { id: "counter3", label: "Billing counter", cost: 7000 },
    ],
  },
  {
    id: "giftshop",
    name: "Chinese / Gift Items Shop",
    icon: Gift,
    unit: "shops",
    rentFrom: 3000,
    pitch:
      "Gift and novelty items thrive on impulse browsing — exactly the mode most shoppers here are already in.",
    addOns: [
      { id: "displaycase", label: "Glass display cases", cost: 11000 },
      { id: "hooks", label: "Wall hook + carousel racks", cost: 6000 },
    ],
  },
  {
    id: "decor",
    name: "Home Décor Studio",
    icon: Sofa,
    unit: "shops",
    rentFrom: 4000,
    pitch:
      "Pairs naturally with the fashion crowd already walking this market — many are furnishing a home too.",
    addOns: [
      { id: "vignette", label: "Styled display vignettes", cost: 13000 },
      { id: "lighting2", label: "Warm accent lighting", cost: 7000 },
    ],
  },
  {
    id: "paint",
    name: "Paint & Colour Studio",
    icon: PaintBucket,
    unit: "shops",
    rentFrom: 3400,
    pitch:
      "Every contractor renovating a unit in this market — including your neighbours — is a potential customer.",
    addOns: [
      { id: "colourwall", label: "Shade-card colour wall", cost: 9000 },
      { id: "mixing", label: "Tinting/mixing counter", cost: 15000 },
    ],
  },
  {
    id: "ca",
    name: "CA / Professional Office",
    icon: Calculator,
    unit: "offices",
    rentFrom: 6500,
    pitch:
      "Traders here need an accountant nearby, not across town. Upper floor keeps client meetings private.",
    addOns: [
      { id: "cabin", label: "Private meeting cabin", cost: 18000 },
      { id: "filing", label: "Filing & records storage", cost: 8000 },
    ],
  },
  {
    id: "tattoo",
    name: "Tattoo & Body Art Studio",
    icon: PenTool,
    unit: "shops",
    rentFrom: 3800,
    pitch:
      "A category the bazaar doesn't already have — draws a younger, curious crowd plus tourists after something memorable.",
    addOns: [
      { id: "hygiene", label: "Hygiene fit-out (sink + sterilizer point)", cost: 16000 },
      { id: "privacy", label: "Private booth partition", cost: 11000 },
    ],
  },
];

const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

type BuildState = "idle" | "running" | "done";

export default function ShopCustomizer() {
  const [activeId, setActiveId] = useState(TRADES[0].id);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [buildState, setBuildState] = useState<BuildState>("idle");
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = useMemo(
    () => TRADES.find((t) => t.id === activeId)!,
    [activeId]
  );

  const toggleAddOn = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const selectTrade = (id: string) => {
    setActiveId(id);
    setSelected(new Set());
    setBuildState("idle");
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const addOnTotal = active.addOns
    .filter((a) => selected.has(a.id))
    .reduce((sum, a) => sum + a.cost, 0);

  const chosenAddOnLabels = active.addOns
    .filter((a) => selected.has(a.id))
    .map((a) => a.label);

  const buildSteps = useMemo(() => {
    const base = [
      `Reserving a ${UNITS[active.unit].label.toLowerCase()} unit`,
      "Confirming furnished basics — flooring, lighting, meter",
    ];
    const addonSteps = chosenAddOnLabels.map((label) => `Fitting: ${label}`);
    const tail = [
      "Finalising rent & one-time setup total",
      `Pulling up ${active.name} unit photos`,
      "Loading Raja Mandi location & map view",
    ];
    return [...base, ...addonSteps, ...tail];
  }, [active, chosenAddOnLabels]);

  const startBuild = () => {
    if (buildState === "running") return;
    setBuildState("running");
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
    const startedAt = Date.now();
    timerRef.current = setInterval(() => {
      const pct = Math.min(100, ((Date.now() - startedAt) / BUILD_DURATION_MS) * 100);
      setProgress(pct);
      if (pct >= 100) {
        if (timerRef.current) clearInterval(timerRef.current);
        setBuildState("done");
      }
    }, 90);
  };

  const skipBuild = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(100);
    setBuildState("done");
  };

  const resetBuild = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setBuildState("idle");
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const currentStepIndex = Math.min(
    buildSteps.length - 1,
    Math.floor((progress / 100) * buildSteps.length)
  );

  const shareText = useMemo(() => {
    const addonLine = chosenAddOnLabels.length
      ? ` + customizations (${chosenAddOnLabels.join(", ")}) for ~₹${addOnTotal.toLocaleString("en-IN")} one-time`
      : "";
    const url = typeof window !== "undefined" ? window.location.href : "";
    return `I'm looking at a ${active.name} at Trikon Complex, Raja Mandi, Agra — furnished, rent from ₹${active.rentFrom.toLocaleString(
      "en-IN"
    )}/mo${addonLine}. Check it out: ${url}`;
  }, [active, chosenAddOnLabels, addOnTotal]);

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <section id="customize" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <div className="section-tag">Build it around your business</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Every unit is furnished.{" "}
            <span className="gold-text italic">Tell us what you sell.</span>
          </h2>
          <p className="mt-5 text-cream/70 leading-relaxed max-w-2xl">
            All shops at Trikon Complex are handed over furnished and
            move-in ready, with rent starting from{" "}
            <span className="text-gold font-semibold">₹2,800/month</span>.
            Pick your trade below to see the unit it fits best, and the
            optional touches most owners add for that business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 md:gap-6">
          {/* Trade list */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-2.5">
            {TRADES.map((t) => {
              const Icon = t.icon;
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  onClick={() => selectTrade(t.id)}
                  className={`text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-gold/10 border-gold/40"
                      : "bg-card/40 border-cream/5 hover:border-gold/20"
                  }`}
                >
                  <span
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-gold text-ink" : "bg-cream/5 text-gold"
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span
                    className={`text-sm font-medium leading-tight ${
                      isActive ? "text-cream" : "text-cream/75"
                    }`}
                  >
                    {t.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Spec / customizer panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-card/50 border border-cream/5 p-6 md:p-9 h-full"
              >
                <div className="flex items-start justify-between gap-4 pb-6 mb-6 border-b border-cream/10">
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-gold mb-2">
                      {UNITS[active.unit].label}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                      {active.name}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[10px] font-mono tracking-[0.15em] uppercase text-cream/40 mb-1">
                      Rent from
                    </div>
                    <div className="font-display text-2xl font-bold text-gold tabular">
                      {formatINR(active.rentFrom)}
                      <span className="text-sm text-cream/50 font-body">
                        /mo
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-cream/75 leading-relaxed mb-7">
                  {active.pitch}
                </p>

                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-cream/40">
                    Already included, furnished
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Tile flooring", "LED lighting", "Shutter/door lock", "Electricity meter"].map(
                    (inc) => (
                      <span
                        key={inc}
                        className="inline-flex items-center gap-1.5 text-xs text-cream/70 bg-cream/5 border border-cream/10 rounded-full px-3 py-1.5"
                      >
                        <Check size={12} className="text-gold" strokeWidth={2.5} />
                        {inc}
                      </span>
                    )
                  )}
                </div>

                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-cream/40 mb-3">
                  Customize it for your trade — optional
                </div>
                <div className="space-y-2 mb-6">
                  {active.addOns.map((a) => {
                    const isChecked = selected.has(a.id);
                    return (
                      <label
                        key={a.id}
                        className={`flex items-center justify-between gap-4 px-4 py-3 rounded-xl border cursor-pointer transition-colors ${
                          isChecked
                            ? "bg-gold/10 border-gold/30"
                            : "bg-ink/30 border-cream/10 hover:border-cream/20"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 ${
                              isChecked
                                ? "bg-gold border-gold"
                                : "border-cream/30"
                            }`}
                          >
                            {isChecked && (
                              <Check size={12} className="text-ink" strokeWidth={3} />
                            )}
                          </span>
                          <span className="text-sm text-cream/85">
                            {a.label}
                          </span>
                        </span>
                        <span className="text-xs font-mono text-cream/50 tabular flex-shrink-0">
                          + {formatINR(a.cost)}
                        </span>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={isChecked}
                          onChange={() => toggleAddOn(a.id)}
                        />
                      </label>
                    );
                  })}
                </div>

                <div className="flex items-end justify-between pt-5 border-t border-cream/10 flex-wrap gap-4">
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-cream/40 mb-1">
                      Monthly rent
                    </div>
                    <div className="font-display text-xl font-bold tabular">
                      {formatINR(active.rentFrom)}
                      <span className="text-xs text-cream/50 font-body font-normal">
                        /mo, unchanged — shop is already furnished
                      </span>
                    </div>
                    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-cream/40 mt-3 mb-1">
                      One-time customization
                    </div>
                    <div className="font-display text-xl font-bold text-gold tabular">
                      {formatINR(addOnTotal)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={startBuild}
                      disabled={buildState === "running"}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition-colors disabled:opacity-50"
                    >
                      <Hammer size={16} />
                      {buildState === "idle" ? "Preview my shop" : buildState === "running" ? "Building…" : "Rebuild preview"}
                    </button>
                    <a
                      href="#contact"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.sessionStorage?.setItem(
                            "enquireTrade",
                            active.name
                          );
                        }
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-ink font-semibold text-sm btn-shimmer hover:bg-goldLight transition-colors"
                    >
                      Enquire for this setup
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="mt-5 text-[11px] font-mono text-cream/35 leading-relaxed">
                  Rent and add-on costs shown are indicative starting
                  estimates — confirm exact figures for the available unit
                  with the Trikon Complex team.
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Build sequence + reveal */}
        <AnimatePresence>
          {buildState !== "idle" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 md:mt-8 overflow-hidden"
            >
              <div className="rounded-3xl bg-card/50 border border-cream/5 p-6 md:p-9">
                {buildState === "running" && (
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-gold/15 text-gold flex items-center justify-center animate-pulse">
                          <Hammer size={16} />
                        </span>
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-cream/40">
                            Setting up
                          </div>
                          <div className="font-display text-lg font-bold">
                            {active.name}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={skipBuild}
                        className="text-xs font-mono text-cream/40 hover:text-gold transition-colors"
                      >
                        Skip →
                      </button>
                    </div>

                    <div className="h-1.5 rounded-full bg-cream/10 overflow-hidden mb-4">
                      <motion.div
                        className="h-full bg-gradient-to-r from-gold to-goldLight rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStepIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm text-cream/70 font-mono"
                      >
                        {buildSteps[currentStepIndex]}…
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {buildState === "done" && (
                  <div>
                    <div className="flex items-center justify-between mb-7 flex-wrap gap-3">
                      <div>
                        <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-gold mb-1">
                          Preview ready
                        </div>
                        <h3 className="font-display text-2xl font-bold">
                          Your {active.name}, at Trikon Complex
                        </h3>
                      </div>
                      <button
                        onClick={resetBuild}
                        className="inline-flex items-center gap-2 text-xs font-mono text-cream/50 hover:text-gold transition-colors"
                      >
                        <RotateCcw size={13} />
                        Start over
                      </button>
                    </div>

                    <div className="grid md:grid-cols-12 gap-5 md:gap-6">
                      {/* Real unit photo */}
                      <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-cream/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={UNITS[active.unit].image}
                          alt={`${UNITS[active.unit].label} at Trikon Complex, Raja Mandi, Agra`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink/80 backdrop-blur border border-gold/30 text-[10px] font-mono tracking-[0.15em] uppercase text-gold">
                          Actual unit photo
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 text-[11px] font-mono text-cream/60 bg-ink/70 backdrop-blur rounded-lg px-3 py-2">
                          This is a real photo of the {UNITS[active.unit].label.toLowerCase()} category — not a generated render.
                        </div>
                      </div>

                      {/* Google Earth / Maps */}
                      <div className="md:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden border border-cream/10 bg-card">
                        <iframe
                          title="Raja Mandi, Agra — map view"
                          src={MAP_EMBED_URL}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="absolute inset-0 w-full h-full grayscale-[50%] contrast-110 opacity-90"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ink/80 backdrop-blur border border-gold/30 text-[10px] font-mono tracking-[0.15em] uppercase text-gold">
                          Real Raja Mandi location
                        </div>
                        <a
                          href={EARTH_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute bottom-3 left-3 right-3 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-ink/85 backdrop-blur border border-gold/30 text-xs font-mono text-cream hover:border-gold hover:text-gold transition-colors"
                        >
                          <Globe size={13} />
                          Fly around in Google Earth 3D
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 text-[11px] font-mono text-cream/35 leading-relaxed">
                      The photo shows the real unit category, and the map/Earth link points at the market&apos;s
                      real location — not a simulated walk-through of the exact shop interior.
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 pt-6 border-t border-cream/10">
                      <a
                        href={whatsappShareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-ink font-semibold text-sm hover:brightness-105 transition-all"
                      >
                        <Share2 size={15} />
                        Share this setup on WhatsApp
                      </a>
                      <a
                        href="#contact"
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            window.sessionStorage?.setItem("enquireTrade", active.name);
                          }
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gold/40 text-gold font-semibold text-sm hover:bg-gold/10 transition-colors"
                      >
                        Enquire for this setup
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
