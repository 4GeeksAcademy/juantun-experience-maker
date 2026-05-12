"use client";

import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/types/experience";
import { useFavorites } from "@/context/FavoritesContext";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(experience.id);

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => toggleFavorite(experience.id)}
          aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1.5 text-lg shadow-sm transition hover:bg-white"
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{experience.category}</span>
          <span>★ {experience.rating.toFixed(1)}</span>
        </div>

        <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
          {experience.title}
        </h3>

        <p className="text-sm text-slate-600">
          {experience.city}, {experience.country} · {experience.durationHours}h
        </p>

        <div className="flex items-center justify-between pt-1">
          <p className="text-sm text-slate-700">
            <span className="text-base font-bold text-slate-900">${experience.price}</span>
            <span> / persona</span>
          </p>

          <Link
            href={`/experiences/${experience.id}`}
            className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900 hover:text-white"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}