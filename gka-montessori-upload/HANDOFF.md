# Handoff — updates to the GKA Montessori site

A summary of the changes on this branch, plus what still needs your real assets.
Nothing about how the app runs changed — see `README.md` to run/build/deploy.

**Live preview of these changes:** https://gka-montessori-demo.vercel.app
(deployed to a temporary preview project — see "Deploy" in the README to ship it
to the real `gka-montessori` project.)

## What changed

1. **Age range → 2–6.** Updated in `lib/site.ts` (the source of truth) and in the
   handful of places the range was written into copy (home/contact/book-a-tour
   metadata, About, and the Classrooms "mixed-age" copy — where "three years of
   growth" also became "four years").
2. **Photos.** Filled the empty `PhotoPlaceholder` slots — see the photo list below.
3. **Motion.** A calm, on-brand "growth" animation layer:
   - `components/Reveal.tsx` — scroll-reveal wrapper (IntersectionObserver).
   - `components/Sprout.tsx` — the brand sprout mark draws itself in on scroll.
   - `components/FloatingLeaves.tsx` — ambient drifting leaves in the hero.
   - `app/globals.css` — all keyframes + a `prefers-reduced-motion` guard.
   - `components/Button.tsx` — hover-lift/press + an optional `pulse` glow on the
     primary "Book a Tour" CTA.
   - `components/PhotoPlaceholder.tsx` — new optional `imageClassName` (hover zoom).
   - `app/layout.tsx` — a tiny pre-paint script adds `gka-js` so reveals never
     flash and the site stays fully visible without JS.
   These are currently applied on the **home page**; other pages get the shared
   Button polish automatically.

## Photos

**Real photos of the actual classrooms** (keep these):
`classroom-wide-a`, `prepared-classroom-a`, `classroom-sunlit-a`,
`classroom-afternoon-a`, `gathering-space-a`.

**AI-generated placeholders** — realistic, but **not real GKA children**. Replace
each with a real photo (same filename → no code change needed) once you have shots
with photo consent:
`child-pouring`, `guide-with-child`, `guide-small-group`, `classroom-doorway`,
`floor-mat-work`, `child-choosing-materials`, `child-focus-materials`,
`children-lunch`, `child-painting`, `morning-work-cycle`, `outdoor-lunch-play`,
`children-gardening`, `welcome-at-door`.

## Still needs your real assets (left as intentional blanks)

These slots still render the branded sprout placeholder on purpose — they should be
genuinely yours, not AI:

- **School emblem / logo** (about, admissions, montessori pages)
- **Director portrait** and **team headshots** (about page)
- **Location map** (contact page)
- **Video tour** (classrooms page)
- **Outdoor photo** for the classrooms "Fresh air is part of the curriculum"
  section — the old tree-playground image was removed since we don't have that.

## Minor copy note

Two spots in the Classrooms copy still say "a three-year-old" as an example child
("trays a three-year-old can reach"). They're valid within 2–6 and were left as-is;
change to "two-year-old" if you'd rather emphasize the youngest age.
