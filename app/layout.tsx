import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://office-shops-godown-on-rent.vercel.app";
const GTM_ID = "GTM-TQJRS4F7";

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Shops, Offices & Godown For Rent in Raja Mandi Agra | Commercial Space Near Raja Ki Mandi Station",
    template: "%s | Raja Mandi Commercial Rent Agra",
  },
  description:
    "Prime commercial shops, offices and godown on rent in Raja Mandi Agra. Ground floor retail shops, first floor offices & basement godown near Raja Ki Mandi railway station. Ideal for clothing, mobile, pharmacy, salon, CA office, coaching, startup. Direct owner, no broker. Call 8839269122.",
  keywords: [
    "shops for rent in Agra",
    "shops for rent in Raja Mandi Agra",
    "office for rent in Agra",
    "office space Raja Ki Mandi",
    "godown for rent in Agra",
    "commercial property for rent Agra",
    "shop on rent near Raja Mandi station",
    "retail space Raja Mandi",
    "Agra commercial real estate",
    "shop for rent Raja Ki Mandi Agra",
    "office space in Agra",
    "warehouse rent Agra",
    "startup office Agra",
    "ground floor shop Agra",
    "first floor office Agra",
    "Trikon Complex Agra",
    "commercial shop rent Agra no broker",
    "direct owner shop rent Agra",
    "best commercial location Agra",
    "retail shop near railway station Agra",
  ],
  authors: [{ name: "Trikon Complex — Raja Mandi Agra" }],
  creator: "Trikon Complex",
  publisher: "Trikon Complex",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Shops, Offices & Godown For Rent — Raja Mandi Agra",
    title: "Shops, Offices & Godown For Rent in Raja Mandi Agra",
    description:
      "Premium commercial spaces on rent at Raja Mandi Market, Agra. Shops, offices and godown. Direct owner. Call or WhatsApp 8839269122.",
    images: [
      {
        url: "/images/Front_Image_complex_1.png",
        width: 1200,
        height: 630,
        alt: "Raja Mandi Commercial Complex — shops, offices and godown for rent in Agra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shops, Offices & Godown For Rent — Raja Mandi Agra",
    description:
      "Prime commercial spaces at Raja Mandi Market, Agra. Direct owner. Call 8839269122.",
    images: ["/images/Front_Image_complex_1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "real-estate",
  other: {
    "revisit-after": "7 days",
    rating: "General",
    distribution: "Global",
  },
};

// ─── COMPREHENSIVE SCHEMA OPTIMIZED FOR AI SEARCH ENGINES ───
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Trikon Complex",
      legalName: "Trikon Complex Commercial Rentals",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/images/Front_Image_complex_1.png`,
      description:
        "Trikon Complex is a family-owned commercial rental property in Raja Mandi, Agra, offering retail shops, offices, and godown storage directly to tenants without brokerage.",
      foundingLocation: { "@type": "Place", name: "Agra, Uttar Pradesh, India" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Raja Mandi Main Market",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282002",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-88392-69122",
          contactType: "leasing inquiries",
          areaServed: "IN",
          availableLanguage: ["en", "Hindi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "Raja Mandi Commercial Rent Agra",
      description:
        "Official website for renting commercial shops, offices and godown at Trikon Complex, Raja Mandi Market, Agra.",
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: "Shops, Offices & Godown For Rent in Raja Mandi Agra",
      description:
        "Commercial rental listings at Trikon Complex, Raja Mandi Market, Agra. Ground floor shops, first floor offices, and basement godown available directly from the owner.",
      isPartOf: { "@id": `${SITE_URL}#website` },
      about: { "@id": `${SITE_URL}#property` },
      primaryImageOfPage: `${SITE_URL}/images/Front_Image_complex_1.png`,
      inLanguage: "en-IN",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "[data-speakable]"],
      },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}#owner`,
      name: "Trikon Complex — Raja Mandi Commercial Rent",
      description:
        "Direct owner renting commercial shops, offices, and godown at Raja Mandi Market, Agra. No brokers, no commission.",
      url: SITE_URL,
      telephone: "+918839269122",
      email: "rent@trikoncomplex.com",
      image: `${SITE_URL}/images/Front_Image_complex_1.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Raja Mandi Main Market",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282002",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 27.1919, longitude: 78.0081 },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      areaServed: [
        { "@type": "City", name: "Agra" },
        { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
      ],
      priceRange: "₹₹",
      makesOffer: [
        {
          "@type": "Offer",
          name: "Ground Floor Retail Shop on Rent",
          description:
            "Main-market facing retail shop with shutter front, tile flooring, LED lighting, and individual electricity meter. Ideal for clothing, mobile, pharmacy, salon, cafe, or grocery business.",
          category: "Commercial Real Estate Rental",
          availability: "https://schema.org/InStock",
          areaServed: "Agra",
        },
        {
          "@type": "Offer",
          name: "First Floor Office Space on Rent",
          description:
            "Fully furnished office cabin with wallpaper, false ceiling, premium flooring and sliding balconies. Suitable for CA, advocate, coaching, startup, digital agency, or consultant.",
          category: "Commercial Office Rental",
          availability: "https://schema.org/InStock",
          areaServed: "Agra",
        },
        {
          "@type": "Offer",
          name: "Basement Godown Storage on Rent",
          description:
            "Dry, covered storage space with racking in place and wide loading access. Ideal for wholesalers, e-commerce sellers, and distributors.",
          category: "Warehouse Rental",
          availability: "https://schema.org/InStock",
          areaServed: "Agra",
        },
      ],
    },
    {
      "@type": "Place",
      "@id": `${SITE_URL}#property`,
      name: "Trikon Commercial Complex, Raja Mandi Agra",
      alternateName: [
        "Raja Mandi Commercial Complex",
        "Trikon Complex Agra",
        "Raja Ki Mandi Commercial Building",
      ],
      description:
        "Three-storey commercial complex in the heart of Raja Mandi Main Market, Agra. Features ground floor retail shops, first floor offices with finished interiors, and basement godown storage. Located a short walk from Raja Ki Mandi railway station and within 2 km of Sanjay Place and MG Road.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Raja Mandi Main Market",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282002",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 27.1919, longitude: 78.0081 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Raja+Ki+Mandi+Agra",
      photo: [
        { "@type": "ImageObject", url: `${SITE_URL}/images/Front_Image_complex_1.png`, caption: "Front view of Trikon Commercial Complex at Raja Mandi main market, Agra" },
        { "@type": "ImageObject", url: `${SITE_URL}/images/Front_complex_image.jpg`, caption: "Street-level view of ground floor retail shops with shutter fronts" },
        { "@type": "ImageObject", url: `${SITE_URL}/images/Big_Shop_image.png`, caption: "Spacious interior of a ground floor retail shop, ready for business" },
        { "@type": "ImageObject", url: `${SITE_URL}/images/Middle_shop_image1.png`, caption: "Designer first-floor office cabin with wallpaper and false ceiling" },
        { "@type": "ImageObject", url: `${SITE_URL}/images/Small_office_image.png`, caption: "Compact office suitable for 2-3 person teams" },
        { "@type": "ImageObject", url: `${SITE_URL}/images/Small_godown_space.png`, caption: "Basement godown storage with racking installed" },
        { "@type": "ImageObject", url: `${SITE_URL}/images/Busy_market_place_image.png`, caption: "High daily footfall at Raja Mandi market — one of Agra's busiest commercial streets" },
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Main market facing", value: true },
        { "@type": "LocationFeatureSpecification", name: "Individual electricity meters", value: true },
        { "@type": "LocationFeatureSpecification", name: "24x7 access", value: true },
        { "@type": "LocationFeatureSpecification", name: "Two-wheeler parking", value: true },
        { "@type": "LocationFeatureSpecification", name: "Walking distance from railway station", value: true },
        { "@type": "LocationFeatureSpecification", name: "Ready to move in", value: true },
      ],
      containedInPlace: { "@type": "Place", name: "Raja Mandi Market, Agra" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#service-shops`,
      name: "Retail Shop Rental in Raja Mandi Agra",
      serviceType: "Commercial Shop Rental",
      provider: { "@id": `${SITE_URL}#owner` },
      areaServed: { "@type": "City", name: "Agra" },
      description:
        "Ground floor retail shops on rent at Raja Mandi main market, Agra. Main-road facing, 100 to 300 square feet configurations, ready-to-move with shutter, flooring, and electricity.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Retailers, small business owners, clothing stores, pharmacies, mobile shops, salons, cafes",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#service-offices`,
      name: "Office Space Rental in Raja Mandi Agra",
      serviceType: "Commercial Office Rental",
      provider: { "@id": `${SITE_URL}#owner` },
      areaServed: { "@type": "City", name: "Agra" },
      description:
        "First floor offices on rent at Raja Mandi, Agra. Furnished with designer interiors, false ceiling, premium flooring, and sliding balconies. Ideal for CAs, advocates, coaching institutes, startups, and small consulting teams.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Chartered accountants, advocates, doctors, coaching centers, startups, digital agencies, consultants",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}#service-godown`,
      name: "Godown Storage Rental in Raja Mandi Agra",
      serviceType: "Warehouse and Storage Rental",
      provider: { "@id": `${SITE_URL}#owner` },
      areaServed: { "@type": "City", name: "Agra" },
      description:
        "Basement godown storage on rent at Raja Mandi, Agra. Dry, dust-sealed space with shelving and racking already in place and wide doorway for loading and unloading.",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Wholesalers, e-commerce sellers, distributors, traders needing inventory backup",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the commercial property located in Agra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The property is Trikon Complex at Raja Mandi Main Market, Agra, Uttar Pradesh 282002. It is approximately 400 metres walking distance from Raja Ki Mandi railway station, about 2 km from Sanjay Place, and 1.8 km from MG Road.",
          },
        },
        {
          "@type": "Question",
          name: "What types of commercial spaces are available for rent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three types of spaces are available: (1) Ground floor retail shops ranging from 100 to 300 square feet, suitable for clothing, mobile, pharmacy, salon, cafe, and grocery businesses; (2) First floor offices with finished interiors, ideal for chartered accountants, advocates, coaching institutes, startups, and digital agencies; (3) Basement godown storage with racking for wholesalers, e-commerce sellers, and distributors.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find a shop for rent in Raja Mandi Agra without a broker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact the owner of Trikon Complex directly by calling or WhatsApping +91 88392 69122, or by emailing rent@trikoncomplex.com. There is no brokerage, no commission, and no middleman — all terms are finalised directly with the property owner.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to rent a shop in Raja Mandi Agra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rent depends on floor, size and intended use of the unit. Ground floor retail shops, first floor offices, and basement godown are priced differently. Standard security deposit is 3 to 6 months of rent. Final terms are discussed directly with the owner — call +91 88392 69122 for current pricing.",
          },
        },
        {
          "@type": "Question",
          name: "Is Raja Mandi a good location for a retail business in Agra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Raja Mandi is one of the oldest and most active commercial markets in Agra, with steady daily footfall for groceries, clothing, sweets, electronics, and household goods. The area draws shoppers from across Agra city and surrounding towns, making it highly suitable for retail businesses.",
          },
        },
        {
          "@type": "Question",
          name: "Can I move into the shop or office immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All units at Trikon Complex are ready-to-move. Flooring, false ceiling, electricity, water connection, and fresh paint are already in place. You can begin business operations from day one — just bring your own fittings, furniture, and stock.",
          },
        },
        {
          "@type": "Question",
          name: "What businesses work well at this location?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Suitable businesses include: retail — clothing shops, mobile stores, pharmacies, grocery, salons, bakeries, and cafes; professional services — chartered accountant offices, advocates, doctors, coaching institutes, and consulting firms; storage — wholesale distribution, e-commerce fulfilment, and inventory backup.",
          },
        },
        {
          "@type": "Question",
          name: "How close is the nearest railway station?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Raja Ki Mandi railway station is approximately 400 metres away, about a 5-minute walk. Agra Fort station is 3 km away and Agra Cantonment station is around 8 km away.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Shops for Rent in Agra", item: `${SITE_URL}#shops` },
        { "@type": "ListItem", position: 3, name: "Offices for Rent in Agra", item: `${SITE_URL}#offices` },
        { "@type": "ListItem", position: 4, name: "Godown for Rent in Agra", item: `${SITE_URL}#godown` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Agra, Raja Mandi" />
        <meta name="geo.position" content="27.1919;78.0081" />
        <meta name="ICBM" content="27.1919, 78.0081" />

        <meta name="ai-content-declaration" content="human-authored" />
        <link rel="alternate" type="text/plain" href="/llms.txt" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-body bg-ink text-cream antialiased grain">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
