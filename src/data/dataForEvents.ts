export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: "festival" | "music" | "culture" | "film";
}

export const events: Event[] = [
  {
    id: 1,
    title: "Yerevan Wine Days",
    date: "2026-06-05",
    location: "Yerevan, Armenia",
    category: "festival",
    description:
      "One of Armenia’s most popular festivals celebrating local winemaking, gastronomy, and culture with live music and tastings in the heart of Yerevan.",
    image:
      "https://images.unsplash.com/photo-1528823872057-9c018a7a7553",
  },
  {
    id: 2,
    title: "Eurovision Young Musicians 2026",
    date: "2026-06-06",
    location: "Yerevan, Armenia",
    category: "music",
    description:
      "A prestigious classical music competition bringing together young talented musicians from across Europe.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
  },
  {
    id: 3,
    title: "Yerevan Music Festival",
    date: "2026-06-20",
    location: "Yerevan, Armenia",
    category: "music",
    description:
      "An electronic music festival featuring international DJs, live performances, and an energetic summer atmosphere.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063",
  },
  {
    id: 4,
    title: "Golden Apricot International Film Festival",
    date: "2026-07-12",
    location: "Yerevan, Armenia",
    category: "film",
    description:
      "An international film festival showcasing Armenian and global cinema with screenings, discussions, and awards.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
  },
  {
    id: 5,
    title: "Concours Mondial de Bruxelles (Wine Competition)",
    date: "2026-05-21",
    location: "Yerevan, Armenia",
    category: "culture",
    description:
      "A world-renowned wine competition hosted in Armenia, bringing together expert judges and winemakers from around the globe.",
    image:
      "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
  },
];
