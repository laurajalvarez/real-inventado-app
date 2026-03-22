import Link from "next/link";
import { AppHeader } from "../../components/AppHeader";
import { BottomNav } from "../../components/BottomNav";

const stats = [
  { label: "Puntos", value: "+250", tone: "text-white" },
  { label: "Tiempo", value: "0.8s", tone: "text-[var(--secondary)]" },
  { label: "Aciertos", value: "8/10", tone: "text-[var(--tertiary)]" },
];

export default function ResultadoAciertoPage() {
  return (
    <main className="grid-pattern relative min-h-screen overflow-x-hidden bg-[var(--background)] text-white">
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <AppHeader />

      <section className="relative mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6 pb-32 pt-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:14px_14px]" />

        <div className="relative mb-8 text-center">
          <div className="absolute -left-8 -top-12 h-44 w-44 rounded-full bg-[rgba(199,153,255,0.18)] blur-[80px]" />
          <div className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-[rgba(74,248,227,0.12)] blur-[80px]" />

          <div className="relative flex flex-col items-center space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(74,248,227,0.2)] bg-[rgba(74,248,227,0.1)] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--secondary)]">
              ✦ Racha de 5 aciertos
            </span>
            <h2 className="font-headline text-5xl font-black italic leading-none tracking-[-0.08em] sm:text-7xl">
              ¡ACERTASTE!
            </h2>
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-[var(--secondary)] to-transparent" />
          </div>
        </div>

        <section className="relative mb-8">
          <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[rgba(199,153,255,0.16)] to-[rgba(74,248,227,0.12)] blur-2xl opacity-60" />

          <article className="glass-panel relative overflow-hidden rounded-[1.75rem] p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[rgba(199,153,255,0.1)] blur-xl" />
            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-8 rounded-full bg-[rgba(74,248,227,0.08)] blur-xl" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2">
                <span className="rounded bg-[var(--secondary)] px-2 py-0.5 text-[10px] font-black uppercase text-[#053832]">
                  Real
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  Ciencia Natural
                </span>
              </div>

              <div className="flex items-start justify-between gap-6">
                <p className="font-headline max-w-xl text-2xl font-bold leading-tight tracking-[-0.03em]">
                  Las hormigas no duermen en el sentido tradicional, sino que
                  toman miles de micro-siestas.
                </p>
                <div className="hidden text-6xl text-[rgba(199,153,255,0.35)] sm:block">
                  !
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="space-y-6">
          <article className="glass-panel relative overflow-hidden rounded-[1.75rem] border-l-4 border-[var(--secondary)] p-8">
            <div className="absolute right-4 top-4 text-6xl opacity-10">!</div>

            <h3 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--secondary)]">
              <span>i</span>
              ¿Por qué es real?
            </h3>
            <p className="text-sm font-medium leading-relaxed text-[var(--text-muted)] sm:text-base">
              Las hormigas reparten su descanso en pausas muy cortas a lo largo
              del día. Ese patrón les permite mantener actividad casi continua
              dentro del hormiguero.
            </p>
          </article>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            <Link
              href="/jugar"
              className="btn-primary font-headline flex items-center justify-center gap-3 rounded-md px-8 py-5 text-lg font-black uppercase tracking-[-0.03em]"
            >
              <span>Siguiente</span>
              <span>→</span>
            </Link>

            <Link
              href="/"
              className="flex items-center justify-center gap-3 rounded-md border border-white/10 bg-[var(--surface-elevated)] px-8 py-5 text-lg font-black uppercase tracking-[-0.03em] text-white hover:bg-[var(--surface-strong)]"
            >
              <span>Salir</span>
            </Link>
          </div>
        </section>

        <section className="mt-12 flex items-center justify-center gap-6 opacity-70 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center">
                <span className={`text-2xl font-black ${stat.tone}`}>{stat.value}</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/55">
                  {stat.label}
                </span>
              </div>
              {index < stats.length - 1 ? <div className="h-8 w-px bg-white/10" /> : null}
            </div>
          ))}
        </section>
      </section>

      <BottomNav active="jugar" />
    </main>
  );
}
