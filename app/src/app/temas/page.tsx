import Link from "next/link";
import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";

const categories = [
  {
    title: "Tecnologia",
    subtitle: "120 desafios",
    accent: "primary",
    icon: "◈",
    href: "/jugar",
  },
  {
    title: "Historia",
    subtitle: "85 desafios",
    accent: "primary",
    icon: "⌘",
    href: "/jugar",
  },
  {
    title: "Pueblos del Mundo",
    subtitle: "",
    accent: "secondary",
    icon: "◉",
    href: "/jugar",
  },
  {
    title: "Cine y TV",
    subtitle: "",
    accent: "tertiary",
    icon: "◌",
    href: "/jugar",
  },
  {
    title: "Comidas Exoticas",
    subtitle: "",
    accent: "secondary",
    icon: "✦",
    href: "/jugar",
  },
  {
    title: "Datos Curiosos",
    subtitle: "",
    accent: "primary",
    icon: "!",
    href: "/jugar",
  },
  {
    title: "Todas las Categorias",
    subtitle: "Mezcla total",
    accent: "secondary",
    icon: "∞",
    href: "/jugar",
    wide: true,
  },
];

function getAccentClasses(accent: string) {
  if (accent === "secondary") {
    return {
      border: "border-[rgba(74,248,227,0.2)]",
      glow: "shadow-[0_0_15px_-3px_rgba(74,248,227,0.35)]",
      text: "text-[var(--secondary)]",
    };
  }

  if (accent === "tertiary") {
    return {
      border: "border-[rgba(255,235,147,0.2)]",
      glow: "shadow-[0_0_15px_-3px_rgba(255,235,147,0.3)]",
      text: "text-[var(--tertiary)]",
    };
  }

  return {
    border: "border-[rgba(199,153,255,0.2)]",
    glow: "shadow-[0_0_15px_-3px_rgba(199,153,255,0.35)]",
    text: "text-[var(--primary)]",
  };
}

export default function TemasPage() {
  return (
    <main className="grid-pattern relative min-h-screen overflow-x-hidden bg-[var(--background)] text-white">
      <div className="ambient-orb ambient-orb--primary" />
      <div className="ambient-orb ambient-orb--secondary" />
      <AppHeader />

      <section className="mx-auto mb-32 mt-24 w-full max-w-5xl px-6">
        <header className="mb-10 text-center">
          <h2 className="font-headline bg-gradient-to-r from-[var(--primary)] to-[var(--primary-strong)] bg-clip-text text-4xl font-black italic tracking-[-0.06em] text-transparent">
            EXPLORA LA DUDA
          </h2>
          <p className="mx-auto mt-2 max-w-[280px] text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-80">
            ¿Que tan facil es engañar a tu mente?
          </p>
        </header>

        <section className="grid auto-rows-fr grid-cols-2 gap-4">
          {categories.map((category) => {
            const accent = getAccentClasses(category.accent);
            const spanClass = category.wide
              ? "col-span-2 p-8 items-start text-left"
              : "col-span-1 p-6 items-center text-center";

            return (
              <Link
                key={category.title}
                href={category.href}
                className={`group relative flex overflow-hidden rounded-[1.5rem] border bg-[var(--surface-elevated)] transition-transform active:scale-[0.985] ${accent.border} ${accent.glow} ${spanClass}`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-white/5 blur-[60px]" />

                <div
                  className={`relative z-10 flex w-full flex-col ${
                    category.wide ? "items-start" : "items-center"
                  }`}
                >
                  <span className={`mb-4 text-4xl ${accent.text}`}>{category.icon}</span>
                  <h3
                    className={`font-headline font-bold leading-tight text-white ${
                      category.wide ? "text-2xl" : "text-base"
                    }`}
                  >
                    {category.title}
                  </h3>
                  {category.subtitle ? (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      {category.subtitle}
                    </p>
                  ) : null}

                  {category.wide ? (
                    <div className="absolute bottom-4 right-6 text-2xl opacity-20 transition-opacity group-hover:opacity-100">
                      <span className={accent.text}>→</span>
                    </div>
                  ) : null}
                </div>
              </Link>
            );
          })}
        </section>
      </section>

      <BottomNav active="temas" />
    </main>
  );
}
