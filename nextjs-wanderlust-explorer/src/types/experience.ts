export type ExperienceCategory =
  | "Culture"
  | "Adventure"
  | "Food"
  | "Nature"
  | "Wellness";

export type Experience = {
  id: string;
  title: string;
  category: ExperienceCategory;
  city: string;
  country: string;
  price: number;
  rating: number;
  durationHours: number;
  image: string;
  description: string;
};

export type ExperienceFilters = {
  search: string;
  category: string;
  city: string;
  maxPrice: string;
  minRating: string;
};
