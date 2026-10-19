# Mira Ayush launch confirmations

Items below need confirmation from clinic management or a qualified reviewer. Do not replace these with guessed details.

## Clinic facts

| Topic | Current site state | Confirmation needed |
|---|---|---|
| Exact location | Periyakudiyiruppu, Kalpitiya; map links show the area, not a confirmed clinic pin | Street/building address, exact map pin or Plus Code, nearby landmarks and directions |
| Domain | `miraayush.com` is used as a preview URL in metadata and structured data | Confirm the owned production domain before launch and update all canonical, sitemap, robots and schema URLs |
| Phone and WhatsApp | Calls and appointment drafts use `071 836 3968`; a second number `071 836 3964` is listed for calls | Confirm which number(s) use WhatsApp and which number should receive booking requests |
| Doctor credentials | Names and qualifications are shown as supplied, with a visible pending-confirmation notice | Confirm degree names, institutions, registration numbers, role titles and which doctor provides each service |
| Dr. Rayeez morning slot | 7:00–8:00 AM by appointment | Confirm which days this slot is available |
| Service details | Eight service pages use cautious, general descriptions | Confirm actual procedures, availability, precautions, equipment and any claims before adding specifics |
| Pharmacy | Site says Ayurvedic medicines are available and patients receive guidance after consultation | Confirm current stock, dispensing process and any license/registration details before listing products |
| Clinic photos | No clinic or doctor photos are included; the hero is an illustration/3D scene | Supply consented photos and approved names/captions if desired |
| Brand assets | `public/logo.svg` and approximate palette are used | Confirm the supplied logo is final and provide official colour values if available |
| Fees | No prices are published | Confirm whether to keep “Contact us for current fees” or publish an approved fee schedule |
| Social profiles | No social or review links are published | Confirm official profile URLs before adding them |
| Emergency wording | Site says to call 1990 (Suwa Seriya ambulance) or go to the nearest hospital | Confirm final disclaimer wording with clinic management |

## Booking email setup

The form prepares a prefilled WhatsApp draft and can also submit an email copy. Email delivery stays unavailable until the clinic configures a Resend API key, a verified sender address and a recipient address in `.env.local` using the names in `.env.example`. Confirm the mailbox, sender domain and retention process before launch.

The optional note field says not to include medical details. The form should remain limited to appointment coordination.

The current rate limiter keeps counters in process memory. If the site runs across multiple serverless instances, replace it with a shared rate-limit store before launch.

## Language and clinical review

Tamil (`lib/content/ta.ts`) and Sinhala (`lib/content/si.ts`) copy is marked pending native review and is `noindex` until reviewed. All strings in those files, including FAQs, service descriptions, booking labels, metadata and disclaimers, need review by native speakers familiar with the local dialect and healthcare terminology. Each service page also shows that its clinical reviewer is pending confirmation.

English copy has been pared back to the supplied business facts. A qualified clinic reviewer should still approve service descriptions, safety language, credentials and the privacy notice before launch.

## Launch checklist

- [ ] Confirm the facts above and remove or resolve each visible `[CONFIRM: ...]` placeholder.
- [ ] Set the production domain and email environment values.
- [ ] Native-review Tamil and Sinhala copy, then remove `noindex` from those locales.
- [ ] Test phone links, WhatsApp drafts, email delivery, location directions and layout on real mobile devices.
- [ ] Confirm clinic privacy, consent, emergency and medical wording.
- [ ] Deploy with HTTPS and submit the verified sitemap to search consoles.
- [ ] Review clinical copy every six months; next scheduled review: April 2027.
