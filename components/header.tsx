
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-500
        ${
          scrolled
            ? "bg-[var(--background)]/85 backdrop-blur-xl py-3 shadow-lg"
            : "bg-transparent py-6"
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#inicio"
          className="text-2xl font-bold tracking-tight text-[var(--foreground)]"
        >
          Pedro<span className="text-[var(--accent)]">.</span>
        </a>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-9">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative text-sm font-medium
                text-[var(--muted)]
                hover:text-[var(--accent)]
                transition-colors duration-300
                group
              "
            >
              {item.label}

              <span
                className="
                  absolute -bottom-2 left-0
                  w-0 h-[2px]
                  bg-[var(--accent)]
                  rounded-full
                  group-hover:w-full
                  transition-all duration-300
                "
              />
            </a>
          ))}
        </div>

        {/* AÇÕES */}
        <div className="flex items-center gap-4">

          {/* CONTATO */}
          <a
            href="#contato"
            className="
              rounded-full px-5 py-2.5
              text-sm font-semibold
              text-[var(--primary)]
              border border-[var(--primary)]/50
              bg-[var(--primary)]/10
              text-[var(--foreground)]
              hover:bg-[var(--primary)]
              hover:text-[var(--foreground)]
              hover:border-[var(--primary)]
              transition-all duration-300
            "
          >
            Vamos conversar <span className="ml-1">↗</span>
          </a>

          {/* TOGGLE DE TEMA */}
          <button
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label="Alternar tema"
            title="Alternar tema"
            className="
              w-10 h-10 rounded-full
              flex items-center justify-center
              border border-[var(--border)]
              bg-[var(--surface)]
              text-[var(--accent)]
              hover:border-[var(--accent)]
              hover:scale-105
              transition-all duration-300
              disabled:opacity-50
            "
          >
            {!mounted ? (
              <span className="w-5 h-5" />
            ) : theme === "dark" ? (
              /* ÍCONE SOL */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-5 h-5"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  strokeLinecap="round"
                  d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                />
              </svg>
            ) : (
              /* ÍCONE LUA */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a8.5 8.5 0 1 0 12 12Z"
                />
              </svg>
            )}
          </button>

        </div>
      </nav>
    </header>
  );
}
