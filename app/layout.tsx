import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://office-shops-godown-on-rent.vercel.app";

export const viewport: Viewport = {
  themeColor: "#0A0B0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shops, Offices & Godown For Rent in Raja Mandi Agra | Commercial Space Near Raja Ki Mandi Station",
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
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}#owner`,
      name: "Trikon Complex — Raja Mandi Commercial Rent",
      description:
        "Owner of Trikon Complex in Raja Mandi Agra. Renting commercial shops, offices and godown directly to tenants — no brokers.",
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.1919,
        longitude: 78.0081,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      areaServed: {
        "@type": "City",
        name: "Agra",
      },
      priceRange: "₹₹",
    },
    {
      "@type": "Place",
      "@id": `${SITE_URL}#property`,
      name: "Trikon Commercial Complex, Raja Mandi Agra",
      description:
        "Three-storey commercial complex with ground floor shops, first floor offices and basement godown on rent at Raja Mandi main market, Agra.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Raja Mandi Main Market",
        addressLocality: "Agra",
        addressRegion: "Uttar Pradesh",
        postalCode: "282002",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.1919,
        longitude: 78.0081,
      },
      photo: [
        `${SITE_URL}/images/Front_Image_complex_1.png`,
        `${SITE_URL}/images/Big_Shop_image.png`,
        `${SITE_URL}/images/Small_office_image.png`,
        `${SITE_URL}/images/Small_godown_space.png`,
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is the commercial property located in Agra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The property is located at Raja Mandi Main Market, Agra 282002 — just a short walk from Raja Ki Mandi railway station and minutes from MG Road and Sanjay Place.",
          },
        },
        {
          "@type": "Question",
          name: "What types of commercial spaces are available for rent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer ground floor retail shops ideal for clothing, pharmacy, mobile, cafe and salon; first floor office spaces suitable for CAs, coaching, startups and consultants; and basement godown storage for wholesalers and e-commerce sellers.",
          },
        },
        {
          "@type": "Question",
          name: "How do I enquire or book a visit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call or WhatsApp directly at +91 8839269122. We deal directly with tenants — no broker, no commission.",
          },
        },
        {
          "@type": "Question",
          name: "Is the footfall in Raja Mandi market good for retail business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Raja Mandi is one of the oldest and busiest markets in Agra with high daily footfall. The market attracts shoppers from across Agra for groceries, clothing, sweets, electronics and household goods, making it ideal for retail shops.",
          },
        },
        {
          "@type": "Question",
          name: "Can businesses move in immediately?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All units are ready-to-move with electricity, water, modern flooring, false ceiling and fresh paint. You can start your business operations from day one.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-body bg-ink text-cream antialiased grain">
        {children}
      </body>
    </html>
  );
}
