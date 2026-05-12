"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteExperiences = experiences.filter((exp) => favorites.includes(exp.id));

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Tus favoritos</h1>
        <p className="mt-2 text-slate-600">
          Guarda experiencias y recupéralas rápidamente.
        </p>
      </section>

      {favoriteExperiences.length === 0 ? (
        <section className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          <p>Aún no tienes experiencias favoritas.</p>
          <Link
            href="/experiences"
            className="mt-4 inline-block rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Explorar experiencias
          </Link>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </section>
      )}
    </main>
  );
}
