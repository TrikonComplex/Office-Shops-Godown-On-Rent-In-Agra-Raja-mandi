"use client";

import { motion } from "framer-motion";

const beforeAfterPairs = [
  {
    real: "/images/before-after/real_01_existing_garment_shop.jpg",
    concept: "/images/before-after/concept_01_boutique.jpg",
    label: "Existing shop → Boutique concept",
  },
  {
    real: "/images/before-after/real_02_bare_unit.jpg",
    concept: "/images/before-after/concept_02_paint_studio.jpg",
    label: "Bare unit → Paint & colour studio concept",
  },
  {
    real: "/images/before-after/real_03_bare_unit.jpg",
    concept: "/images/before-after/concept_03_coaching_hub.jpg",
    label: "Bare unit → Coaching / trade hub concept",
  },
  {
    real: "/images/before-after/real_04_balcony_unit.jpg",
    concept: "/images/before-after/concept_04_reception_office.jpg",
    label: "Balcony-facing unit → Reception / office concept",
  },
  {
    real: "/images/before-after/real_05_furnished_unit.jpg",
    concept: "/images/before-after/concept_05_creative_office.jpg",
    label: "Furnished unit → Creative office concept",
  },
];

const galleryItems = [
  {
    src: "/images/Front_Image_complex_1.png",
    title: "Complex Frontage",
    sub: "Main market facing",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    src: "/images/Big_Shop_image.png",
    title: "Corner Retail Shop",
    sub: "Ground floor",
    span: "md:col-span-4",
  },
  {
    src: "/images/Busy_market_place_image.png",
    title: "Raja Mandi Market",
    sub: "Daily footfall",
    span: "md:col-span-4",
  },
  {
    src: "/images/Middle_shop_image1.png",
    title: "Office Cabin",
    sub: "First floor",
    span: "md:col-span-6",
  },
  {
    src: "/images/Middle_shop_image.png",
    title: "Compact Studio",
    sub: "First floor",
    span: "md:col-span-6",
  },
  {
    src: "/images/Small_office_image.png",
    title: "Small Office",
    sub: "2-3 person",
    span: "md:col-span-4",
  },
  {
    src: "/images/Small_godown_space.png",
    title: "Godown Storage",
    sub: "Basement",
    span: "md:col-span-4",
  },
  {
    src: "/images/Backside_shop_image.png",
    title: "Backside Store",
    sub: "Shelved",
    span: "md:col-span-4",
  },
  {
    src: "/images/Chai_and_beverages_shop_image.jpg",
    title: "Chai Corner",
    sub: "Food & beverage use",
    span: "md:col-span-6",
  },
  {
    src: "/images/Collage_shop_images.png",
    title: "Unit Interiors",
    sub: "Highlights",
    span: "md:col-span-6",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-32 relative bg-gradient-to-b from-ink via-surface to-ink"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <div className="section-tag">See the spaces</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              A quick <span className="gold-text italic">walk-through.</span>
            </h2>
          </div>
          <div className="text-cream/50 text-sm font-mono tracking-wide">
            {String(galleryItems.length).padStart(2, "0")} PHOTOS
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.08 }}
              className={`${item.span} relative overflow-hidden rounded-2xl group cursor-pointer card-lift bg-card`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={`${item.title} — ${item.sub} at Raja Mandi Agra commercial rental`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] uppercase text-gold mb-1">
                  {item.sub}
                </div>
                <div className="font-display text-lg md:text-xl font-semibold">
                  {item.title}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Real photo vs AI concept */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="section-tag">Real space, reimagined</div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-[1.05]">
                The actual unit,{" "}
                <span className="gold-text italic">and one idea for it.</span>
              </h3>
              <p className="mt-4 text-cream/60 text-sm max-w-xl">
                Left: an original, unedited photo of the space. Right: an
                AI-generated concept showing one way it could be fitted out.
                The concept is illustrative only — the exact layout,
                fixtures and finish of your unit will be confirmed at
                handover.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5">
            {beforeAfterPairs.map((pair, i) => (
              <motion.div
                key={pair.real}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                className="grid grid-cols-2 gap-1.5 md:gap-2 rounded-2xl overflow-hidden border border-cream/10 bg-card"
              >
                <div className="relative aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pair.real}
                    alt="Original unedited photo of the space at Trikon Complex, Raja Mandi"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 md:top-3 md:left-3 px-2.5 py-1 rounded-full bg-ink/85 backdrop-blur border border-cream/20 text-[9px] md:text-[10px] font-mono tracking-[0.15em] uppercase text-cream/90">
                    Original photo
                  </span>
                </div>
                <div className="relative aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pair.concept}
                    alt="AI-generated fit-out concept for a unit at Trikon Complex, Raja Mandi"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 md:top-3 md:left-3 px-2.5 py-1 rounded-full bg-gold/90 backdrop-blur text-[9px] md:text-[10px] font-mono tracking-[0.15em] uppercase text-ink font-semibold">
                    AI concept
                  </span>
                </div>
                <div className="col-span-2 px-4 py-3 text-xs md:text-sm font-mono text-cream/60 bg-ink/40">
                  {pair.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
