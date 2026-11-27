export default function About() {
  return (
    <section
      id="sobre"
      className="
        min-h-screen
        bg-[var(--background-secondary)]
        flex items-center justify-center
        py-16
      "
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="flex flex-col items-center">

          {/* CARD SOBRE */}
          <div className="z-10 w-full">
            <div className="
              bg-[var(--surface)]/95
              backdrop-blur-xl
              border border-[var(--border)]
              shadow-[0_8px_30px_var(--shadow)]
              rounded-xl
              p-8
            ">
              <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                Sobre mim
              </h2>

              <p className="text-[var(--muted)] leading-relaxed">
                Sou um desenvolvedor Full Stack empenhado em criar soluções
                digitais modernas, funcionais e criativas. Com experiência em
                Next.js, PHP, JAVA, React, Rust e .NET, busco transformar ideias em produtos
                que impactem positivamente a vida das pessoas.
                Possuo habilidades em desenvolvimento web, design de interfaces
                e integração de sistemas, sempre buscando aprender novas
                tecnologias e aprimorar minhas competências.
              </p>
            </div>
          </div>

          {/* FORMAÇÃO ACADÊMICA */}
          <div className="w-full mt-12">
            <div className="flex flex-wrap justify-center gap-5">

              {/* IFMG */}
              <div className="
                w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                bg-[var(--surface)]
                border border-[var(--border)]
                shadow-[0_4px_20px_var(--shadow)]
                rounded-xl p-6
                hover:-translate-y-1
                transition-all duration-300
              ">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center">
                    <img
                      src="/instituicoes/ifmg.png"
                      alt="IFMG"
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  <h4 className="font-semibold text-[var(--foreground)]">
                    Instituto Federal Minas Gerais
                  </h4>
                </div>

                <p className="text-[var(--foreground)] font-medium">
                  Sistemas de Informação
                </p>

                <span className="bg-[var(--accent)] text-[var(--background)] text-xs font-bold px-2 py-1 rounded-full">
                  Graduação
                </span>

                <p className="text-sm text-[var(--muted)] mt-3">
                  2026 – Atual
                </p>
              </div>

              {/* DESCOMPLICA - MULTIPLATAFORMA */}
              <div className="
                w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                bg-[var(--surface)]
                border border-[var(--border)]
                shadow-[0_4px_20px_var(--shadow)]
                rounded-xl p-6
                hover:-translate-y-1
                transition-all duration-300
              ">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center">
                    <img
                      src="/instituicoes/descomplica.png"
                      alt="Descomplica"
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  <h4 className="font-semibold text-[var(--foreground)]">
                    Descomplica
                  </h4>
                </div>

                <p className="text-[var(--foreground)] font-medium">
                  Desenvolvimento de Aplicações Multiplataforma
                </p>

                <span className="bg-[var(--accent)] text-[var(--background)] text-xs font-bold px-2 py-1 rounded-full">
                  Pós-Graduação
                </span>

                <p className="text-sm text-[var(--muted)] mt-3">
                  2024 – 2025
                </p>
              </div>

              {/* DESCOMPLICA - ENGENHARIA */}
              <div className="
                w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                bg-[var(--surface)]
                border border-[var(--border)]
                shadow-[0_4px_20px_var(--shadow)]
                rounded-xl p-6
                hover:-translate-y-1
                transition-all duration-300
              ">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center">
                    <img
                      src="/instituicoes/descomplica.png"
                      alt="Descomplica"
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  <h4 className="font-semibold text-[var(--foreground)]">
                    Descomplica
                  </h4>
                </div>

                <p className="text-[var(--foreground)] font-medium">
                  Engenharia de Software
                </p>

                <span className="bg-[var(--accent)] text-[var(--background)] text-xs font-bold px-2 py-1 rounded-full">
                  Pós-Graduação
                </span>

                <p className="text-sm text-[var(--muted)] mt-3">
                  2023 – 2024
                </p>
              </div>

              {/* CRUZEIRO DO SUL */}
              <div className="
                w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                bg-[var(--surface)]
                border border-[var(--border)]
                shadow-[0_4px_20px_var(--shadow)]
                rounded-xl p-6
                hover:-translate-y-1
                transition-all duration-300
              ">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[var(--background-secondary)] flex items-center justify-center">
                    <img
                      src="/instituicoes/cruzeiro_do_sul.png"
                      alt="Cruzeiro do Sul"
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  <h4 className="font-semibold text-[var(--foreground)]">
                    Cruzeiro do Sul
                  </h4>
                </div>

                <p className="text-[var(--foreground)] font-medium">
                  Análise e Desenvolvimento de Sistemas
                </p>

                <span className="bg-[var(--accent)] text-[var(--background)] text-xs font-bold px-2 py-1 rounded-full">
                  Graduação
                </span>

                <p className="text-sm text-[var(--muted)] mt-3">
                  2021 – 2023
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}