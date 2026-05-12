"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FilterBar } from "@/components/FilterBar";
import { SearchBar } from "@/components/SearchBar";
import { useExperiences } from "@/hooks/useExperiences";

export function ExperiencesClientPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const searchFromUrl = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const city = searchParams.get("city") ?? "";
  const maxPrice = searchParams.get("maxPrice") ?? "";
  const minRating = searchParams.get("minRating") ?? "";

  const filtered = useExperiences({
    search: searchFromUrl,
    category,
    city,
    maxPrice,
    minRating,
  });

  const updateQueryParams = (next: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(next).forEach(([key, value]) => {
      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  const activeFiltersCount = useMemo(() => {
    return [searchFromUrl, category, city, maxPrice, minRating].filter(Boolean)
      .length;
  }, [searchFromUrl, category, city, maxPrice, minRating]);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Explora experiencias unicas
        </h1>
        <p className="mt-2 text-slate-600">
          Busca, filtra y encuentra tu proximo plan ideal.
        </p>
      </section>

      <section className="space-y-4">
        <SearchBar
          value={searchFromUrl}
          onChange={(value) => {
            updateQueryParams({ search: value });
          }}
        />

        <FilterBar
          category={category}
          city={city}
          maxPrice={maxPrice}
          minRating={minRating}
          onCategoryChange={(value) => updateQueryParams({ category: value })}
          onCityChange={(value) => updateQueryParams({ city: value })}
          onMaxPriceChange={(value) => updateQueryParams({ maxPrice: value })}
          onMinRatingChange={(value) => updateQueryParams({ minRating: value })}
          onClear={() => {
            router.replace(pathname, { scroll: false });
          }}
        />
      </section>

      <section className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-600">
          {filtered.length} resultado(s) · {activeFiltersCount} filtro(s) activo(s)
        </p>
      </section>

      <section className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </section>

      {filtered.length === 0 && (
        <section className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          No hay resultados para la combinacion de filtros actual.
        </section>
      )}
    </main>
  );
}
