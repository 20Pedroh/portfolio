
"use client";

import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import {
  FiMail,
  FiArrowUpRight,
  FiX,
  FiSend,
} from "react-icons/fi";

const contacts = [
  {
    name: "LinkedIn",
    description: "Vamos nos conectar profissionalmente.",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/",
    label: "Acessar LinkedIn",
  },
  {
    name: "GitHub",
    description: "Confira meus projetos e códigos.",
    icon: <SiGithub />,
    link: "https://github.com/",
    label: "Acessar GitHub",
  },
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function closeModal() {
    if (loading) return;

    setIsOpen(false);
    setStatus("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem.");
      }

      setStatus("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setIsOpen(false);
        setStatus("");
      }, 2000);

    } catch {
      setStatus("Não foi possível enviar sua mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section
        id="contato"
        className="
          min-h-screen
          bg-[var(--background)]
          flex items-center justify-center
          py-24
        "
      >
        <div className="max-w-6xl mx-auto px-6 w-full">

          {/* CABEÇALHO */}
          <div className="text-center mb-16">
            <p className="text-[var(--accent)] font-medium mb-3">
              Vamos conversar?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-5">
              Entre em contato
              <span className="text-[var(--accent)]">.</span>
            </h2>

            <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
              Estou aberto a novas oportunidades, projetos e conexões.
              Será um prazer conversar com você!
            </p>
          </div>

          {/* CARDS DE CONTATO */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">

            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.label}
                className="
                  group
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  shadow-[0_4px_20px_var(--shadow)]
                  rounded-xl
                  p-8
                  flex flex-col items-center text-center
                  hover:-translate-y-2
                  hover:border-[var(--accent)]/60
                  transition-all duration-300
                "
              >
                <div className="
                  w-16 h-16
                  rounded-2xl
                  bg-[var(--background-secondary)]
                  flex items-center justify-center
                  text-3xl text-[var(--accent)]
                  mb-6
                  group-hover:scale-110
                  transition-transform duration-300
                ">
                  {contact.icon}
                </div>

                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                  {contact.name}
                </h3>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {contact.description}
                </p>

                <span className="
                  flex items-center gap-2
                  text-sm font-semibold
                  text-[var(--accent)]
                ">
                  {contact.label}

                  <FiArrowUpRight className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform duration-300
                  " />
                </span>
              </a>
            ))}

            {/* CARD DE E-MAIL */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="
                group
                bg-[var(--surface)]
                border border-[var(--border)]
                shadow-[0_4px_20px_var(--shadow)]
                rounded-xl
                p-8
                flex flex-col items-center text-center
                hover:-translate-y-2
                hover:border-[var(--accent)]/60
                transition-all duration-300
              "
            >
              <div className="
                w-16 h-16
                rounded-2xl
                bg-[var(--background-secondary)]
                flex items-center justify-center
                text-3xl text-[var(--accent)]
                mb-6
                group-hover:scale-110
                transition-transform duration-300
              ">
                <FiMail />
              </div>

              <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                E-mail
              </h3>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                Entre em contato comigo diretamente.
              </p>

              <span className="
                flex items-center gap-2
                text-sm font-semibold
                text-[var(--accent)]
              ">
                Enviar mensagem

                <FiArrowUpRight className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition-transform duration-300
                " />
              </span>
            </button>

          </div>

          {/* MENSAGEM FINAL */}
          <div className="text-center mt-16">
            <p className="text-sm text-[var(--muted)]">
              Obrigado pela visita ao meu portfólio!
            </p>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70 backdrop-blur-sm
            flex items-center justify-center
            p-4
          "
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="
              relative
              bg-[var(--surface)]
              border border-[var(--border)]
              shadow-[0_4px_30px_var(--shadow)]
              rounded-2xl
              p-8
              w-full max-w-lg
              animate-in fade-in zoom-in-95 duration-200
              max-h-[90vh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* FECHAR */}
            <button
              type="button"
              onClick={closeModal}
              disabled={loading}
              aria-label="Fechar formulário"
              className="
                absolute top-5 right-5
                text-[var(--muted)]
                hover:text-[var(--accent)]
                transition-colors
                disabled:opacity-50
              "
            >
              <FiX size={22} />
            </button>

            {/* CABEÇALHO DO MODAL */}
            <div className="mb-8">
              <p className="text-[var(--accent)] font-medium mb-2">
                Vamos conversar?
              </p>

              <h2
                id="contact-modal-title"
                className="text-2xl font-bold text-[var(--foreground)] mb-3"
              >
                Envie uma mensagem.
              </h2>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                Preencha os campos abaixo. Será um prazer receber seu contato!
              </p>
            </div>

            {/* FORMULÁRIO */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NOME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Seu nome
                </label>

                <input
                  id="contact-name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Digite seu nome"
                  className="
                    w-full
                    bg-[var(--background)]
                    border border-[var(--border)]
                    rounded-lg
                    px-4 py-3
                    text-[var(--foreground)]
                    placeholder:text-[var(--muted)]
                    outline-none
                    focus:border-[var(--accent)]
                    transition-colors
                  "
                />
              </div>

              {/* E-MAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Seu e-mail
                </label>

                <input
                  id="contact-email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="seuemail@exemplo.com"
                  className="
                    w-full
                    bg-[var(--background)]
                    border border-[var(--border)]
                    rounded-lg
                    px-4 py-3
                    text-[var(--foreground)]
                    placeholder:text-[var(--muted)]
                    outline-none
                    focus:border-[var(--accent)]
                    transition-colors
                  "
                />
              </div>

              {/* MENSAGEM */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[var(--foreground)] mb-2"
                >
                  Mensagem
                </label>

                <textarea
                  id="contact-message"
                  required
                  maxLength={3000}
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Escreva sua mensagem..."
                  className="
                    w-full
                    bg-[var(--background)]
                    border border-[var(--border)]
                    rounded-lg
                    px-4 py-3
                    text-[var(--foreground)]
                    placeholder:text-[var(--muted)]
                    outline-none
                    focus:border-[var(--accent)]
                    transition-colors
                    resize-none
                  "
                />
              </div>

              {/* STATUS */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status.includes("sucesso")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* BOTÃO ENVIAR */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  flex items-center justify-center gap-2
                  bg-[var(--accent)]
                  text-white
                  font-semibold
                  rounded-lg
                  py-3
                  hover:opacity-90
                  disabled:opacity-50
                  transition-all
                "
              >
                {loading ? "Enviando..." : "Enviar mensagem"}

                {!loading && <FiSend />}
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
