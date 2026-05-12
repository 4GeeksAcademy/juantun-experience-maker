export default function ProfilePage() {
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Tu perfil</h1>
        <p className="mt-2 text-slate-600">
          Aquí puedes mostrar próximamente preferencias de viaje, historial de reservas y recomendaciones personalizadas.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <article className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Preferencias</p>
            <p className="mt-2 text-slate-700">Aventura, comida local y experiencias culturales.</p>
          </article>

          <article className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs uppercase tracking-wide text-slate-500">Próximo viaje</p>
            <p className="mt-2 text-slate-700">Sin destino confirmado. Inspírate en la sección de experiencias.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
