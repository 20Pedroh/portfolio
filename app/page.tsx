
import { Header } from "@/components/header";
import {
  SiNextdotjs,
  SiRust,
  SiDotnet,
  SiReact,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          id="inicio"
          className="min-h-screen bg-[#080E1B] flex items-center justify-center overflow-hidden"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* APRESENTAÇÃO */}
              <div className="z-10">
                <p className="text-[#38BDF8] mb-3 font-medium">
                  Olá, eu sou
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
                  Pedro Henrique Rodrigues
                  <span className="text-[#38BDF8]">.</span>
                </h1>

                <p className="text-xl text-[#94A3B8]">
                  Desenvolvedor Full Stack
                </p>

                <p className="text-[#94A3B8] mt-5 max-w-md leading-relaxed">
                  Transformando ideias em soluções digitais modernas,
                  funcionais e criativas.
                </p>

                <div className="flex gap-4 mt-8">
                  <a
                    href="#projetos"
                    className="bg-[#2563EB] text-white px-6 py-3 rounded-full
                    hover:bg-[#1D4ED8] transition-all"
                  >
                    Meus projetos ↗
                  </a>

                  <a
                    href="#contato"
                    className="border border-[#2563EB]/50 text-[#E2E8F0]
                    px-6 py-3 rounded-full hover:bg-[#2563EB]/10
                    transition-all"
                  >
                    Contato
                  </a>
                </div>
              </div>

              {/* FOTO E TECNOLOGIAS */}
              <div className="flex justify-center md:justify-end">

                <div className="relative w-[420px] h-[420px] flex items-center justify-center">

                  {/* BRILHO DE FUNDO */}
                  <div className="absolute inset-16 rounded-full
                    bg-blue-600/20 blur-[70px]"
                  />

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
                        border-[#080E1B]
                      "
                    />
                  </div>

                  {/* NEXT.JS */}
                  <div className="
                    absolute top-8 left-0 z-20
                    animate-[float_5s_ease-in-out_infinite]
                  ">
                    <TechBadge
                      icon={<SiNextdotjs />}
                      name="Next.js"
                    />
                  </div>

                  {/* RUST */}
                  <div className="
                    absolute top-14 right-0 z-20
                    animate-[float_6s_ease-in-out_infinite]
                  ">
                    <TechBadge
                      icon={<SiRust />}
                      name="Rust"
                    />
                  </div>

                  {/* REACT */}
                  <div className="
                    absolute bottom-16 left-0 z-20
                    animate-[float_7s_ease-in-out_infinite]
                  ">
                    <TechBadge
                      icon={<SiReact />}
                      name="React"
                    />
                  </div>

                  {/* .NET */}
                  <div className="
                    absolute bottom-10 right-0 z-20
                    animate-[float_5.5s_ease-in-out_infinite]
                  ">
                    <TechBadge
                      icon={<SiDotnet />}
                      name=".NET"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* INDICADOR DE SCROLL */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <a href="#sobre" className="animate-bounce block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#38BDF8]"
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

        {/* SOBRE */}
        <section
          id="sobre"
          className="min-h-screen bg-[#0D1728] flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Sobre mim</h1>
        </section>

        {/* PROJETOS */}
        <section
          id="projetos"
          className="min-h-screen bg-[#080E1B] flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Meus projetos</h1>
        </section>

        {/* HABILIDADES */}
        <section
          id="habilidades"
          className="min-h-screen bg-[#0D1728] flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Habilidades</h1>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="min-h-screen bg-[#080E1B] flex items-center justify-center"
        >
          <h1 className="text-4xl text-white">Entre em contato</h1>
        </section>

      </main>
    </>
  );
}

// COMPONENTE DOS CARDS DE TECNOLOGIA
function TechBadge({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <div className="
      flex items-center gap-3
      px-4 py-3
      rounded-xl
      bg-[#111D32]/95
      backdrop-blur-xl
      border border-[#2563EB]/25
      shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      hover:border-[#38BDF8]/60
      hover:-translate-y-1
      transition-all duration-300
      whitespace-nowrap
    ">

      <span className="text-2xl text-[#38BDF8]">
        {icon}
      </span>

      <span className="text-sm font-semibold text-[#E2E8F0]">
        {name}
      </span>

    </div>
  );
}
