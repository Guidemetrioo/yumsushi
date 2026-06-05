"use client";

import { useEffect, useRef, useState } from "react";

const WA_BASE = "https://wa.me/5511960175164?text=";

const horarios = [
  { dia: "Segunda–Quinta", h: "12h–15h e 19h–23h" },
  { dia: "Sexta", h: "12h–17h e 17h–00h" },
  { dia: "Sábado", h: "12h–17h e 17h–00h" },
  { dia: "Domingo", h: "12h–17h e 17h–23h" },
];

const pagamentos = [
  "Dinheiro",
  "Crédito",
  "Débito",
  "Pix",
  "VR",
  "Alelo",
  "Sodexo",
  "Ticket Restaurante",
];

export default function Reserva() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    datetime: "",
    pessoas: "2",
    observacao: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) =>
            el.classList.add("visible")
          );
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const dtFormatted = form.datetime
      ? new Date(form.datetime).toLocaleString("pt-BR", {
          dateStyle: "short",
          timeStyle: "short",
        })
      : "a definir";

    const msg = encodeURIComponent(
      `Olá! Gostaria de fazer uma reserva no Yum Sushi.\n\n` +
        `Nome: ${form.nome}\n` +
        `Data e hora: ${dtFormatted}\n` +
        `Pessoas: ${form.pessoas}\n` +
        `WhatsApp: ${form.whatsapp}\n` +
        (form.observacao ? `Obs: ${form.observacao}` : "")
    );

    window.open(`${WA_BASE}${msg}`, "_blank", "noopener,noreferrer");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--bg-solid)",
    border: "1.5px solid var(--borda-card)",
    borderRadius: 8,
    color: "var(--texto-principal)",
    fontSize: 14,
    fontFamily: "Montserrat, sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "var(--texto-secundario)",
    marginBottom: 8,
    fontFamily: "Montserrat, sans-serif",
  };

  return (
    <section
      id="reserva"
      ref={ref}
      style={{ padding: "120px 24px", borderTop: "1px solid var(--borda-card)" }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="reserva-grid"
      >
        {/* Left: Reservation CTA */}
        <div>
          <div className="reveal" style={{ marginBottom: 40 }}>
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "6px",
                textTransform: "uppercase",
                color: "var(--cor-estrutural)",
                marginBottom: 12,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              — Experiência Omakase
            </p>
            <h2 className="section-title">Reserve sua Mesa</h2>
            <p className="section-subtitle" style={{ marginTop: 12, lineHeight: 1.8 }}>
              Garanta seu momento em nosso balcão ou salão. Utilizamos a plataforma oficial do DGuests para gerenciamento de reservas em tempo real.
            </p>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              id="reserva-online"
              href="https://dg.dguests.com/reserva_mesa/yumsushi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                justifyContent: "center",
                padding: "16px 32px",
                fontSize: 16,
                fontWeight: 600,
                width: "100%",
                maxWidth: 400,
              }}
            >
              Reservar Mesa Online
            </a>
            
            <a
              href="https://api.whatsapp.com/send?phone=5511960175164&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Yum%20Sushi."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "var(--texto-secundario)",
                textDecoration: "underline",
                fontFamily: "Montserrat, sans-serif",
                cursor: "pointer",
                paddingLeft: 4,
              }}
            >
              Ou se preferir, fale conosco pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Info */}
        <div
          className="reveal"
          style={{ display: "flex", flexDirection: "column", gap: 32 }}
        >
          {/* Horários */}
          <div className="card-base" style={{ padding: "28px 28px" }}>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "var(--texto-principal)",
                marginBottom: 20,
                fontFamily: "Montserrat, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              Horários de Funcionamento
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {horarios.map((h) => (
                <div
                  key={h.dia}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--borda-card)",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: "var(--texto-principal)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {h.dia}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "var(--cor-conversao)",
                      fontWeight: 700,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {h.h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive grid override */}
      <style>{`
        @media (max-width: 768px) {
          .reserva-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
