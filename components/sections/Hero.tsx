import {
  SiNextdotjs,
  SiRust,
  SiDotnet,
  SiReact,
} from "react-icons/si";

import { TechBadge } from "@/components/ui/TechBadge";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        bg-[var(--background)]
        flex items-center justify-center
        overflow-hidden
        pt-20 sm:pt-24 md:pt-0
      "
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* APRESENTAÇÃO */}
          <div className="z-10">
            <p className="text-[var(--accent)] mb-3 font-medium">
              Olá, eu sou
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              Pedro Henrique Rodrigues
              <span className="text-[var(--accent)]">.</span>
            </h1>

            <p className="text-xl text-[var(--muted)]">
              Desenvolvedor Full Stack
            </p>

            <p className="text-[var(--muted)] mt-5 max-w-md leading-relaxed">
              Transformando ideias em soluções digitais modernas,
              funcionais e criativas.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projetos"
                className="
                  bg-[var(--primary)]
                  text-white
                  px-6 py-3
                  rounded-full
                  font-semibold
                  hover:brightness-110
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                Meus projetos ↗
              </a>

              <a
                href="#contato"
                className="
                  rounded-full
                  px-5 py-3
                  text-sm font-semibold
                  text-[var(--foreground)]
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  hover:bg-[var(--primary)]
                  hover:text-white
                  hover:border-[var(--primary)]
                  transition-all duration-300
                "
              >
                Contato
              </a>
            </div>
          </div>

          {/* FOTO E TECNOLOGIAS */}
          <div className="flex justify-center md:justify-end">

            <div className="relative w-[420px] h-[420px] flex items-center justify-center">

              {/* BRILHO DE FUNDO */}
              <div className="
                absolute inset-16 rounded-full
                bg-[var(--accent)]/20 blur-[70px]
              " />

              {/* FOTO */}
              <div className="
                relative z-10
                rounded-full
                p-[3px]
                bg-gradient-to-br from-blue-400 via-blue-600 to-cyan-300
                shadow-[0_0_45px_rgba(37,99,235,0.25)]
                animate-[float_5s_ease-in-out_infinite]
              ">
                <img
                  src="https://avatars.githubusercontent.com/u/104581824"
                  alt="Foto de Pedro Henrique Rodrigues"
                  className="
                    w-80 h-80
                    rounded-full
                    object-cover
                    border-[5px]
                    border-[var(--background-secondary)]
                  "
                />
              </div>

              {/* NEXT.JS */}
              <div className="
                absolute top-8 left-0 z-20
                animate-[float_5s_ease-in-out_infinite]
              ">
                <TechBadge icon={<SiNextdotjs />} name="Next.js" />
              </div>

              {/* RUST */}
              <div className="
                absolute top-14 right-0 z-20
                animate-[float_6s_ease-in-out_infinite]
              ">
                <TechBadge icon={<SiRust />} name="Rust" />
              </div>

              {/* REACT */}
              <div className="
                absolute bottom-16 left-0 z-20
                animate-[float_7s_ease-in-out_infinite]
              ">
                <TechBadge icon={<SiReact />} name="React" />
              </div>

              {/* .NET */}
              <div className="
                absolute bottom-10 right-0 z-20
                animate-[float_5.5s_ease-in-out_infinite]
              ">
                <TechBadge icon={<SiDotnet />} name=".NET" />
              </div>

            </div>
          </div>

        </div>

        {/* INDICADOR DE SCROLL */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#sobre" className="animate-bounce block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}