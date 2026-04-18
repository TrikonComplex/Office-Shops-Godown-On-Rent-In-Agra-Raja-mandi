"use client";

import { motion } from "framer-motion";

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
      </div>
    </section>
  );
}
