import Link from "next/link";
import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";

export default function JugarPage() {
  return (
    <main className="grid-pattern relative min-h-screen overflow-x-hidden bg-[var(--background)] text-white">
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <AppHeader />

      <section className="relative mx-auto flex min-h-screen w-full max-w-lg flex-col justify-center px-6 pb-36 pt-28">
        <div className="pointer-events-none absolute left-[-5rem] top-[24%] h-64 w-64 rounded-full bg-[rgba(199,153,255,0.1)] blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[22%] right-[-5rem] h-64 w-64 rounded-full bg-[rgba(74,248,227,0.1)] blur-[100px]" />

        <section className="mb-8 w-full">
          <div className="mb-3 flex items-end justify-between">
            <span className="font-headline text-sm font-bold tracking-[0.06em] text-[var(--primary)]">
              Pregunta 8/10
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--tertiary)]">⏳</span>
              <span className="font-headline text-lg font-black tabular-nums text-[var(--tertiary)]">
                12s
              </span>
            </div>
          </div>

          <div className="rounded-full bg-[var(--surface-strong)] p-0.5">
            <div className="h-2 rounded-full bg-[var(--surface-elevated)]">
              <div className="h-2 w-[80%] rounded-full bg-[var(--secondary)] shadow-[0_0_15px_rgba(74,248,227,0.45)]" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 translate-y-4 scale-95 rounded-[1.75rem] bg-[rgba(199,153,255,0.08)] blur-2xl" />

          <article className="glass-panel relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(199,153,255,0.04)] via-transparent to-[rgba(74,248,227,0.04)]" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-[rgba(199,153,255,0.2)] bg-[var(--surface-muted)] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary)]">
                Ciencia Natural
              </span>

              <h1 className="font-headline mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-[2rem]">
                &quot;Existen más de 500 tipos de pingüinos diferentes distribuidos por
                todo el hemisferio sur.&quot;
              </h1>
            </div>

            <div className="relative z-10 mt-8 flex justify-end">
              <div className="flex h-24 w-24 items-end justify-end text-6xl text-[rgba(199,153,255,0.38)]">
                ◌
              </div>
            </div>
          </article>
        </section>

        <section className="mt-10 grid w-full grid-cols-2 gap-4">
          <Link href="/resultado/acierto" className="group relative block h-24 active:scale-[0.98]">
            <div className="absolute inset-0 rounded-xl bg-[rgba(74,248,227,0.18)] opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-xl border border-[rgba(74,248,227,0.3)] bg-[rgba(0,106,96,0.42)]">
              <span className="font-headline text-xl font-black tracking-[-0.04em] text-[var(--secondary)]">
                REAL
              </span>
              <span className="mt-1 text-[var(--secondary)]/70">✓</span>
            </div>
          </Link>

          <Link href="/resultado/fallo" className="group relative block h-24 active:scale-[0.98]">
            <div className="absolute inset-0 rounded-xl bg-[rgba(255,110,132,0.18)] opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-full w-full flex-col items-center justify-center rounded-xl border border-[rgba(255,110,132,0.28)] bg-[rgba(167,1,56,0.34)]">
              <span className="font-headline text-xl font-black tracking-[-0.04em] text-[rgb(255,178,185)]">
                INVENTADO
              </span>
              <span className="mt-1 text-[rgb(255,178,185)]/70">✦</span>
            </div>
          </Link>

          <div className="col-span-2 mt-2 px-2">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--tertiary)]">
                Nivel de duda
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                Medio
              </span>
            </div>

            <div className="flex items-center">
              <div className="h-1 w-full bg-[var(--surface)]">
                <div className="h-1 w-1/3 bg-[var(--tertiary)] shadow-[0_0_10px_rgba(255,235,147,0.85)]" />
              </div>
              <div className="-ml-1 h-4 w-4 rounded-full bg-[var(--tertiary)] shadow-[0_0_15px_rgba(255,235,147,0.85)] ring-4 ring-[rgba(255,235,147,0.18)]" />
            </div>
          </div>
        </section>
      </section>

      <BottomNav active="jugar" />
    </main>
  );
}
