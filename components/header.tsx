
"use client";

import { useEffect, useState } from "react";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#080E1B]/85 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#inicio"
          className="text-2xl font-bold tracking-tight text-[#F8FAFC]"
        >
          Pedro<span className="text-[#38BDF8]">.</span>
        </a>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-9">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#94A3B8]
              hover:text-[#38BDF8] transition-colors duration-300
              group"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 w-0 h-[2px]
                bg-[#38BDF8] rounded-full
                group-hover:w-full transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Botão */}
        <a
          href="#contato"
          className="rounded-full px-5 py-2.5 text-sm font-semibold
          text-[#F8FAFC]
          border border-[#2563EB]/50
          bg-[#2563EB]/10
          hover:bg-[#2563EB]
          hover:border-[#2563EB]
          transition-all duration-300"
        >
          Vamos conversar <span className="ml-1">↗</span>
        </a>

      </nav>
    </header>
  );
}
