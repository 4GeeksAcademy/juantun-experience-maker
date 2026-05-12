import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-amber-50 via-orange-50 to-cyan-50 p-8 shadow-sm sm:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
            Wanderlust Labs
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Explora experiencias de viaje con estilo, rapidez y filtros inteligentes.
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Descubre actividades autenticas, guarda tus favoritas y encuentra
            planes perfectos para cada ciudad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/experiences"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Explorar ahora
            </Link>
            <Link
              href="/favorites"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
            >
              Ver favoritos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
