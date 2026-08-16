# GKA Montessori — website

Marketing site for **Great Kids Academy Montessori**, a Montessori preschool for ages 2–6 in
Edmonds, WA. Every page drives to one CTA: **Book a Tour**.

> The brand is spelled **Montessori** in all client-facing copy. The parent folder name
> ("Montesorri") is a typo that stuck internally — don't let it leak into the site.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

No environment variables are needed for local development.

```bash
npm run build    # production build
npm run lint
```

Stack: Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript.

> **Heads up:** this Next.js version has breaking changes relative to what most LLMs and older
> tutorials assume. See `AGENTS.md` — read `node_modules/next/dist/docs/` before reaching for a
> pattern you remember rather than one you've verified.

## Layout

```
app/
  (site)/            8 main pages, wrapped by a shared Header + Footer
    page.tsx           home
    about/ admissions/ classrooms/ contact/ montessori/ privacy/ programs/
  book-a-tour/       funnel landing page — deliberately OUTSIDE the (site) group
  api/lead/route.ts  form submission endpoint
components/          Band, Button, Header, Footer, LeadForm, MobileMenu,
                     PhotoPlaceholder, SectionHeading, TuitionTables
lib/site.ts          single source of truth: address, phone, hours, tuition, learning areas
design/              Figma frame exports (PNG + notes), copy deck, template map
public/photos/       facility photography
```

Two things worth knowing before you edit:

**`lib/site.ts` is the source of truth.** Address, phone, hours, ages, the full tuition tables,
and the learning-area list all live there and are interpolated into page copy and metadata.
Change the phone number in one place, not eleven.

**`/book-a-tour` sits outside the `(site)` route group on purpose.** It doesn't get the main
nav — it's a paid-traffic landing page, and the design brief calls for no escape hatches. If
you move it under `(site)`, it inherits the header and stops being a landing page.

## Photos

`PhotoPlaceholder` ([components/PhotoPlaceholder.tsx](components/PhotoPlaceholder.tsx)) renders
a real `next/image` when given a `src`, and a branded sprout-motif placeholder when not. That
means the site looks finished at every stage — but it also means empty slots are easy to miss.

As of this commit: **43 photo slots, 19 filled.** The other 24 render the placeholder. To find
them, look for `<PhotoPlaceholder` blocks with no `src` prop:

```bash
grep -rn "<PhotoPlaceholder" app | wc -l      # 43 total
grep -rn 'src="/photos/' app | wc -l          # 19 filled
```

`alt` is required even on empty slots, so each one already describes the photo it's waiting for
— that text is your shot list.

## Environment variables

One, and it's optional:

| Variable | Used by | Behavior |
|---|---|---|
| `SPEED_TO_LEAD_WEBHOOK_URL` | [app/api/lead/route.ts](app/api/lead/route.ts) | When set, each lead is POSTed here. When unset, the route logs to the console and still returns `{ ok: true }`. |

## Deploys

The site deploys to Vercel (project `gka-montessori`) **via the Vercel CLI**, not from GitHub.
This repo is not connected to Vercel — pushing to `main` does **not** trigger a deploy. If you'd
rather have push-to-deploy and preview URLs per branch, connect the repo in the Vercel dashboard
first.

## What's still open

- **Team section.** [app/(site)/about/page.tsx](app/(site)/about/page.tsx) has three generic
  team slots ("Our Director", "Our Lead Guide", "Our Assistant Guide") standing in until hiring
  is finalized. Real names, headshots, and bios replace them. The director's intro further down
  the page currently reads "coming soon."
- **Photography.** 24 of 43 slots still empty — see above.
- **Lead handling.** `api/lead` logs the submission and optionally forwards it. The actual
  speed-to-lead automation (instant SMS/call on submit) is specced separately at the workspace
  level and lands outside this app — please don't rebuild it in the route handler.
- **Tracking.** No analytics are installed yet: no GTM, GA4, Meta Pixel, or PostHog. All four
  are planned. If you wire up PostHog, it must point at a GKA-specific project — the default
  connected project belongs to a different client.
- **Tour booking.** The form captures the lead; the actual scheduling platform hasn't been
  chosen yet, so there's no calendar integration.
