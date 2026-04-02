# Grid Foods LLC — Website

A modern, production-ready, SEO-optimized website for Grid Foods LLC, a Dubai-based frozen food trading and distribution company.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify
- **Contact Form:** Netlify Serverless Function + Nodemailer
- **Language:** TypeScript

---

## 📁 Project Structure

```
grid-foods-website/
├── netlify/
│   └── functions/
│       └── contact.js          # Serverless contact form handler
├── public/
│   └── assets/
│       └── Grid_Foods_Logo.png # ← Place your logo here
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + SEO metadata + structured data
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   ├── robots.ts           # robots.txt
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/
│   │   │   └── page.tsx        # About Us page
│   │   ├── products/
│   │   │   ├── page.tsx        # Products listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic product category pages
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with dropdown
│   │   ├── Footer.tsx          # Footer with links + contact info
│   │   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   │   ├── ContactForm.tsx     # Client-side contact form
│   │   └── home/
│   │       ├── HeroSection.tsx
│   │       ├── CategoriesShowcase.tsx
│   │       ├── TrustSection.tsx
│   │       ├── AboutPreview.tsx
│   │       └── CTASection.tsx
│   ├── lib/
│   │   └── data.ts             # All product data and company info
│   └── types/
│       └── framer-motion.d.ts
├── .env.example                # Environment variables template
├── netlify.toml                # Netlify build configuration
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

---

## ⚡ Getting Started

### 1. Add Your Logo

Copy your logo file to:
```
public/assets/Grid_Foods_Logo.png
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example file and fill in your SMTP credentials:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL=xenoratechnologies@gmail.com
```

> **Note on Gmail App Password:** Go to Google Account → Security → 2-Step Verification → App Passwords → Generate one for "Mail".

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploying to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. Push your code to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Select your GitHub repo
4. Netlify auto-detects Next.js — confirm build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click **Deploy site**

### Option B: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Environment Variables on Netlify

After deploying, add environment variables at:
**Netlify Dashboard → Site Settings → Environment Variables**

Add:
| Variable | Value |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `your-gmail@gmail.com` |
| `SMTP_PASS` | `your-app-password` |
| `CONTACT_EMAIL` | `xenoratechnologies@gmail.com` |

> Trigger a new deploy after setting environment variables.

---

## 📦 Plugin Required on Netlify

Ensure the `@netlify/plugin-nextjs` plugin is installed. It's listed in `netlify.toml`. Netlify will install it automatically, or you can install it manually:

```bash
npm install @netlify/plugin-nextjs --save-dev
```

---

## 🔧 Updating Company Information

All company data is centralized in [`src/lib/data.ts`](src/lib/data.ts):

- **Company info** (phone, email, WhatsApp, address) — update `companyInfo`
- **Product categories** — update the `categories` array
- **SEO metadata** per category — update `metaTitle` and `metaDescription` per category

---

## 🎨 Customizing Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    DEFAULT: '#0a1628',  // Deep navy — main brand color
  },
  accent: {
    DEFAULT: '#f97316',  // Orange — CTA and highlights
  },
}
```

---

## 📄 Pages Overview

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, categories, trust indicators, about preview |
| About | `/about` | Company story, mission, vision, why us |
| Products | `/products` | All categories overview |
| Category | `/products/[slug]` | Individual category pages (6 total) |
| Contact | `/contact` | Contact form + info |

**Product category slugs:** `seafood`, `poultry`, `meat`, `dairy`, `frozen-snacks`, `rice-grains`

---

## 📧 Contact Form

The contact form sends via a Netlify serverless function at `/.netlify/functions/contact`.

Flow:
1. User fills form → clicks **Send Inquiry**
2. Frontend POSTs to `/.netlify/functions/contact`
3. Function validates input, sanitizes against injection
4. Sends HTML email via Nodemailer to `CONTACT_EMAIL`
5. Returns success/error response to frontend

---

## 🔍 SEO Features

- ✅ Per-page `<title>` and `<meta description>`
- ✅ Open Graph tags for social sharing
- ✅ Organization structured data (JSON-LD)
- ✅ Auto-generated sitemap at `/sitemap.xml`
- ✅ `robots.txt` at `/robots.txt`
- ✅ Canonical URLs
- ✅ Semantic H1/H2/H3 hierarchy
- ✅ Next.js `<Image>` with lazy loading and optimization

---

## 📱 Features

- ✅ Sticky navigation with product dropdown
- ✅ Mobile-responsive hamburger menu
- ✅ Floating WhatsApp CTA button
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Static site generation for all pages
- ✅ 404 not-found page
- ✅ TypeScript throughout
