export interface Place {
  id: number;
  title: string;
  location: string; // <-- new field
  image: string;
  description: string;
  link: string;
}

export const popularPlaces: Place[] = [
  {
    id: 1,
    title: "Angkor Wat",
    location: "Siem Reap",
    image: "/image/Angkor-Wat.jpg",
    description: "This place is nice.",
    link: "/details/angkor-wat",
  },
  {
    id: 2,
    title: "Royal Palace",
    location: "Phnom Penh",
    image: "/image/royal-palace-in-phnom-penh.jpg",
    description: "This place is nice.",
    link: "/details/royal-palace",
  },
  {
    id: 3,
    title: "National Museum",
    location: "Phnom Penh",
    image: "/image/national_museum.jpg",
    description: "This place is nice.",
    link: "/details/tonle-sap",
  },
  {
    id: 4,
    title: "Wat Phnom",
    location: "Phnom Penh",
    image: "/image/wat_phnom.jpg",
    description: "This place is nice.",
    link: "/details/wat-phnom",
  },
  {
    id: 5,
    title: "Bayon Temple",
    location: "Siem Reap",
    image: "/image/bayon-temple.jpg",
    description: "This place is nice.",
    link: "/details/phnom-penh-riverfront",
  },
  {
    id: 6,
    title: "Preah Vihear Temple",
    location: "Preah Vihear",
    image: "/image/pvh.jpg",
    description: "This place is nice.",
    link: "/details/phnom-penh-riverfront",
  },
  {
    id: 7,
    title: "Koh Ker Temple",
    location: "Preah Vihear",
    image: "/image/pvh.jpg",
    description: "This place is nice.",
    link: "/details/phnom-penh-riverfront",
  },
];
