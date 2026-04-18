# Raja Mandi Commercial — Shops, Offices & Godown for Rent in Agra

A fully animated, SEO-optimized one-page website for renting out commercial shops, offices and godown at Trikon Complex, Raja Mandi Market, Agra.

Built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion** — ready to deploy on **Vercel**.

## ✨ Features

- **Cinematic hero** — crossfading Ken Burns slideshow of your property images (feels like a video)
- **Fully animated** — scroll-reveal, parallax, shimmer, marquee, card-lift hovers, Ken Burns zoom
- **Deep SEO** — meta tags, Open Graph, Twitter cards, JSON-LD schema (LocalBusiness + Place + FAQ + Breadcrumb), sitemap, robots.txt
- **AI-rank optimized** — explicit allow rules for GPTBot, Google-Extended, PerplexityBot, ClaudeBot
- **Local SEO** — geo meta, Agra/Raja Mandi coordinates, address schema
- **Mobile-first** — responsive nav, touch-friendly, fast-loading
- **Floating WhatsApp CTA** — with pulse animation
- **All 11 property images** wired in throughout hero, gallery, sections

## 📁 Project Structure

```
raja-mandi-rent/
├── app/
│   ├── layout.tsx          # SEO metadata + JSON-LD schema
│   ├── page.tsx            # Main page (stitches components)
│   ├── globals.css         # Global styles + animations
│   ├── sitemap.ts          # /sitemap.xml generator
│   └── robots.ts           # /robots.txt generator
├── components/
│   ├── Navigation.tsx      # Sticky nav with mobile menu
│   ├── Hero.tsx            # Ken Burns video-effect hero
│   ├── Marquee.tsx         # Keyword ticker
│   ├── About.tsx           # About the property
│   ├── Spaces.tsx          # Shops / Offices / Godown cards
│   ├── Gallery.tsx         # Photo bento grid
│   ├── Location.tsx        # Map + nearby landmarks
│   ├── FAQ.tsx             # Accordion
│   ├── Contact.tsx         # WhatsApp / Phone / Visit cards
│   ├── Footer.tsx          # Footer with SEO keywords
│   └── WhatsAppFloat.tsx   # Floating WA button
├── public/
│   ├── favicon.svg
│   └── images/             # All property photos
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## 🚀 Deploy to Vercel via GitHub

### Step 1 — Push to GitHub

1. Create a new **empty** repository on GitHub (no README, no .gitignore — empty).
2. On your computer, unzip this project folder.
3. Open a terminal in the unzipped folder and run:

```bash
git init
git add .
git commit -m "Initial commit — Raja Mandi commercial rent site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New → Project**.
3. Select your GitHub repository.
4. **Leave all settings as default** — Vercel auto-detects Next.js.
5. Click **Deploy**.

You'll have a live URL in about 60 seconds: `https://your-repo-name.vercel.app`

### Step 3 — Update the site URL (optional but recommended for SEO)

Once you know your final Vercel URL (or custom domain), update these three spots so that Open Graph, sitemap, and schema point to the right place:

- `app/layout.tsx` → line with `const SITE_URL = "...";`
- `app/sitemap.ts` → `const base = "...";`
- `app/robots.ts` → the sitemap URL

Commit and push — Vercel will auto-redeploy.

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## 📞 Update Contact Details

All contact info is currently set to **+91 88392 69122** and **rent@trikoncomplex.com**.

To change, find and replace these strings across:

- `components/Navigation.tsx`
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/WhatsAppFloat.tsx`
- `app/layout.tsx` (in the JSON-LD schema block)

## 🎯 SEO Keywords Targeted

- shops for rent in Agra
- office space Raja Mandi
- godown for rent Agra
- commercial property Raja Ki Mandi
- shop on rent near Raja Mandi station
- retail space Raja Mandi market
- first floor office Agra
- basement storage Agra
- Trikon Complex Agra
- direct owner commercial rental Agra

## 📸 Swapping Images

All property photos live in `public/images/`. To replace them:

1. Keep the exact filenames (e.g., `Front_Image_complex_1.png`) — components reference them directly.
2. Or, rename your new photos and search-replace the old filenames in the components.

## ⚙️ Tech Stack

- **Next.js 15.5.4** — App Router, static export-ready
- **React 18.3**
- **Tailwind CSS 3.4**
- **Framer Motion 11** — scroll animations
- **Lucide React** — icons
- **TypeScript 5.6**

## 📝 License

Property content © Trikon Complex, Raja Mandi Agra.
Code is yours to modify and deploy.

---

Built with care for a landmark property in Agra.
