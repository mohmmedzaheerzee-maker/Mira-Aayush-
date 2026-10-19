Mira Ayush Website — Full Build Prompt
Oct 19, 2026 · @zee
1. How to use this prompt
Sections 2 to 14 are the prompt itself: copy them as one block into Claude Code, Lovable, Bolt, v0 or Cursor. Section 15 is for you, not for the AI.
• Flyer image-um roadside signboard image-um prompt-oda attach pannunga, brand reference-aa.
• Build-ah ore message-la ketkaadheenga: Phase 1 design + home, Phase 2 inner pages + 3 languages, Phase 3 SEO, GEO, speed polish.
• Launch-ku munnaadi section 15 items-ah client kitta confirm pannunga. Illa-na AI placeholder facts podum.
• Lovable, Bolt maadhiri tools-la default-ah client-side React app varum. SEO-ku server-rendered output thevai, so Next.js allathu Astro use panna sollunga (section 8).
2. Role and goal
You are a senior full-stack engineer, UI/UX designer and technical SEO specialist. Build a premium, fast, trilingual (English, Tamil, Sinhala) website for Mira Ayush Ayurvedic Medical Center and Pharmacy in Periyakudiyiruppu, Kalpitiya, Sri Lanka.
The site must do four jobs:
1. Look like a trusted, modern, professional clinic, not a template.
2. Make booking one tap away on every page.
3. Rank for local Ayurvedic searches in English, Tamil and Sinhala.
4. Be easy for AI answer engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) to read, trust and quote.
Most visitors are local patients on mid-range Android phones with mobile data. Design and performance decisions must favour them first. The main conversion is a tap on Call, WhatsApp or Directions, or a submitted booking form.
Attached references: a services flyer (portrait) and a roadside signboard (landscape). Reuse their colours, layout language and wording, but do not copy their typos (see section 3).
3. Business facts (single source of truth)
Use only these facts. Where something is missing, insert a visible [CONFIRM: ...] placeholder and list it in CONTENT_TODO.md. Never invent addresses, prices, registration numbers, awards, statistics or patient stories.
Item
Value
Name
Mira Ayush Ayurvedic Medical Center and Pharmacy (keep "Center" as in the logo)
Tagline
Ancient Wisdom • Modern Healing • Better Tomorrow
Location
Periyakudiyiruppu, Kalpitiya, Sri Lanka. [CONFIRM: street address, map pin, landmarks]
Phone / WhatsApp
071 836 3968 and 071 836 3964 (international: +94 71 836 3968, +94 71 836 3964). [CONFIRM: which numbers are on WhatsApp]
Opening hours
Every day, 5:00 PM to 9:00 PM
Consultant doctor
Dr. A.R.F Fardana: BUMS (Hons), PGDP, MDCC; Diploma in Ayurvedic Beauty Therapy; Diploma in Ayurvedic Cosmetics Manufacturing
Special consultant
Dr. U.M Rayeez: BUMS (Hons), PGDP, DCP. Special time slot 7:00 AM to 8:00 AM, by appointment only
Pharmacy
Ayurvedic medicines available at the center; after a medical consultation the team guides patients in choosing suitable medicines
Wayfinding
Green roadside signboard with an arrow and "100m" to the center
Services (from the flyer):
1. General Ayurvedic Medicine: personalised care for everyday health concerns
2. Orthopedic and Arthritis Treatment: herbal support for joint comfort and mobility
3. Ayurvedic Orthopaedic Care: support for bone, muscle and spine wellbeing
4. Ayurvedic Beauty Care: natural care for healthy, glowing skin
5. Ayurvedic Cupping Therapy: traditional therapy for relief and wellbeing
6. Ayurvedic Hair Care: natural care for healthy, strong, beautiful hair
7. Medical Advice and Counselling: thoughtful guidance for your wellbeing
8. Skin Disease Treatment: Ayurvedic care for common skin concerns
9. Ayurvedic Medicines (pharmacy)
The flyer lists services 2 and 3 separately. On the site, merge them into one page, "Orthopaedic, Arthritis and Spine Care", with clear sub-sections.
Flyer corrections: write "Consultant" (not "Consutant"), "Appointments" (not "Appoinments") and "Therapy" (not "Therepy"). Use the exact Tamil and Sinhala service names printed on the flyer and mark them for native-speaker review.
4. Brand and visual direction
The feel is a quiet-luxury wellness clinic: calm, clean, credible. Think cream paper, deep forest green, fine gold lines and generous white space. Avoid clip-art herbs, neon gradients and cluttered hero sections.
Colour tokens (approximate, sampled from the flyer; replace with the logo file's exact values):
Token
Hex
Use
forest
#0B3D2E
headers, nav, banner bars, primary buttons
leaf
#3F8F3A
accents, icons, success states
cream
#F6F0DF
page background
gold
#C9A24A
hairlines, icon rings, highlights (never body text)
ink
#14231B
body text
medical-red
#C8102E
logo cross and call-to-action accents only
Typography:
• Headings: Cinzel or Cormorant Garamond (the flyer uses a Roman-capital serif).
• Tagline: Cormorant Garamond Italic.
• Body and UI: Inter or Manrope.
• Tamil: Noto Sans Tamil. Sinhala: Noto Sans Sinhala.
• Self-host and subset all fonts, with font-display: swap.
Components and imagery:
• Reuse the signboard's language: dark green banner bars, rounded service cards (16 to 24 px radius) with gold-ringed circular icons, soft shadows, leaf motifs in corners.
• Use the supplied logo exactly (red cross with leaves in a green circular badge). Do not redraw it.
• Create one consistent line-icon set (1.5 px stroke) for the services: knee joint, lotus, cupping glass, hair strand, skin, mortar and pestle, counselling, medicine bottle.
• Photography: real photos of the center, doctors and treatments. Until they arrive, use tasteful placeholders and never show identifiable patients without consent.
• Dark mode is not required.
5. Site map and page specs
Build every page in English, Tamil and Sinhala. URLs use English slugs under a locale prefix, for example /en/services/ayurvedic-cupping-therapy/, /ta/..., /si/....
Page
Path
Must contain
Home
/
Sections listed below
Services hub
/services/
8 service cards, short intro, booking CTA
Service page (one per service)
/services/{slug}/
Answer-first summary, who it helps, what to expect, how the visit works, doctor, 3 to 5 FAQs, related services, CTA
Doctors
/doctors/
Bio, exact credentials, specialities, consulting hours, photo, "last reviewed" date
Pharmacy
/pharmacy/
What is available, how consultation leads to medicines, hours, directions
Book
/book/
Short booking form, WhatsApp and call buttons, hours table
About
/about/
Story, approach (Ancient Wisdom, Modern Healing, Better Tomorrow), team, values
FAQ
/faq/
10 to 12 patient questions, grouped
Health articles
/articles/
Optional blog for local search; each article has an author and reviewer
Contact
/contact/
Address, map, phone, WhatsApp, hours, how to find the signboard
Privacy and disclaimer
/privacy/
Privacy policy and medical disclaimer
Home page order:
1. Sticky header: logo, nav, language switcher, "Book Appointment" button.
2. Hero: H1, one-sentence promise, two CTAs (WhatsApp, Call), three trust chips (qualified doctors, open daily 5 to 9 PM, pharmacy on site), 3D scene (section 6).
3. Services grid: 8 cards with icon, one line, "Learn more".
4. Approach: three pillars from the tagline.
5. Doctors: two cards with credentials.
6. How a visit works: Consult, Personal plan, Treatment, Medicines from our pharmacy.
7. Pharmacy highlight.
8. Find us: hours table with live "Open now" badge, lazy-loaded map, Directions button, signboard photo.
9. FAQ: 6 to 8 questions.
10. Final CTA band, then footer with name, address, phone, hours, links, language switcher, disclaimer.
6. 3D and motion
3D must add a premium feel without hurting speed or readability. Treat it as progressive enhancement: the site must be complete and fast without it.
Hero scene (one WebGL canvas on the whole site):
• A softly lit scene of a wooden mortar and pestle with floating herb leaves, turmeric and spice bowls, or alternatively a slowly opening lotus with orbiting leaves. Warm, cream-and-green lighting, shallow depth of field.
• Subtle pointer parallax on desktop and gyroscope parallax on mobile (small range, can be switched off).
• Build with three.js and React Three Fiber. Models as GLB with Draco or Meshopt compression, textures as KTX2 or WebP.
• Budget: model under 250 KB, whole 3D chunk under 400 KB transferred, device pixel ratio capped at 1.5, pause rendering when off-screen or the tab is hidden.
Loading and fallbacks:
• Server-render a static poster image of the scene (WebP, preloaded). The poster, not the canvas, is the LCP element.
• Mount the canvas only after idle time or first interaction, via a dynamic import.
• Show the poster plus a gentle CSS float animation instead of WebGL when any of these is true: no WebGL, prefers-reduced-motion, Save-Data on, device memory 2 GB or less, or fewer than 4 CPU cores.
Other motion (CSS and Framer Motion, no extra WebGL):
• Section reveals: fade and rise 24 px over 600 ms, once per section.
• Service cards: 3D tilt of at most 8 degrees on hover and touch, with a soft gold edge light.
• Background leaves drifting with scroll (transform only). Use GSAP ScrollTrigger for one signature scroll moment, for example the "How a visit works" steps drawing in.
• Do not hijack native scroll on touch devices. Smooth-scroll libraries are optional and desktop only.
Rules: animation never delays content, never covers the Call or WhatsApp buttons, never flashes, and always has a reduced-motion version.
7. UX, navigation and conversion
Every visitor should reach any service, doctor or booking option in three taps or fewer.
Navigation:
• Desktop header: Home, Services (mega-menu with all 8 services and icons), Doctors, Pharmacy, FAQ, Contact. Right side: language switcher (EN, தமிழ், සිංහල) and a "Book Appointment" button. No more than 6 top-level items.
• Mobile: hamburger opens a full-screen menu. A sticky bottom bar with three large buttons, Call, WhatsApp, Directions, stays visible on every page.
• Breadcrumbs on inner pages, related-service links at the end of each service page, a footer with the full site map.
Booking:
• One short form: name, phone, preferred doctor, service, preferred day and time slot, optional message. Do not ask for medical details.
• On submit: open a pre-filled WhatsApp message (wa.me/94718363968) and also send the request by email through a server action (Resend or similar), so no booking is lost.
• Spam protection with a honeypot field and rate limiting. Clear success and error states. No account creation.
• Show the doctors' hours clearly: daily 5:00 PM to 9:00 PM, and Dr. Rayeez's 7:00 AM to 8:00 AM slot by appointment only.
Helpful details:
• A live "Open now" or "Opens at 5:00 PM" badge, calculated in the Asia/Colombo time zone (UTC+05:30).
• Phone numbers as tel: links, shown in local format (071 836 3968).
• Tap targets at least 48 px, body text at least 16 px, line length 60 to 75 characters.
• Maximum three call-to-action types on the site: Book, Call or WhatsApp, Directions.
• Warm, reassuring microcopy. No pop-ups on first load.
Analytics (privacy-friendly, Plausible or GA4 with consent mode): track call_click, whatsapp_click, directions_click, form_submit, language_switch.
8. Tech stack and architecture
Use a static-first, server-rendered stack. Do not build a client-only single-page app: search bots and AI crawlers do not reliably run JavaScript, and the core content must exist in the HTML.
Layer
Choice
Framework
Next.js (App Router) with TypeScript and static generation (SSG or ISR). Astro with React islands is an acceptable alternative
Styling
Tailwind CSS driven by the design tokens in section 4
3D and motion
three.js with React Three Fiber and drei; Framer Motion; GSAP ScrollTrigger
Languages
next-intl with /en, /ta, /si routes; content in typed JSON or MDX per locale
Content editing
Content files in the repo, or Decap CMS (Git-based, free) so the center can edit text and photos
Images
next/image with AVIF and WebP, responsive sizes
Forms
Server action, Resend email, WhatsApp deep link
Hosting
Vercel or Cloudflare Pages with a global CDN
Quality
Strict TypeScript, ESLint, Prettier, a .env.example, no secrets in the repo
Suggested structure: app/[locale]/... for routes, components/ for the UI kit, content/{en,ta,si}/ for copy, public/models/ for GLB files, lib/seo/ for schema and metadata builders, lib/hours.ts for the Asia/Colombo open-now logic.
Include a README that explains how to run, edit content, add a language string, replace photos and deploy.
9. Performance, accessibility and mobile-first rules
Targets are measured on a throttled mobile 4G profile, for the home page and one service page.
Metric
Target
Largest Contentful Paint
2.5 s or less
Interaction to Next Paint
200 ms or less
Cumulative Layout Shift
0.1 or less
Lighthouse (mobile)
Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100
JavaScript on home page
Under 200 KB gzipped, excluding the lazy 3D chunk
Performance rules:
• Design mobile first at 360 px, then scale up at 768, 1024 and 1440 px.
• Images: AVIF or WebP, srcset, explicit width and height, lazy-load below the fold, preload only the hero poster.
• Fonts: self-hosted and subset for Latin, Tamil and Sinhala; preload only the heading font.
• Split code by route, import 3D dynamically, defer all third-party scripts.
Accessibility rules (WCAG 2.2 AA):
• Text contrast at least 4.5:1. Gold is for lines and icons only, never for small text on cream.
• Full keyboard navigation, visible focus rings, skip-to-content link, semantic landmarks, descriptive alt text in the page's language.
• Set lang per page (en, ta, si). Use line height 1.7 or more for Tamil and Sinhala text.
• Respect prefers-reduced-motion everywhere. No content conveyed by colour alone.
Security: HTTPS only, standard security headers, no personal data in logs, rate-limited forms.
10. SEO: technical and on-page
Every page must be crawlable, unique and fast, in all three languages.
Technical checklist:
• Server-rendered HTML for all text, navigation and contact details (the site must read correctly with JavaScript off).
• Unique <title> (60 characters or fewer) and meta description (155 or fewer) per page and per language. Title pattern: {Service} in Kalpitiya | Mira Ayush Ayurvedic Medical Center.
• One H1 per page, logical H2 and H3 order, clean lowercase URLs, canonical tags.
• hreflang for en, ta, si plus x-default, reciprocal on every page. Do not auto-redirect visitors by IP or browser language; offer a language suggestion banner instead.
• XML sitemap with language alternates, robots.txt, a useful 404 page, 301 redirects for any URL change.
• Open Graph and Twitter images generated per page, favicon set, web manifest.
• Internal links between services, doctors, FAQ and booking. Breadcrumb markup on inner pages.
• Submit to Google Search Console and Bing Webmaster Tools after launch.
Starter keyword themes (refine with real search data; write Tamil and Sinhala keywords natively, do not machine-translate them):
• Ayurvedic doctor in Kalpitiya; Ayurvedic medical center Kalpitiya
• Ayurvedic arthritis and joint pain treatment in Kalpitiya
• Ayurvedic cupping therapy in Kalpitiya
• Ayurvedic skin treatment, Ayurvedic hair care, Ayurvedic beauty care in Kalpitiya
• Ayurvedic pharmacy in Kalpitiya
On-page rules: put the primary keyword in the H1, first paragraph and one H2. Write for patients first. No keyword stuffing, no thin duplicate pages, no text hidden inside images or 3D.
11. Local SEO and GEO (generative engine optimization)
Local search and AI answers both reward the same thing: clear, consistent, verifiable facts about one real place.
Local SEO:
• Keep name, address and phone identical everywhere: site header and footer, contact page, schema, Google Business Profile, Facebook, Bing Places, Apple Business Connect, WhatsApp Business.
• Prepare a Google Business Profile with the closest available categories (for example an Ayurvedic clinic as primary), hours, services, real photos and the website link. Link the site's review button to the profile's review page.
• Contact page: embedded map (lazy-loaded), a Directions link, written directions from the main road, and the signboard photo.
• Show reviews only if they are real and shown with permission. Never add rating markup for ratings that are not visible on the page.
Structured data (JSON-LD, built in lib/seo/):
• @graph on every page with Organization, WebSite (with inLanguage) and, on the home and contact pages, a local business node typed MedicalClinic and Pharmacy with name, logo, image, telephone, PostalAddress (Kalpitiya, LK), geo, openingHoursSpecification (daily 17:00 to 21:00), sameAs links and hasMap.
• Physician nodes for the two doctors with knowsAbout and credentials, only once the owner has verified them.
• Service or MedicalTherapy markup per service page, BreadcrumbList on inner pages, FAQPage on FAQ and service pages. Google shows FAQ rich results for few sites, so treat this markup as machine-readable context, not a ranking trick.
• Validate with the Schema Markup Validator and Google's Rich Results Test.
GEO rules (for ChatGPT, Gemini, Perplexity, Google AI Overviews):
• Answer first. Start every page and every question-style H2 with a direct 40 to 60 word answer, then detail. Example H2: "What is Ayurvedic cupping therapy?"
• One entity sentence, reused word for word on the home page, about page, Google profile and social bios: "Mira Ayush is an Ayurvedic medical center and pharmacy in Periyakudiyiruppu, Kalpitiya, Sri Lanka, offering general Ayurvedic medicine, orthopaedic and arthritis care, beauty, hair and skin care, and cupping therapy."
• Key facts box in plain HTML on the home and contact pages: name, address, phone, hours, services, doctors. Use real HTML tables for hours and services.
• Visible expertise: doctor bios with exact credentials, a "Reviewed by" line and a "Last updated" date on every health page. Cite credible sources (for example WHO or Sri Lanka's Department of Ayurveda) for general explanations.
• Nothing important only in images, 3D or JavaScript tabs. Give the flyer's content as text.
• Real Tamil and Sinhala pages, not only a language toggle, because AI answers follow the language of the question.
• robots.txt: allow the major search and AI crawlers (for example Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Google-Extended). Check each vendor's current documentation for exact names. Add /llms.txt, a short Markdown map of the site; adoption is unproven, but it costs almost nothing.
• Monitor monthly: ask ChatGPT, Gemini, Perplexity and Google queries such as "Ayurvedic doctor in Kalpitiya" and log whether Mira Ayush appears and what is said. Watch referral traffic from AI tools in analytics.
12. Multilingual: English, Tamil, Sinhala
All three languages are first-class: same pages, same quality, same SEO treatment.
• English is the default (x-default). Tamil and Sinhala live under /ta/ and /si/ with full pages, titles, descriptions, alt text and schema inLanguage.
• The language switcher is visible in the header and footer on every page, shows each language in its own script (English, தமிழ், සිංහල) and remembers the visitor's choice.
• Use the Tamil and Sinhala service names exactly as printed on the flyer. For all other copy, write natural, plain Tamil and Sinhala (not word-for-word translation) and tag each string native-review: pending in the content files. Nothing launches in Tamil or Sinhala until a native speaker has checked it.
• Layout must cope with strings 30 to 40 percent longer than English. No text baked into images.
• Use English slugs in all languages for stable URLs. Keep phone numbers in local format on screen and in tel: links with +94.
• Each language gets its own FAQ wording and keyword research, because people search differently in each.
13. Content, trust and health-compliance rules
This is health content, so accuracy and restraint matter more than persuasion.
• Tone: warm, calm, professional, plain language, short sentences. No hype.
• No cure claims. Never promise results or say a treatment cures a disease. Use the flyer's careful verbs: "support", "care for", "relief", "comfort". Do not suggest Ayurvedic care replaces a hospital for serious conditions.
• Disclaimer in the footer and on every service page: "Ayurvedic care complements, and does not replace, emergency or conventional medical care. In an emergency, call 1990 (Suwa Seriya ambulance) or go to the nearest hospital."
• Credentials: show each doctor's exact degree names and registration numbers, only as supplied and verified by the owner. Spell out abbreviations (BUMS, PGDP, MDCC, DCP) only after the owner confirms their meaning.
• Prices: do not publish prices or fees unless supplied. Use "Ask us about consultation fees".
• Reviews and photos: real, consented, never fabricated. No before and after photos without written consent and legal review.
• Privacy: a privacy page, minimal data in the booking form (no medical details), a consent checkbox, data used only to follow up on the appointment.
• Placeholders: every missing fact appears as [CONFIRM: ...] and is collected in CONTENT_TODO.md. No lorem ipsum, no invented content.
• Freshness: every health page shows a "Last updated" date, and the README tells the owner to review pages every 6 months.
14. Deliverables, build order and acceptance criteria
Work in three phases and stop after each one for review. Do not start the next phase until the previous one is approved.
1. Phase 1: design tokens, component library, home page with the 3D hero and poster fallback, header, footer, sticky mobile action bar.
2. Phase 2: all inner pages, booking form with WhatsApp and email, English, Tamil and Sinhala routing and content.
3. Phase 3: schema, sitemap, hreflang, robots.txt, llms.txt, analytics events, performance and accessibility tuning, QA.
Deliverables:
• Full source code that runs with npm install and npm run dev, plus a README (run, edit content, add language strings, replace photos, deploy).
• Reusable components: Button, ServiceCard, DoctorCard, HoursBadge, ActionBar, FAQ accordion, LanguageSwitcher, Hero3D with poster fallback.
• SEO assets: metadata and JSON-LD builders, sitemap, robots.txt, llms.txt, per-page Open Graph images.
• CONTENT_TODO.md listing every [CONFIRM: ...] placeholder and every string awaiting native review.
• A short launch checklist: domain, DNS, Search Console, Bing, Google Business Profile.
Acceptance criteria:
[ ] Lighthouse mobile on the home page and one service page: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 100.
[ ] LCP 2.5 s or less and CLS 0.1 or less on throttled 4G.
[ ] With JavaScript disabled, all text, navigation and contact details still display.
[ ] The 3D hero falls back to the poster when reduced motion is on, WebGL is missing or the device is low-end.
[ ] Call, WhatsApp (pre-filled) and Directions buttons work on a real phone; the form sends both an email and a WhatsApp message.
[ ] All three languages are complete, and hreflang validates in both directions.
[ ] JSON-LD passes the Schema Markup Validator with no errors.
[ ] The "Open now" badge is correct in Asia/Colombo time, including the by-appointment 7:00 to 8:00 AM slot.
[ ] Keyboard-only navigation works everywhere; contrast checks pass; layout holds at 360 px width.
[ ] No lorem ipsum, no invented facts, every placeholder listed in CONTENT_TODO.md.
15. Open items to confirm with the client (not part of the prompt)
Indha 12 items client kitta kettu answer vaangina, placeholders illama launch-ku ready aagum.
1. Exact address: street address, Google Maps pin or Plus Code, nearby landmarks.
2. WhatsApp: are 071 836 3968 and 071 836 3964 both on WhatsApp? Which one takes bookings?
3. Doctor credentials: BUMS usually stands for Bachelor of Unani Medicine and Surgery, while the center is branded Ayurvedic. Confirm the exact degree names, what PGDP, MDCC and DCP stand for, and the registration numbers. Health sites are judged on this.
4. Dr. Rayeez's slot: is 7:00 to 8:00 AM every day, or only certain days?
5. Photos: real photos of the center, doctors and treatment rooms, with consent.
6. Logo and colours: the logo source file (SVG or high-resolution PNG) and official brand colours.
7. Domain and email: preferred domain (for example a .lk or .com) and a business email.
8. Fees: publish consultation fees or show "ask us".
9. Social and profiles: Facebook, Instagram, TikTok, YouTube links; does a Google Business Profile already exist?
10. Pharmacy wording: any licence or registration to display, and whether medicines are sold only after consultation.
11. Emergency line: confirm the "1990 (Suwa Seriya)" disclaimer wording is acceptable.
12. Languages: who will review the Tamil and Sinhala copy, and who will keep the site updated after launch.