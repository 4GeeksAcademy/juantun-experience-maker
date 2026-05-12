"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();

  const experience = experiences.find((item) => item.id === params.id);

  if (!experience) {
    notFound();
  }

  const favorite = isFavorite(experience.id);

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-5">
        <Link href="/experiences" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          ← Volver a experiencias
        </Link>
      </div>

      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="h-80 w-full sm:h-96">
          <Image
            src={experience.image}
            alt={experience.title}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-5 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-teal-700">{experience.category}</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
                {experience.title}
              </h1>
              <p className="mt-2 text-slate-600">
                {experience.city}, {experience.country}
              </p>
            </div>

            <button
              type="button"
              onClick={() => toggleFavorite(experience.id)}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              {favorite ? "♥ En favoritos" : "♡ Guardar en favoritos"}
            </button>
          </div>

          <p className="max-w-3xl leading-7 text-slate-700">{experience.description}</p>

          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-slate-50 p-4 sm:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Precio</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">${experience.price}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Rating</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">{experience.rating.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Duración</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">{experience.durationHours}h</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">ID</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">#{experience.id}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
