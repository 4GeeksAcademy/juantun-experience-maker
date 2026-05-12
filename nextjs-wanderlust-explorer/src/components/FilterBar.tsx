"use client";

type FilterBarProps = {
  category: string;
  city: string;
  maxPrice: string;
  minRating: string;
  onCategoryChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onMinRatingChange: (value: string) => void;
  onClear: () => void;
};

const categories = ["", "Culture", "Adventure", "Food", "Nature", "Wellness"];
const cities = [
  "",
  "Barcelona",
  "Kyoto",
  "Marrakech",
  "Medellin",
  "Lisbon",
  "Istanbul",
  "Cusco",
  "Reykjavik",
  "Bali",
  "Cape Town",
];

export function FilterBar({
  category,
  city,
  maxPrice,
  minRating,
  onCategoryChange,
  onCityChange,
  onMaxPriceChange,
  onMinRatingChange,
  onClear,
}: FilterBarProps) {
  return (
    <div className="grid grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
      <label className="text-sm font-medium text-slate-700">
        Categoría
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800"
        >
          {categories.map((value) => (
            <option key={value || "all"} value={value}>
              {value || "Todas"}
            </option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-slate-700">
        Ciudad
        <select
          value={city}
          onChange={(event) => onCityChange(event.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800"
        >
          {cities.map((value) => (
            <option key={value || "all"} value={value}>
              {value || "Todas"}
            </option>
          ))}
        </select>
      </label>

      <label className="text-sm font-medium text-slate-700">
        Precio máximo
        <input
          type="number"
          min={0}
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(event.target.value)}
          placeholder="Ej: 70"
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800"
        />
      </label>

      <label className="text-sm font-medium text-slate-700">
        Rating mínimo
        <select
          value={minRating}
          onChange={(event) => onMinRatingChange(event.target.value)}
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-800"
        >
          <option value="">Todos</option>
          <option value="3.5">3.5+</option>
          <option value="4">4.0+</option>
          <option value="4.5">4.5+</option>
        </select>
      </label>

      <div className="flex items-end">
        <button
          type="button"
          onClick={onClear}
          className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
