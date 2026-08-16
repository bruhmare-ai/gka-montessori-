# Template Map — GKA Montessori Site

Synthesized from the 9 template captures in `website/design/frames/` (home, about, team, childrens-house, extended-day, classrooms, montessori-philosophy, admissions, contact). **Structure and layout only come from the captures — every word, photo, color value, and logo on the built site is GKA's own.** Copy comes from `website/design/copy-deck.md` (voice rules: `docs/brand/voice.md`); facts and tuition are imported from `@/lib/site` (`site`, `tuition`, `learningAreas`) and never hardcoded.

---

## Global spec

### Color-role translation (template band role → GKA token)

| Template band role | GKA Tailwind token | Usage |
|---|---|---|
| Dark-teal band / overlay | `bg-navy` | Dark bands, photo overlays, footer, header bar |
| Terracotta accent + buttons | `bg-brand` (apple green) | Primary buttons, accent labels, short CTA bands (navy text on brand) |
| Olive / dark-sage band | `bg-brand-dark` (forest) | Secondary dark bands, mirrored feature blocks |
| Light-sage band | `bg-tint` | Testimonial bands, form band, soft feature bands |
| Mustard / blush band | `bg-tint-cyan` | Alternate soft surface (welcome band, anchor bar, second testimonial slot) |
| Cream base | warm off-white page background (`bg-cream`) | Default page surface between bands |
| Gold accents | `text-lime` / `bg-lime` | Sparingly: eyebrow accents, active-nav underline, small energy marks |

Rule of thumb: long-copy bands stay light (`tint` / `tint-cyan` / cream with `text-navy`); short-copy conversion bands may be `bg-brand` with `text-navy`; dark bands (`navy`, `brand-dark`) carry white text with `lime` accents.

### Nav (site header)

- Single row: GKA logo left, links right. Transparent over photo heroes (white logo variant), solid `bg-navy` on non-photo pages. Collapses to hamburger on mobile; the CTA button stays visible on mobile.
- Links (flat, no dropdowns — GKA's sitemap is small): **About · Programs · Classrooms · Montessori · Tuition & Admissions · Contact**
- Last slot: **solid "Book a Tour" CTA button** (`bg-brand text-navy`, uppercase tracking-widest label) → `/book-a-tour`. This is a deliberate upgrade over the template, which has no header CTA.
- Active page: `lime` underline. Nav labels: `uppercase tracking-widest text-sm`.
- Dropped template items: Parent Hub, Plant Sale, cart icon (platform artifacts / not applicable).
- Optional seasonal announcement bar above the header on Home only: "Now enrolling for fall at our 76th Ave location — spots are limited." (`bg-brand text-navy`).

### Footer (global, all pages except /book-a-tour)

`bg-navy`, light text, wave-divider entry. Five zones left→right, stacking on mobile:

1. **Stacked GKA logo** (light variant) + tagline line `site.taglineAlt` ("Nurturing Independence. Inspiring Lifelong Learning.").
2. **NAP block** — `site.legalName` in bold caps, `site.address.full`, `site.phone` (tel link), email (pending intake), `site.hours`, social icon row (FB/IG when live). NAP must match the Google Business Profile exactly (LSA/local SEO). No fax.
3. **"Start Here"** link column: About · Tuition & Admissions · Contact · Book a Tour.
4. **"Explore"** link column: Montessori · Classrooms · Programs.
5. **"Our Programs"** link column: Full-Time (8–5) · Half-Day AM · Half-Day PM (anchor links into `/programs`). Far right: **2 badge slots** — WA DCYF license + DSHS accepted (render as placeholder badge components until license number is verified; do not publish the license claim before intake confirms it).

Thin bottom bar: © year `site.legalName` · Privacy/Legal link. Column headers use the caps-label style.

### Typography system

- **Display**: Fraunces via `className="font-display"` — all H1/H2/H3 display headings, sentence case, tight leading, large scale (replaces the template's bookish serif).
- **Body**: Nunito Sans (site default) — paragraphs, forms, footer.
- **Labels/eyebrows/buttons/nav**: `uppercase tracking-widest text-sm` (the template's letterspaced small-caps role).
- **Script-accent slots** (template's handwritten eyebrows, quote attributions, "Kind Words from Families" labels): rendered as **`font-display` italic** in `text-brand` or `text-lime` — no third font is added. Decision: keeps the emotional register without loading a script face.
- Emphasis inside quotes: bold spans (template pattern). Time ranges/attributions: italic body.
- One `h1` per page; all placeholder images get descriptive alt text; visible focus states on all interactive elements.

### Band + wave-divider design language (the template signature)

- Pages are built as **full-width stacked color bands** joined by **organic curved dividers** (wave, arc, and occasional diagonal). Use the shared band/divider components (`Band`, `WaveDivider`/`ArcDivider`) — dividers are SVG shapes colored to the adjacent band, never images.
- Recurring devices, all via shared components:
  - **Watermark motif** — oversized low-contrast line-art of the GKA tree/leaf mark ghosted behind band content.
  - **Organic photo masks** — circle, arch, and rounded-rect crops; overlapping circle-on-rect collages. Every photo slot renders the shared **`PhotoPlaceholder`** component (no real, stock, or AI photos).
  - **Tonal patterns** (speckle/chevron equivalents) — recreate with GKA leaf/wave motifs only; never reuse template art.
- Button tints: primary `bg-brand text-navy`; secondary outline (`border-navy text-navy`, or cream outline on dark bands); inverted `bg-cream text-navy` on `brand`/`navy` bands. All labels uppercase tracking-widest.
- Mobile-first: bands stack single-column; 2-col splits stack image-first or text-first per section note; card grids collapse 3→2→1.

### Shared components implied by the map

`SiteHeader`, `SiteFooter`, `Band`, `WaveDivider`, `PhotoPlaceholder`, `Watermark`, `Eyebrow` (caps label), `ScriptAccent` (display-italic), `TourForm` (the speed-to-lead form, reused on /contact, /admissions, /book-a-tour), `TuitionTable` (renders from `tuition`), `TestimonialBand`, `CtaBand`, `StaffCard`, `Accordion`.

---

## / — Home  *(from capture: home)*

| # | Section | Layout pattern | Band | Content (copy deck → slot) |
|---|---|---|---|---|
| 0 | Announcement bar (seasonal, optional) | Slim full-width strip above header | `bg-brand` | "Now enrolling for fall…" line |
| 1 | Hero | Full-bleed `PhotoPlaceholder` + `navy/60` overlay, centered stack: H1, eyebrow subline, CTA; curved cream sweep at bottom | photo + navy overlay | H1 "Nurturing Independent Minds" (`site.tagline` sans bang); eyebrow: "Montessori school in Edmonds, WA · Ages 3–6" (`site`); primary CTA "Book a Tour" + secondary "Explore Our Programs" |
| 2 | Welcome intro | 2-col ~50/50: text (H2 + 2 paragraphs + button) left, photo collage right (organic-crop `PhotoPlaceholder` + ring-circle inset), watermark behind heading | cream | `site.description` expanded with copy-deck Home hero sub; button "Our Story" → /about |
| 3 | Why Choose GKA (3-up) | Centered `font-display` H2, 3 equal columns: ring-circle `PhotoPlaceholder`, caps title, short text | `bg-navy` | Copy-deck "Why GKA" 3 differentiators (True Montessori foundations / The whole child / A partner to your family) |
| 4 | Testimonial band | Wave top+bottom; large quote left ~65%, caps attribution, display-italic accent label lower-right, watermark right | `bg-tint` | Social-proof slot (pending reviews) — launch with founder welcome quote, swap in parent quotes later |
| 5 | Programs card grid | Wave top; centered H2 + intro paragraph, then card grid (3 cards): rounded `PhotoPlaceholder`, brand caps title, blurb, button | cream | Cards: Full-Time (8–5) / Half-Day AM / Half-Day PM from `tuition` labels + hours; intro = copy-deck Programs intro line; buttons → /programs anchors |
| 6 | Transparent Tuition band | Single centered column: H2, paragraph, button; tonal GKA-motif texture | `bg-tint` (textured) | "Transparent tuition, simple enrollment" angle + How-it-works line (Book a tour → Meet us → Reserve your spot); button "See Tuition & Admissions" → /admissions |
| 7 | Quote band | Centered one-line display-italic quote + caps attribution; arched bottom edge | `bg-navy` | Public-domain Maria Montessori quote, attribution "— Dr. Maria Montessori" |
| 8 | Final CTA band | Arched top, watermark; centered H2 + inverted button | `bg-brand` (navy text) | "Come see the classroom for yourself." → Book a Tour (`bg-cream text-navy` button) → /book-a-tour |
| 9 | Footer | Global spec | `bg-navy` | — |

---

## /about — About + Team  *(from captures: about + team; team card grid becomes an About section)*

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Hero image banner | Full-bleed `PhotoPlaceholder` + navy tint, no text (or tagline overlay), curved bottom | photo + navy overlay | Classroom photo slot; optional overlaid `site.tagline` |
| 2 | Intro statement (h1) | 2-col ~1/3–2/3: low-opacity watermark emblem left, H1-scale positioning statement right | cream | H1 "A renewed vision for our 76th Ave home" (copy deck About) |
| 3 | Mission + Story | 2-col ~55/45: two stacked text blocks left (caps eyebrow + copy each, optional Read More accordion), overlapping circle `PhotoPlaceholder` collage right; curved exit | cream | Block 1 "Our Mission" (whole-child + independence, voice.md phrases); Block 2 "Our Story" (reopening this fall at 24310 76th Ave W with a renewed vision — copy deck) |
| 4 | Meet Our Team intro | Full-width band, 2-col ~45/55: arch-masked `PhotoPlaceholder` left; display-italic eyebrow + H2 + paragraph + button right | `bg-navy` | "Meet" (italic) + "Our Team"; paragraph on GKA educators for ages 3–6; button anchors to grid below (#team) |
| 5 | Team card grid | 3-col card grid (degrades to 1–2 rows): circular headshot `PhotoPlaceholder` (GKA emblem fallback), caps name, italic role, Read Bio expander | cream | Director bio + headshot (pending intake) first; staff cards added as hired — data-driven component |
| 6 | Programs teaser (mirrored) | Mirror of #4: text left (eyebrow + H2 + paragraph + button), large circular emblem badge right; curved exit | `bg-brand-dark` | Repurposed board slot → Full-Time 8–5 and Half-Day AM/PM teaser with transparent-tuition mention; button → /programs |
| 7 | Letter from the Director | 2-col ~60/40: display-italic eyebrow ("A note from"), H2, 3–4 paragraph letter with inline Book-a-Tour link, signature; rounded portrait `PhotoPlaceholder` + caption right | cream (textured) | Director welcome letter in collateral voice; closing "We are honored to welcome your family into our community…" |
| 8 | Quote + CTA band | Full-bleed photo band, curved top; centered display-italic quote + attribution + 2 buttons | photo + navy overlay | Montessori quote or `site.tagline`; buttons: "Book a Tour" (primary) + "See Tuition" (secondary) |
| 9 | Footer | Global spec | `bg-navy` | — |

---

## /programs — Programs  *(from captures: childrens-house + extended-day; one page: Full-Time 8–5 + Half-Day AM/PM + tuition tables)*

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Hero | Full-bleed `PhotoPlaceholder` + overlay; H1 serif line + display-italic second line, caps eyebrow, Book-a-Tour button; curved band cut at bottom | photo + navy overlay | H1 "One classroom community, flexible schedules" + italic accent line; eyebrow: `site.ages` · Edmonds, WA |
| 2 | Curriculum intro split | 2-col ~40/60: arch-masked `PhotoPlaceholder` bleeding left with circular badge overlay; H2 + 2 paragraphs right | `bg-brand-dark` | Copy-deck Programs intro: same curriculum for every schedule — `learningAreas` list woven into copy |
| 3 | Full-Time section (8–5) | Centered H2; feature card(s): rounded `PhotoPlaceholder`, caps title, italic time range, paragraph, "More information" accordion; **`TuitionTable` (fullTime)** below; centered CTA button | `bg-navy` | `tuition.fullTime` (hours + 3 schedule/price rows); accordion holds daily-rhythm detail; CTA "Book a Tour" |
| 4 | Half-Day section (AM/PM) | Mirror on light: centered H2; 2-card grid — card AM + card PM (photo, caps title, italic hours, paragraph, accordion); **`TuitionTable` (halfDay)** below; centered CTA | cream | `tuition.halfDay` (3 schedule/price rows); CTA "Book a Tour" |
| 5 | Good-to-know strip | Compact band under the tables: caps label + bullet row | `bg-tint-cyan` | `tuition.notes` verbatim (snacks included, packed lunch, DSHS accepted, sibling discounts, registration fee) |
| 6 | A Day at GKA (zigzag rows) | 3 alternating 2-col rows (image/text zigzag), rounded `PhotoPlaceholder` ~40%, caps mini-heading + short paragraph each | cream | Daily rhythm: Morning work cycle / Lunch, rest & outdoor play / Afternoon exploration — Montessori vocabulary explained per voice.md |
| 7 | Testimonial band | Wave edges; long quote left, caps attribution, watermark + display-italic label right | `bg-tint` | Parent-quote slot (founder quote until testimonials exist) |
| 8 | Final CTA band | Full-bleed photo band, centered H2 + italic line + button | photo + navy overlay | "Not sure which schedule fits? Book a tour and we'll help you choose." → Book a Tour |
| 9 | Footer | Global spec | `bg-navy` | — |

---

## /montessori — Montessori Method  *(from capture: montessori-philosophy)*

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Hero quote banner | Full-bleed color band (no photo), centered ~60% column: H1 + display-italic subline; oversized watermark; wave bottom | `bg-navy` (watermark) | H1 "What Montessori looks like at GKA" + lead sentence (copy deck Our Approach) |
| 2 | Who / What intro | 2-col ~45/55: two stacked Q blocks left (caps heading + paragraph each); rounded `PhotoPlaceholder` + ring-circle overlap right; diagonal exit | cream | "Who was Maria Montessori?" / "What is Montessori?" written for first-time Montessori parents |
| 3 | Trust strip | Shallow band, 2-col ~30/70: circular GKA emblem left, one-line heading + paragraph right; angled edges | `bg-brand` (navy text) | Trained Montessori guides · transparent published tuition · WA licensing (hold license claim until verified) |
| 4 | 3-card pillars grid | Centered H2 + display-italic subhead; 3 cards: rounded `PhotoPlaceholder`, caps title, intro line, bullet list; wave bottom | `bg-tint` | Whole-child pillars: Academic Learning / Personal & Emotional Development / Social Skills — bullets drawn from `learningAreas` + copy-deck one-sentence explainers |
| 5 | Photo divider A | Full-width `PhotoPlaceholder` strip, no text | photo | Wide classroom shot slot |
| 6 | Testimonial carousel | Dark band, wave top; centered quote headline + body + italic attribution; carousel controls | `bg-navy` | Parent-quote slot (carousel grows as reviews arrive) |
| 7 | Environment split | 2-col ~55/45: H2 + 5-item bold-lead bullet list left, rounded `PhotoPlaceholder` right | `bg-brand-dark` | "The GKA Montessori Environment": mixed-age 3–6 classroom, uninterrupted work cycle, hands-on materials, outdoor exploration, self-paced learning |
| 8 | The Guide split (mirrored) | 2-col ~50/50: `PhotoPlaceholder` left with watermark behind; caps eyebrow "THE ROLE OF" + H2 + 2 paragraphs right | cream (watermark) | How GKA guides observe, present lessons individually, and mentor |
| 9 | Photo divider B | Full-width `PhotoPlaceholder` strip | photo | Children-outdoors slot |
| 10 | Closing quote + CTA | Centered 4-line display quote + italic attribution + one button | `bg-brand` (navy text) | Montessori quote or `site.tagline`; button "Book a Tour" → /book-a-tour (template linked onward — GKA converts here) |
| 11 | Footer | Global spec | `bg-navy` | — |

---

## /classrooms — Classrooms  *(from capture: classrooms)*

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Hero | Full-bleed `PhotoPlaceholder` ~90vh, centered 2-line H1 + CTA button; curved cream sweep | photo + navy overlay | H1 classrooms variant of the tagline; CTA "Book a Tour" |
| 2 | Video/intro | Centered ~60% column: 16:9 media slot (`PhotoPlaceholder` until a walkthrough video exists) + 2 short paragraphs | cream | Prepared-environment intro for ages 3–6 |
| 3 | 3-column icon highlights | Centered heading; 3 columns: outline icon (GKA leaf/tree motif), bold claim + support line | `bg-navy` | Mixed-age 3–6 classroom / Trained Montessori guides / Uninterrupted work cycles |
| 4 | Jump-ahead anchor bar | Slim band: caps label + 3 pill anchor buttons | `bg-tint-cyan` (brand pills) | Anchors: Our Classroom · Outdoor Play · Day to Day |
| 5 | Facility feature A — Our Classroom | 2-col ~45/55: eyebrow + H2 + 2 paragraphs + button left, landscape `PhotoPlaceholder` right; 4-photo gallery grid below; tonal GKA chevron/leaf pattern | `bg-brand-dark` (pattern) | The prepared environment: child-scale furniture, Montessori materials; CTA "Book a Tour" |
| 6 | 6-item features grid | Centered H2; 2×3 text-only grid (caps subhead + 2-line paragraph); centered button | cream | Classroom features: child-led learning, order & calm, mixed-age community, quality materials, child-scale spaces, hands-on work |
| 7 | Testimonial band 1 | Full-width centered quote carousel with side arrows, bold key phrases, italic attribution | `bg-brand` (navy text) | Parent-quote slot (launch with one quote) |
| 8 | Facility feature B — Outdoor Play | 2-col: eyebrow + H2 + 2 paragraphs + Read More accordion (amenity bullet list) left; `PhotoPlaceholder` right | `bg-tint` | Edmonds outdoor space; accordion lists play-yard features |
| 9 | Pull-quote banner | Centered display quote + caps attribution, no imagery | `bg-navy` | Maria Montessori quote (public domain) |
| 10 | Facility feature C — third highlight | 2-col, shorter: eyebrow + H2 + 1 paragraph left; `PhotoPlaceholder` right | `bg-tint` | Indoor movement / practical-life corner (rainy-day PNW angle) |
| 11 | Testimonial band 2 (post-launch slot) | Centered multi-paragraph quote carousel | `bg-tint-cyan` | Deferred until more parent quotes exist — build the slot, ship hidden/empty at launch |
| 12 | Final CTA banner | Full-bleed photo band; centered H2 + caps subhead + button | photo + navy overlay | H2: Full-Time (8–5) and Half-Day AM/PM for ages 3–6; subhead: transparent tuition invite; CTA "Book a Tour" |
| 13 | Footer | Global spec | `bg-navy` | — |

---

## /admissions — Tuition & Admissions  *(from capture: admissions)*

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Hero | Full-bleed `PhotoPlaceholder` + overlay, centered: display-italic eyebrow, 2-line H1, CTA anchoring to on-page form; curved arc bottom | photo + navy overlay | H1 "Transparent tuition, simple enrollment"; italic eyebrow in "take your first steps" register, GKA voice; CTA "Book a Tour" → #book-a-tour |
| 2 | Welcome intro band | Arc top; 2-col ~1/3–2/3: circular emblem badge left, display-italic H2 + short paragraph with inline form link right | `bg-tint-cyan` | 2–3 sentence welcome for new families (ages 3–6, Edmonds) with inline "book a tour" link |
| 3 | Things to Know (fees & policies) | Centered eyebrow + H2; 2 text columns: bullet quick-facts left, italic statement right; arc bottom | `bg-brand` (navy text) | Fees & policies from copy deck: registration fee · wait-list fee · tuition due 1st–5th · no refunds for absences/closures · late pick-up policy; right column: non-discrimination + licensing statement (license number pending — placeholder) |
| 4 | How to Enroll (step grid) | Centered eyebrow; **static numbered step grid** (display-numbered heading + paragraph per step) — not the template's carousel; centered CTA | `bg-navy` (subtle line pattern) | Copy-deck enrollment steps: 1 Book a tour · 2 Complete the registration packet · 3 Submit immunization records (WA DCYF requirement) · 4 Reserve your start date; CTA → #book-a-tour |
| 5 | Tuition tables | 2-col: **`TuitionTable` fullTime + halfDay** rendered on-page (not a PDF) left; assistance/offers column right (heading + paragraph + list) | cream | `tuition` tables + `tuition.notes`; right column: DSHS subsidy accepted, sibling discounts — "ask at your tour" |
| 6 | FAQ | Centered H2 + accordion list (pattern borrowed from the template's card accordions) | `bg-tint` | Copy-deck FAQ seeds: DSHS subsidy? · Sibling discount? · What does my child bring? — grows over time |
| 7 | Book-a-Tour form band (#book-a-tour) | Wave top; display-italic eyebrow + H2 left-aligned; **shared `TourForm`** ~50% width; submit button; spam-protection notice | `bg-tint` | Same `TourForm` as /contact (speed-to-lead: instant SMS/call on submit); every CTA on the page anchors here |
| 8 | Footer | Global spec | `bg-navy` | — |

---

## /contact — Contact  *(from capture: contact)*

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Page-title hero band | Short full-bleed color band (no photo), single H1; wave divider into the body band | `bg-navy` → wave → `bg-tint` | H1 get-in-touch line in GKA voice; small subline `site.tagline` |
| 2 | Info rail (left ~40%) | Stacked: brand caps subhead, tour-instructions paragraph, alternate-contact paragraph with tel/mailto links, address block, hours; below: offset collage — watermark logo stamp over 2 rounded `PhotoPlaceholder`s (landscape + overlapping portrait); map-embed slot (GBP link once claimed) | `bg-tint` (shared band) | Speed-to-lead promise ("we'll text you within a minute" — not "two business days"); `site.phone`, email (pending), `site.address.full`, `site.hours` |
| 3 | Tour form (right ~55%) | Single-column stacked form, Name row 2-up; labels above fields; solid submit; columns stack on mobile | `bg-tint` (cream inputs, brand button) | **`TourForm`**: parent first/last name*, email*, phone* (required — speed-to-lead SMS), child's name, child's birthdate, desired start date, schedule dropdown (Full-Time 8–5 / Half-Day AM / Half-Day PM / Not sure yet), preferred tour time radios, "How did you hear about us?", message, consent line, submit "Book a Tour", spam protection |
| 4 | Footer | Global spec | `bg-navy` | — |

---

## /book-a-tour — Tour Funnel LP  *(from captures: contact form section + home hero/CTA patterns; standalone funnel page)*

No site nav, no footer link columns — minimal escape hatches (copy deck).

| # | Section | Layout pattern | Band | Content |
|---|---|---|---|---|
| 1 | Minimal header | Logo-only bar (GKA logo, unlinked), no nav, no CTA | transparent over hero | Logo light variant |
| 2 | Hero + form (above fold) | Full-bleed `PhotoPlaceholder` + navy overlay; 2-col: H1 + sub left, **short-form card** right (`bg-cream` rounded card); curved bottom; stacks form-first on mobile | photo + navy overlay | H1 "Come see GKA Montessori for yourself" + sub (copy deck); form: Parent name · Phone · Child's age · Desired start date → button "Book My Tour"; consent line "By submitting, you agree we may text you… Reply STOP to opt out." |
| 3 | Trust row | Slim centered chip/label row | cream | Ages 3–6 · DSHS accepted · Opening this fall (add "WA DCYF-licensed" chip only after license verified) |
| 4 | What happens next (3 steps) | 3-up numbered columns (display number + caps title + line) | `bg-tint` | Book a tour → Meet us & see the classroom → Reserve your child's spot; note the instant text follow-up |
| 5 | Closing quote + CTA | Centered display-italic quote + button anchoring back to the form | `bg-navy` | Montessori quote or `site.tagline`; button "Book My Tour" → #form |
| 6 | Minimal footer | Single NAP line + copyright, no link columns | `bg-navy` | `site.legalName` · `site.address.full` · `site.phone` · © year |

Thank-you state (post-submit): "You're on the list — we'll text you within a minute. Want to grab a time right now?" → booking-platform link (platform TBD in intake).

---

## Decisions log

1. **Header CTA added** — every capture flags that the template has no header CTA; GKA adds a solid Book-a-Tour button as the last nav slot (primary conversion).
2. **Flat nav, no dropdowns** — the template used 2 dropdown folders across 8+ pages; GKA's 7-route sitemap doesn't need them. Program sub-pages collapse into one /programs page with anchors.
3. **Script font replaced** — the template's handwritten accent face becomes Fraunces (`font-display`) italic; no third font loaded.
4. **Enrollment carousel → static grid** — the admissions capture's 6-step carousel hides 4 of 6 steps; GKA renders its 4 copy-deck steps as a static grid.
5. **Tuition on-page, never PDF** — the template links a tuition PDF; GKA renders `TuitionTable` from `tuition` on /programs and /admissions (transparent-tuition differentiator, voice.md rule).
6. **Terracotta band mapping split** — per the color rules terracotta → `brand`, applied to buttons, accents, and short-copy bands (navy text for contrast); long-copy bands that were terracotta/sage in the template go to light surfaces (`tint`/`tint-cyan`) for readability.
7. **Mustard/blush bands → `tint-cyan`** — the brand profile defines cyanTint as the "surface alt"; it takes the template's mustard/blush alternate-surface role. Gold accents → `lime`, sparingly.
8. **Team page merged into /about** — the team capture's card grid becomes About section #5 (data-driven `StaffCard` grid, emblem-placeholder fallback, Read Bio expander), preceded by the about capture's "Meet Our Team" band as its intro; the team page's join-the-team band is dropped (About's quote+CTA band carries conversion).
9. **About board-of-directors slot repurposed** — GKA has no board; the mirrored band becomes a Programs teaser.
10. **`TourForm` is one shared component** on /contact, /admissions (#book-a-tour), and /book-a-tour (short variant) — all wired to the speed-to-lead automation; phone required; response promise is "text within a minute", never "two business days". Include spam protection equivalent to the template's captcha.
11. **Licensing claims held** — WA DCYF license chip/badge and license-number statement render as placeholders until intake verifies the number (copy-deck footnote).
12. **Classrooms testimonial band 2 deferred** — a brand-new school won't have two quote carousels at launch; the slot is specced but ships empty/hidden.
13. **Home programs grid is 3 cards** (not the template's 2×2) — matches GKA's actual offer (Full-Time, Half-Day AM, Half-Day PM); grid collapses gracefully per the capture note.
14. **Home accreditation band repurposed as Transparent Tuition band** — per the home capture's own recommendation: GKA has no accreditations yet, and published tuition is the stronger conversion differentiator; the how-it-works 3 steps live in this band's paragraph slot.
15. **Template quirks dropped everywhere** — Parent Hub, Plant Sale, cart icon, fax line, photography/design credit lines (replaced with GKA legal bar).
16. **Photo dividers and all image slots use `PhotoPlaceholder`** — including slots the captures confirmed in DOM but that lazy-loaded blank (childrens-house gallery, montessori dividers, classrooms feature photos).
