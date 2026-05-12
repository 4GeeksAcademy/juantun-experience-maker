import { Suspense } from "react";
import { ExperiencesClientPage } from "@/components/ExperiencesClientPage";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-600 shadow-sm">
            Cargando experiencias...
          </section>
        </main>
      }
    >
      <ExperiencesClientPage />
    </Suspense>
  );
}
