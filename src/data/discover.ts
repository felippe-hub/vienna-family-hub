/**
 * Mock data for Kindex Discover.
 *
 * Curated activities and events for Vienna families. This is a static
 * frontend dataset — when a real backend is wired up, swap this module
 * for a fetch/loader. Keep the shape stable.
 */

export type DiscoverCategory =
  | "Sports & Movement"
  | "Music & Theater"
  | "Playgrounds & Parks"
  | "Education & Learning"
  | "Festivals & Celebrations"
  | "Markets & Fairs"
  | "Holidays & Workshops"
  | "Creative & Arts";

export type QuickFilter =
  | "weekend"
  | "birthday"
  | "afterschool"
  | "indoor"
  | "today";

export type DiscoverKind = "activity" | "event";

export interface DiscoverItem {
  id: string;
  kind: DiscoverKind;
  title: string;
  category: DiscoverCategory;
  description: string;
  schedule: string;
  ageRange: string;
  district: string;
  organizer?: string;
  price?: "Free" | string;
  // Optional event-specific fields
  date?: string; // ISO date for events
  // Tagging for quick filters
  tags: QuickFilter[];
  // Soft accent color from brand palette to give cards a tonal lift
  accent: "coral" | "orange" | "yellow";
}

export const discoverItems: DiscoverItem[] = [
  {
    id: "miniballett",
    kind: "activity",
    title: "Miniballett",
    category: "Sports & Movement",
    description:
      "Der ideale Beginn für tanzinteressierte Kinder, die Balletttechnik erlernen möchten.",
    schedule: "Wöchentlich",
    ageRange: "2–6 Jahre",
    district: "9. Bezirk",
    organizer: "KREADANCE",
    tags: ["afterschool", "indoor"],
    accent: "coral",
  },
  {
    id: "charts-dance-club",
    kind: "activity",
    title: "Charts Dance Club",
    category: "Sports & Movement",
    description:
      "Choreographien zu aktuellen Lieblings-Charts mit Moves aus Videoclips, HipHop und urbanen Tanzstilen.",
    schedule: "Mo, 15:30–17:30",
    ageRange: "6–17 Jahre",
    district: "9. Bezirk",
    organizer: "KREADANCE",
    tags: ["afterschool", "indoor"],
    accent: "orange",
  },
  {
    id: "musical-showdance",
    kind: "activity",
    title: "Musical Showdance",
    category: "Creative & Arts",
    description:
      "Tanzen, Singen, Schauspielen in der Erarbeitung verschiedener Musical-Szenen.",
    schedule: "Lt. Stundenplan",
    ageRange: "6–17 Jahre",
    district: "9. Bezirk",
    organizer: "KREADANCE",
    tags: ["afterschool", "indoor"],
    accent: "yellow",
  },
  {
    id: "wasserspielplatz-wasserturm",
    kind: "activity",
    title: "Wasserspielplatz Wasserturm",
    category: "Playgrounds & Parks",
    description: "Spielplatz mit Wasserspaß für heiße Sommertage.",
    schedule: "Mai–Sept",
    ageRange: "2–10 Jahre",
    district: "10. Bezirk",
    tags: ["weekend"],
    accent: "coral",
  },
  {
    id: "kinderoper-muth",
    kind: "activity",
    title: "Kinderoper im MuTh",
    category: "Music & Theater",
    description: "Oper speziell für junge Zuschauer in einer modernen Spielstätte.",
    schedule: "Lt. Spielplan",
    ageRange: "4–12 Jahre",
    district: "2. Bezirk",
    tags: ["weekend", "indoor"],
    accent: "orange",
  },
  {
    id: "waldspielplatz-schwarzenbergpark",
    kind: "activity",
    title: "Waldspielplatz Schwarzenbergpark",
    category: "Playgrounds & Parks",
    description: "Naturspielplatz im Wald mit Kletterstrukturen aus Holz.",
    schedule: "Immer offen",
    ageRange: "2–12 Jahre",
    district: "17. Bezirk",
    tags: ["weekend"],
    accent: "yellow",
  },
  {
    id: "haus-des-meeres",
    kind: "activity",
    title: "Haus des Meeres",
    category: "Education & Learning",
    description:
      "Aquarium und Tropenhaus mitten in Wien — perfekt für regnerische Tage.",
    schedule: "Täglich 9–20 Uhr",
    ageRange: "Alle Altersgruppen",
    district: "6. Bezirk",
    price: "€",
    tags: ["indoor", "weekend"],
    accent: "coral",
  },
  {
    id: "zoom-kindermuseum",
    kind: "activity",
    title: "ZOOM Kindermuseum",
    category: "Education & Learning",
    description:
      "Hands-on Mitmach-Museum, in dem Kinder spielerisch lernen und entdecken.",
    schedule: "Di–So",
    ageRange: "8 Monate – 14 Jahre",
    district: "7. Bezirk",
    price: "€",
    tags: ["indoor", "birthday", "weekend"],
    accent: "orange",
  },
  {
    id: "kletterhalle-wien",
    kind: "activity",
    title: "Kinderklettern Kletterhalle Wien",
    category: "Sports & Movement",
    description:
      "Sicher betreute Kletterkurse für Kinder in einer der größten Hallen Europas.",
    schedule: "Wochenkurse",
    ageRange: "5–14 Jahre",
    district: "22. Bezirk",
    tags: ["afterschool", "indoor", "birthday"],
    accent: "yellow",
  },
  {
    id: "feuerwehr-tag",
    kind: "event",
    title: "Tag der offenen Tür — Feuerwehr",
    category: "Education & Learning",
    description: "Feuerwehr hautnah erleben mit Vorführungen und Mitmachstationen.",
    schedule: "Sa, 10–17 Uhr",
    ageRange: "3+ Jahre",
    district: "1. Bezirk",
    organizer: "Feuerwache Am Hof",
    date: "2026-05-03",
    price: "Free",
    tags: ["weekend"],
    accent: "coral",
  },
  {
    id: "kindersommerfest-prater",
    kind: "event",
    title: "Kindersommerfest Prater",
    category: "Festivals & Celebrations",
    description: "Großes Sommerfest für Familien mit Spielen und Musik.",
    schedule: "Ganzer Tag",
    ageRange: "Alle Altersgruppen",
    district: "2. Bezirk",
    organizer: "Wiener Prater",
    date: "2026-06-19",
    tags: ["weekend"],
    accent: "orange",
  },
  {
    id: "donauinselfest-kids",
    kind: "event",
    title: "Donauinselfest Kinderprogramm",
    category: "Festivals & Celebrations",
    description: "Europas größtes Open-Air-Festival mit eigenem Kinderbereich.",
    schedule: "3 Tage",
    ageRange: "Alle Altersgruppen",
    district: "Donauinsel",
    date: "2026-06-25",
    price: "Free",
    tags: ["weekend"],
    accent: "yellow",
  },
  {
    id: "wiener-ferienspiel",
    kind: "event",
    title: "Wiener Ferienspiel",
    category: "Holidays & Workshops",
    description: "Kostenloses Sommerprogramm für Kinder in ganz Wien.",
    schedule: "Sommerferien",
    ageRange: "6–13 Jahre",
    district: "Wien gesamt",
    date: "2026-06-30",
    price: "Free",
    tags: ["weekend", "indoor"],
    accent: "coral",
  },
  {
    id: "puppentheater-stadtpark",
    kind: "event",
    title: "Puppentheater Märchensommer",
    category: "Music & Theater",
    description: "Open-Air Puppentheater mit klassischen Märchen für Kinder.",
    schedule: "Wochenenden",
    ageRange: "3–10 Jahre",
    district: "Stadtpark",
    date: "2026-06-30",
    tags: ["weekend"],
    accent: "orange",
  },
  {
    id: "kinderuni-wien",
    kind: "event",
    title: "Kinderuni Wien",
    category: "Education & Learning",
    description: "Echte Vorlesungen für junge Studierende an der Universität Wien.",
    schedule: "Mehrere Wochen",
    ageRange: "7–12 Jahre",
    district: "1. Bezirk",
    organizer: "Universität Wien",
    date: "2026-07-05",
    price: "Free",
    tags: ["afterschool"],
    accent: "yellow",
  },
  {
    id: "christkindlmarkt-rathaus",
    kind: "event",
    title: "Christkindlmarkt am Rathausplatz",
    category: "Markets & Fairs",
    description: "Weihnachtszauber für die ganze Familie mit Kinderprogramm.",
    schedule: "November–Dezember",
    ageRange: "Alle Altersgruppen",
    district: "1. Bezirk",
    organizer: "Stadt Wien",
    date: "2026-11-14",
    price: "Free",
    tags: ["weekend"],
    accent: "coral",
  },
];

export const allCategories: DiscoverCategory[] = [
  "Sports & Movement",
  "Music & Theater",
  "Playgrounds & Parks",
  "Education & Learning",
  "Festivals & Celebrations",
  "Markets & Fairs",
  "Holidays & Workshops",
  "Creative & Arts",
];

export const quickFilterLabels: Record<QuickFilter, string> = {
  weekend: "This weekend",
  birthday: "Birthday ideas",
  afterschool: "After school",
  indoor: "Rainy day",
  today: "Today",
};
