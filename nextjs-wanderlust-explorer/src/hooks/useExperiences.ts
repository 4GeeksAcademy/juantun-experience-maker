import { useMemo } from "react";
import { experiences } from "@/data/experiences";
import { Experience, ExperienceFilters } from "@/types/experience";

function matchesSearch(title: string, term: string): boolean {
  if (!term.trim()) {
    return true;
  }

  try {
    return new RegExp(term, "i").test(title);
  } catch {
    return title.toLowerCase().includes(term.toLowerCase());
  }
}

export function useExperiences(filters: ExperienceFilters): Experience[] {
  return useMemo(() => {
    return experiences.filter((experience) => {
      const searchOk = matchesSearch(experience.title, filters.search);
      const categoryOk = filters.category
        ? experience.category === filters.category
        : true;
      const cityOk = filters.city
        ? experience.city.toLowerCase() === filters.city.toLowerCase()
        : true;
      const priceOk = filters.maxPrice
        ? experience.price <= Number(filters.maxPrice)
        : true;
      const ratingOk = filters.minRating
        ? experience.rating >= Number(filters.minRating)
        : true;

      return searchOk && categoryOk && cityOk && priceOk && ratingOk;
    });
  }, [filters]);
}
