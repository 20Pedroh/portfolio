
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled || mobileMenuOpen
            ? "bg-[var(--background)]/75 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <nav
        className="
          relative max-w-6xl mx-auto
          px-4 sm:px-6
          flex flex-col
        "
      >
        {/* LINHA PRINCIPAL DO HEADER */}
        <div
          className="
            h-20 w-full
            flex items-center justify-between gap-3
          "
        >
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={closeMobileMenu}
            className="
              text-2xl font-bold tracking-tight
              text-[var(--foreground)]
              shrink-0
            "
          >
            Pedro<span className="text-[var(--accent)]">.</span>
          </a>

          {/* MENU DESKTOP */}
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
          <div className="flex items-center gap-3">

            {/* TOGGLE DE TEMA */}
            <button
              onClick={toggleTheme}
              disabled={!mounted}
              aria-label="Alternar tema"
              title="Alternar tema"
              className="
                w-10 h-10 shrink-0 rounded-full
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

            {/* BOTÃO MENU MOBILE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="
                md:hidden
                w-10 h-10 shrink-0 rounded-full
                flex items-center justify-center
                border border-[var(--border)]
                bg-[var(--surface)]
                text-[var(--foreground)]
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                transition-all duration-300
              "
            >
              {mobileMenuOpen ? (
                /* ÍCONE FECHAR */
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
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              ) : (
                /* ÍCONE HAMBÚRGUER */
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
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MENU MOBILE EXPANSÍVEL */}
        <div
          id="mobile-menu"
          aria-hidden={!mobileMenuOpen}
          className={`
            md:hidden
            w-full
            grid transition-all duration-300 ease-in-out
            ${
              mobileMenuOpen
                ? "grid-rows-[1fr] opacity-100 pb-4"
                : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
            }
          `}
        >
          <div className="overflow-hidden">
            <div
              className="
                flex flex-col
                pt-2
                border-t border-[var(--border)]
              "
            >
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={closeMobileMenu}
                  className="
                    flex items-center
                    px-3 py-3.5
                    rounded-lg
                    text-sm font-medium
                    text-[var(--muted)]
                    hover:text-[var(--accent)]
                    hover:bg-[var(--surface)]
                    transition-all duration-200
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
