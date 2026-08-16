export const site = {
  name: "GKA Montessori School",
  legalName: "Great Kids Academy Montessori",
  tagline: "Nurturing Independent Minds!",
  taglineAlt: "Nurturing Independence. Inspiring Lifelong Learning.",
  description:
    "Montessori-based early learning for children ages 2–6 in Edmonds, WA. A warm, engaging environment where children learn at their own pace.",
  address: {
    street: "24310 76th Ave W",
    city: "Edmonds",
    state: "WA",
    zip: "98026",
    full: "24310 76th Ave W, Edmonds, WA 98026",
  },
  phone: "(425) 245-8679",
  phoneHref: "tel:+14252458679",
  hours: "Monday–Friday, 8:00 AM – 5:00 PM",
  ages: "Ages 2–6",
} as const;

export const tuition = {
  fullTime: {
    label: "Full-Time",
    hours: "8:00 AM – 5:00 PM",
    options: [
      { schedule: "Monday–Friday", price: 2100 },
      { schedule: "4 days/week", price: 1780 },
      { schedule: "3 days/week", price: 1580 },
    ],
  },
  halfDay: {
    label: "Half-Day",
    options: [
      { schedule: "Mornings, Mon–Fri · 8:00–12:00", price: 1250 },
      { schedule: "Afternoons, 4 days · 1:00–5:00", price: 1050 },
      { schedule: "Afternoons, 3 days · 1:00–5:00", price: 850 },
    ],
  },
  notes: [
    "Snacks included in tuition",
    "Full-time families provide a packed lunch",
    "DSHS subsidy accepted (if applicable)",
    "Sibling discounts may be available",
    "$200 one-time registration fee",
  ],
} as const;

export const learningAreas = [
  "Practical Life",
  "Sensorial",
  "Language Development",
  "Mathematics",
  "Cultural Studies",
  "Art & Music",
  "Social & Emotional Learning",
] as const;
