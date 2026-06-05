"use client";

import { useEffect, useRef, useState } from "react";

interface Avaliacao {
  nome: string;
  texto: string;
  nota: number;
  data: string;
}

const avaliacoes: Avaliacao[] = [
  {
    nome: "Ana Carolina S.",
    texto:
      "Simplesmente incrível! O sashimi de salmão derrete na boca. Ambiente aconchegante e atendimento impecável. Voltarei com certeza!",
    nota: 5,
    data: "Março 2026",
  },
  {
    nome: "Roberto M.",
    texto:
      "Melhor rodízio japonês do Jabaquara sem dúvida. A variedade é enorme e tudo muito fresco. O hot roll é sensacional!",
    nota: 5,
    data: "Fevereiro 2026",
  },
  {
    nome: "Fernanda T.",
    texto:
      "Fui no aniversário da minha mãe e foi uma experiência incrível. O pessoal super atencioso, a comida de altíssima qualidade.",
    nota: 5,
    data: "Janeiro 2026",
  },
  {
    nome: "Marcos L.",
    texto:
      "O temaki aqui é outro nível. Ingredientes frescos, porções generosas e preço justo. Frequento toda semana!",
    nota: 5,
    data: "Março 2026",
  },
  {
    nome: "Juliana R.",
    texto:
      "Atendimento de primeira e comida deliciosa. O Yum Sushi se tornou o restaurante favorito da nossa família no Jabaquara.",
    nota: 5,
    data: "Fevereiro 2026",
  },
  {
    nome: "Diego F.",
    texto:
      "Fiz reserva pelo WhatsApp e foi super fácil. O lugar é lindo, a comida excelente. O missoshiru é perfeito para começar!",
    nota: 5,
    data: "Dezembro 2025",
  },
  {
    nome: "Patricia N.",
    texto:
      "Visitei várias vezes e a qualidade é sempre constante. Niguiri maçaricado é imperdível. Muito bom também que aceitam VR.",
    nota: 5,
    data: "Janeiro 2026",
  },
  {
    nome: "Carlos E.",
    texto:
      "Um dos melhores restaurantes japoneses de São Paulo, não só do Jabaquara! Sashimi fresco, atendimento ótimo. Recomendo muito!",
    nota: 5,
    data: "Março 2026",
  },
];

export default function Avaliacoes() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const itemsPerView = useRef(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) itemsPerView.current = 1;
      else if (window.innerWidth < 1024) itemsPerView.current = 2;
      else itemsPerView.current = 3;
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

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

    // Auto-advance
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const max = avaliacoes.length - itemsPerView.current;
        return prev >= max ? 0 : prev + 1;
      });
    }, 4000);

    return () => {
      window.removeEventListener("resize", updateItemsPerView);
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const maxIndex = avaliacoes.length - itemsPerView.current;

  const renderStars = (n: number) => "★".repeat(n);

  return (
    <section
      id="avaliacoes"
      ref={ref}
      style={{
        padding: "120px 24px",
        background: "var(--bg-solid)",
        borderTop: "1px solid var(--borda-card)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header + rating */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 60,
          }}
        >
          <div>
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
              — O que dizem sobre nós
            </p>
            <h2 className="section-title">Avaliações</h2>
          </div>

          {/* Overall rating */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span
                style={{
                  fontSize: 56,
                  fontWeight: 800,
                  color: "var(--cor-conversao)",
                  fontFamily: "Montserrat, sans-serif",
                  lineHeight: 1,
                }}
              >
                4.8
              </span>
              <span
                style={{
                  fontSize: 20,
                  color: "var(--texto-secundario)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                / 5
              </span>
            </div>
            <p style={{ fontSize: 14, color: "#f5a623", letterSpacing: 2 }}>
              ★★★★★
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Yum+Sushi+Avenida+Cupec%C3%AA+2346"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                color: "var(--texto-secundario)",
                fontFamily: "Montserrat, sans-serif",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Baseado em 1.000+ avaliações no Google
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: 20,
              transform: `translateX(calc(-${current} * (100% / ${itemsPerView.current}) - ${current * 20}px))`,
              transition: "transform 0.5s ease",
            }}
          >
            {avaliacoes.map((av, idx) => (
              <div
                key={idx}
                className="card-base avaliacao-card"
                style={{
                  minWidth: "calc(33.333% - 14px)",
                  flexShrink: 0,
                  padding: "28px 28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Stars */}
                <p style={{ fontSize: 18, letterSpacing: 2, lineHeight: 1, color: "#f5a623" }}>
                  ★★★★★
                </p>

                {/* Text */}
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--texto-principal)",
                    lineHeight: 1.65,
                    fontFamily: "Montserrat, sans-serif",
                    fontStyle: "italic",
                    flex: 1,
                  }}
                >
                  &ldquo;{av.texto}&rdquo;
                </p>

                {/* Author */}
                <div
                  style={{
                    borderTop: "1px solid var(--borda-card)",
                    paddingTop: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--cor-estrutural)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 800,
                      color: "var(--bg-solid, #000)",
                      fontFamily: "Montserrat, sans-serif",
                      flexShrink: 0,
                    }}
                  >
                    {av.nome[0]}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "var(--texto-principal)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {av.nome}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "var(--texto-secundario)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {av.data} · Google
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 32,
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              id={`avaliacao-dot-${i}`}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 999,
                background:
                  i === current
                    ? "var(--cor-conversao)"
                    : "var(--borda-card)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Ir para avaliação ${i + 1}`}
            />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Yum+Sushi+Avenida+Cupec%C3%AA+2346"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: 13, textDecoration: "none" }}
          >
            ★ Ler todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
