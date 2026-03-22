import Link from "next/link";
import { AppHeader } from "../components/AppHeader";

const accountStats = [
  { label: "Usuario", value: "laura_trivia" },
  { label: "Correo", value: "laura@example.com" },
  { label: "Estado", value: "Activo" },
];

export default function PerfilPage() {
  return (
    <main className="grid-pattern relative min-h-screen overflow-x-hidden bg-[var(--background)] text-white">
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(14,14,14,0.82)] shadow-[0_4px_30px_rgba(199,153,255,0.08)] backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/temas"
            className="rounded-full border border-white/10 bg-[var(--surface-elevated)] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--secondary)]"
          >
            Regresar
          </Link>

          <h1 className="font-headline bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] bg-clip-text text-xl font-black italic tracking-[-0.06em] text-transparent sm:text-2xl">
            ¿REAL O INVENTADO?
          </h1>

          <div className="w-[92px]" />
        </div>

        <div className="h-4 w-full bg-gradient-to-b from-[var(--surface)] to-transparent" />
      </header>

      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 pb-32 pt-28">
        <header className="mb-10 text-center">
          <h2 className="font-headline bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] bg-clip-text text-4xl font-black italic tracking-[-0.06em] text-transparent">
            TU PERFIL
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-80">
            Consulta tus datos, actualiza tu cuenta o elimina tu usuario.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_1.35fr]">
          <article className="glass-panel relative overflow-hidden rounded-[1.75rem] p-8">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[rgba(199,153,255,0.1)] blur-xl" />

            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(199,153,255,0.25)] bg-[var(--surface-elevated)] text-2xl font-black text-[var(--primary)]">
                  LT
                </div>
                <div>
                  <p className="font-headline text-2xl font-bold">Laura Trivia</p>
                  <p className="text-sm text-[var(--text-muted)]">Jugador</p>
                </div>
              </div>

              <div className="space-y-4">
                {accountStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1rem] border border-white/8 bg-[var(--surface-elevated)] px-4 py-4"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="glass-panel rounded-[1.75rem] p-8">
              <h3 className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-[var(--secondary)]">
                Actualizar usuario
              </h3>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block px-1 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                      Nombre
                    </label>
                    <div className="field-shell surface-elevated rounded-xl p-1">
                      <input
                        type="text"
                        defaultValue="Laura"
                        className="w-full rounded-md border-none bg-transparent px-4 py-4 text-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block px-1 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                      Usuario
                    </label>
                    <div className="field-shell surface-elevated rounded-xl p-1">
                      <input
                        type="text"
                        defaultValue="laura_trivia"
                        className="w-full rounded-md border-none bg-transparent px-4 py-4 text-white outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block px-1 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                    Correo
                  </label>
                  <div className="field-shell surface-elevated rounded-xl p-1">
                    <input
                      type="email"
                      defaultValue="laura@example.com"
                      className="w-full rounded-md border-none bg-transparent px-4 py-4 text-white outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block px-1 text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary)]">
                    Nueva contraseña
                  </label>
                  <div className="field-shell surface-elevated rounded-xl p-1">
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-md border-none bg-transparent px-4 py-4 text-white outline-none placeholder:text-white/35"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary font-headline flex w-full items-center justify-center rounded-md py-4 text-lg font-extrabold"
                >
                  Guardar cambios
                </button>
              </form>
            </article>

            <article className="glass-panel rounded-[1.75rem] border-l-4 border-[rgb(255,178,185)] p-8">
              <h3 className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[rgb(255,178,185)]">
                Eliminar usuario
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[var(--text-muted)]">
                Esta acción representa la parte de eliminación del CRUD de
                usuarios. Debe usarse con cuidado porque quitaría tu cuenta y
                sus datos asociados.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md border border-[rgba(255,178,185,0.26)] bg-[rgba(167,1,56,0.24)] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[rgb(255,178,185)]"
                >
                  Eliminar cuenta
                </button>

                <Link
                  href="/temas"
                  className="flex items-center justify-center rounded-md border border-white/10 bg-[var(--surface-elevated)] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white"
                >
                  Cancelar
                </Link>
              </div>
            </article>

          </div>
        </section>
      </section>
    </main>
  );
}
