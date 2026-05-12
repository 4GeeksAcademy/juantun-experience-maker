import { Experience, ExperienceCategory } from "@/types/experience";

const categories: ExperienceCategory[] = [
  "Culture",
  "Adventure",
  "Food",
  "Nature",
  "Wellness",
];

const cities = [
  { city: "Barcelona", country: "Spain" },
  { city: "Kyoto", country: "Japan" },
  { city: "Marrakech", country: "Morocco" },
  { city: "Medellin", country: "Colombia" },
  { city: "Lisbon", country: "Portugal" },
  { city: "Istanbul", country: "Turkey" },
  { city: "Cusco", country: "Peru" },
  { city: "Reykjavik", country: "Iceland" },
  { city: "Bali", country: "Indonesia" },
  { city: "Cape Town", country: "South Africa" },
];

const titlesByCategory: Record<ExperienceCategory, string[]> = {
  Culture: [
    "Hidden Stories Walking Tour",
    "Local Artisan Workshop",
    "Historic Quarter Deep Dive",
    "Architecture and Legends Route",
  ],
  Adventure: [
    "Sunrise Cliff Trek",
    "Canyon Biking Escape",
    "Coastal Kayak Quest",
    "Jungle Zipline Ride",
  ],
  Food: [
    "Street Food Safari",
    "Chef-Led Market Tour",
    "Sunset Tapas Crawl",
    "Farm to Table Cooking Lab",
  ],
  Nature: [
    "Waterfall and Forest Trail",
    "Volcanic Landscape Expedition",
    "Wild Coast Photo Journey",
    "National Park Stargazing",
  ],
  Wellness: [
    "Mountain Yoga Morning",
    "Hot Spring Ritual",
    "Mindful Breathwork Session",
    "Ocean Sound Healing",
  ],
};

const descriptors = [
  "with local experts",
  "for curious travelers",
  "off the typical tourist track",
  "with small groups",
  "including hidden gems",
  "with authentic local flavor",
];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const id = String(index + 1);
  const category = categories[index % categories.length];
  const location = cities[index % cities.length];
  const titleBase = titlesByCategory[category][index % titlesByCategory[category].length];
  const descriptor = descriptors[index % descriptors.length];
  const price = 25 + ((index * 7) % 120);
  const rating = Number((3.8 + ((index % 13) * 0.1)).toFixed(1));
  const durationHours = 2 + (index % 7);

  return {
    id,
    title: `${titleBase} ${descriptor}`,
    category,
    city: location.city,
    country: location.country,
    price,
    rating: Math.min(rating, 5),
    durationHours,
    image: `https://picsum.photos/seed/wanderlust-${id}/1200/800`,
    description:
      "Discover a thoughtfully curated experience designed to connect you with the local culture, people, and landscapes in a memorable way.",
  };
});
