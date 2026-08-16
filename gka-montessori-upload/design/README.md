# Website Design (Figma before dev)

Design source of truth. The Next.js app is scaffolded in `website/` **only after sign-off here**.

## Contents to produce

- `figma-links.md` — Figma file + prototype links, page-by-page status
- `sitemap.md` — proposed: Home · Programs (infant/toddler/primary) · Our Approach (Montessori) · Tuition & Admissions · About/Team · Book a Tour (the funnel LP) · Contact · (Blog later for local SEO)
- `copy-deck.md` — page-by-page copy, written before/with design, in brand voice
- `wireframes/` — exports or reference screenshots

## Design principles

- Every page drives to one CTA: **Book a Tour** (sticky header button + section CTAs)
- Trust up front: license, reviews, teacher credentials, real facility photos
- Mobile-first (paid traffic is mostly mobile), fast (Core Web Vitals — this is also an ads Quality Score input)
- Landing pages for ads live in the same design system but stripped: no nav escape hatches

## Build target (locked)

Next.js App Router on Vercel · form posts to internal API route (feeds speed-to-lead) · GTM + PostHog from day one · domain already purchased (name in intake doc).
