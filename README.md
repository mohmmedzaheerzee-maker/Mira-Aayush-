# Mira Ayush Ayurvedic Medical Center and Pharmacy

> **Ancient Wisdom • Modern Healing • Better Tomorrow**
> 
> Premium, fast, 3D-animated, trilingual (English, Tamil, Sinhala) website for Mira Ayush Ayurvedic Medical Center and Pharmacy in Periyakudiyiruppu, Kalpitiya, Sri Lanka.

---

## 🌿 Overview & Key Features

- **3D Interactive Hero Scene (Three.js WebGL)**: Handcrafted procedural wooden mortar and pestle, golden brass spice bowls with turmeric, orbiting translucent neem & tulsi leaves, and golden prana particles. Features smooth desktop mouse parallax, mobile touch/gyroscope tilt, and automatic performance throttling.
- **Progressive Enhancement**: Server-rendered SVG poster illustration appears before the optional Three.js scene. Reduced-motion, unsupported WebGL, and low-memory devices keep the poster.
- **Trilingual Routes**: English (`/` and `/en/`), Tamil (`/ta/`), and Sinhala (`/si/`) use the same typed page structure. Tamil and Sinhala copy remains `noindex` until native-speaker review is complete.
- **Live Asia/Colombo Clinic Hours Badge**: Calculates current time in Sri Lanka (UTC+05:30) and displays status for the published consultation hours. Days for the morning appointment slot still need confirmation.
- **Eight Listed Services**: Service pages, FAQs, related links, and custom line icons. Clinical details and doctor-review status are marked for confirmation where needed.
- **Doctor Profiles**: Profiles list Dr. A.R.F Fardana and Dr. U.M Rayeez. The clinic must confirm qualifications, registrations and service assignments before launch.
- **Booking**: The form creates a prefilled WhatsApp draft for `071 836 3968`; the visitor reviews it and taps Send. A server endpoint can also email a copy after Resend is configured.
- **Mobile-First Sticky Action Bar**: Instant access to Call, WhatsApp, and Directions buttons on mobile viewports.
- **Location Guidance**: Maps show the general Periyakudiyiruppu area. The exact clinic pin and entrance directions need confirmation.
- **SEO & AI Engine Optimization (GEO)**: Page metadata, `MedicalClinic`/`Pharmacy`, `MedicalTherapy`, `FAQPage`, and `BreadcrumbList` JSON-LD, localized canonical and `hreflang` links, `sitemap.xml`, `robots.txt`, and `/llms.txt`.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20.9 or newer
- npm 9+ or pnpm

### 2. Installation
```bash
npm install
```

### Booking email setup

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to the domain confirmed by the clinic. Add `RESEND_API_KEY`, `BOOKING_EMAIL_TO`, and `BOOKING_EMAIL_FROM` after the clinic confirms its mailbox and verifies its sender domain. Until then, WhatsApp booking drafts work and the form tells the visitor that email delivery is unavailable.

### 3. Running Locally (Development Server)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Building for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design Tokens & Palette

| Token | Hex | Usage |
|---|---|---|
| `forest` | `#0B3D2E` | Headers, navbars, banner bars, primary buttons |
| `leaf` | `#3F8F3A` | Accents, icons, success badges |
| `cream` | `#F6F0DF` | Warm background tone |
| `gold` | `#C9A24A` | Hairlines, icon rings, highlights, stars |
| `ink` | `#14231B` | Primary readable body text |
| `medical-red` | `#C8102E` | Logo cross, emergency banners, urgent CTAs |

### Typography
- **Headings**: Cinzel & Cormorant Garamond
- **Tagline**: Cormorant Garamond Italic
- **Body & UI**: Inter & Manrope
- **Tamil**: Noto Sans Tamil
- **Sinhala**: Noto Sans Sinhala

---

## 📁 Directory Architecture

```
├── app/
│   ├── [locale]/             # Multilingual routes (en, ta, si)
│   │   ├── page.tsx          # Localized home view
│   │   ├── services/         # Services hub & dynamic [slug] detail pages
│   │   ├── doctors/          # Doctors directory
│   │   ├── pharmacy/         # Pharmacy & dispensary overview
│   │   ├── book/             # Dedicated appointment booking form
│   │   ├── about/            # Clinic story & 3 pillars
│   │   ├── faq/              # Clinic, appointment and service FAQs
│   │   ├── contact/          # General map area, phones and hours
│   │   └── privacy/          # Privacy policy & 1990 medical disclaimer
│   ├── globals.css           # Design tokens, fonts, 3D card perspective utilities
│   ├── layout.tsx            # Global metadata, preconnections, viewport
│   ├── api/booking/route.ts  # Rate-limited booking email endpoint
│   ├── page.tsx              # Root entrypoint
│   ├── robots.ts             # Search & AI crawler rules
│   └── sitemap.ts            # Multilingual XML sitemap generator
├── components/
│   ├── ActionBar.tsx         # Sticky mobile Call/WhatsApp/Directions bar
│   ├── BookingModal.tsx      # Honeypot-protected booking form with WhatsApp pre-fill
│   ├── DoctorCard.tsx        # Doctor credential cards
│   ├── FAQAccordion.tsx      # Keyboard-navigable accessible FAQ accordion
│   ├── Footer.tsx            # Full sitemap, hours table, emergency 1990 notice
│   ├── Hero3D.tsx            # Dynamic 3D progressive enhancement container
│   ├── Hero3DCanvas.tsx      # Three.js WebGL scene (Mortar, Pestle, Leaves, Prana)
│   ├── Hero3DPoster.tsx      # High-performance LCP poster fallback
│   ├── HoursBadge.tsx        # Real-time Colombo UTC+5:30 opening status calculator
│   ├── Logo.tsx              # Official circular emblem with red cross & leaves
│   ├── Navbar.tsx            # Sticky header with mega-menu & language switcher
│   ├── ServiceCard.tsx       # 3D tilt card (up to 8 degrees) with gold ring icon
│   ├── ServiceDetailModal.tsx# In-depth clinical service overview modal
│   ├── ServiceIcons.tsx      # 1.5px custom line icons for all 8 services
│   ├── SignboardCard.tsx     # General-area map note and link
│   └── VisitSteps.tsx        # 4-step patient visit journey
├── lib/
│   ├── content/              # Typed content dictionaries (en.ts, ta.ts, si.ts)
│   ├── hours.ts              # Asia/Colombo real-time opening hours logic
│   ├── seo/schema.ts         # JSON-LD structured data generator
│   ├── seo/metadata.ts       # Canonical, hreflang, social metadata
│   └── types.ts              # Core TypeScript interface definitions
├── public/
│   └── llms.txt              # Confirmed facts and site map for answer engines
├── CONTENT_TODO.md           # Client confirmations & native review tracking
├── tailwind.config.ts        # Brand theme colors, fonts, shadows & animations
└── package.json
```

---

## ✍️ How to Edit Content & Add Language Strings

All content is managed cleanly in typed TypeScript dictionaries under `lib/content/`:
- English: `lib/content/en.ts`
- Tamil: `lib/content/ta.ts`
- Sinhala: `lib/content/si.ts`

To modify a doctor's credentials, update the `doctors` array in each locale file.
To modify clinic hours, update `lib/hours.ts` and the `openingHoursSpecification` in `lib/seo/schema.ts`.

---

## 🚢 Launch Checklist

- [ ] Confirm the items in `CONTENT_TODO.md` with clinic management and native-language reviewers.
- [ ] Connect custom domain (e.g. `miraayush.lk` or `miraayush.com`) on Vercel or Cloudflare Pages.
- [ ] Verify Google Search Console and Bing Webmaster Tools verification meta tags.
- [ ] Confirm the exact street address and map pin before publishing a Google Business Profile.
- [ ] Test mobile phone calling and WhatsApp booking on physical Android and iOS devices.
