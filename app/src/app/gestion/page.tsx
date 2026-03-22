import Link from "next/link";
import { AppHeader } from "../components/AppHeader";
import { categoryOptions, managedQuestions } from "./data";

export default function GestionPage() {
  return (
    <main className="grid-pattern relative min-h-screen overflow-x-hidden bg-[var(--background)] text-white">
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <AppHeader />

      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-32 pt-28">
        <header className="mb-10 space-y-6">
          <div className="flex justify-end">
            <Link
              href="/gestion/nueva"
              className="btn-primary font-headline flex items-center justify-center rounded-md px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em]"
            >
              Añadir pregunta
            </Link>
          </div>

          <div className="w-full">
            <h2 className="font-headline bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] bg-clip-text text-4xl font-black italic tracking-[-0.06em] text-transparent">
              GESTION DE PREGUNTAS
            </h2>
            <p className="mt-2 max-w-3xl text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-80">
              Lista, filtra y administra preguntas y respuestas desde una vista
              preparada para crecer con mas registros.
            </p>
          </div>

          <div className="glass-panel rounded-[1.5rem] p-4">
            <div className="grid gap-3 lg:grid-cols-[1.8fr_1.1fr_0.7fr]">
              <div className="field-shell surface-elevated rounded-xl p-1">
                <input
                  type="text"
                  placeholder="Busca por ID, enunciado o estado"
                  className="w-full rounded-md border-none bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
              </div>

              <div className="field-shell surface-elevated rounded-xl p-1">
                <select
                  defaultValue="Todas las categorias"
                  className="w-full rounded-md border-none bg-transparent px-4 py-4 text-sm text-white outline-none"
                >
                  {categoryOptions.map((category) => (
                    <option key={category} value={category} className="bg-[#161616]">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="rounded-md border border-[rgba(199,153,255,0.22)] bg-[rgba(199,153,255,0.12)] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-[var(--primary)]"
              >
                Buscar
              </button>
            </div>
          </div>
        </header>

        <section className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
          <div className="mb-5 grid gap-3 rounded-[1.25rem] border border-white/8 bg-[var(--surface-elevated)] px-4 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:grid-cols-[0.75fr_1.2fr_2fr_0.8fr_1.1fr]">
            <span>ID</span>
            <span>Categoria</span>
            <span>Pregunta</span>
            <span>Estado</span>
            <span>Acciones</span>
          </div>

          <div className="space-y-4">
            {managedQuestions.map((question) => (
              <article
                key={question.id}
                className="grid gap-4 rounded-[1.25rem] border border-white/8 bg-[var(--surface-elevated)] px-4 py-5 sm:grid-cols-[0.75fr_1.2fr_2fr_0.8fr_1.1fr] sm:items-center"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:hidden">
                    ID
                  </p>
                  <p className="text-sm font-bold text-[var(--primary)]">{question.id}</p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:hidden">
                    Categoria
                  </p>
                  <p className="text-sm font-semibold text-white">{question.category}</p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:hidden">
                    Pregunta
                  </p>
                  <p className="text-sm leading-relaxed text-white">{question.statement}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {question.answers.map((answer) => (
                      <span
                        key={answer.label}
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                          answer.correct
                            ? "bg-[rgba(74,248,227,0.12)] text-[var(--secondary)]"
                            : "bg-[var(--surface)] text-[var(--text-muted)]"
                        }`}
                      >
                        {answer.label}
                        {answer.correct ? " · correcta" : ""}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)] sm:hidden">
                    Estado
                  </p>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                      question.status === "Activa"
                        ? "bg-[rgba(74,248,227,0.12)] text-[var(--secondary)]"
                        : "bg-[rgba(255,235,147,0.12)] text-[var(--tertiary)]"
                    }`}
                  >
                    {question.status}
                  </span>
                </div>

                <div className="grid gap-2">
                  <Link
                    href={`/gestion/editar/${question.id}`}
                    className="rounded-md border border-[rgba(199,153,255,0.22)] bg-[rgba(199,153,255,0.12)] px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.18em] text-[var(--primary)]"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    className="rounded-md border border-[rgba(255,178,185,0.24)] bg-[rgba(167,1,56,0.22)] px-4 py-3 text-[11px] font-black uppercase tracking-[0.18em] text-[rgb(255,178,185)]"
                  >
                    Eliminar
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
