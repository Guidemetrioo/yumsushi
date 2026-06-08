"use client";

import { useEffect, useRef } from "react";

const statsData = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--cor-conversao)" }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    value: "4.8",
    label: "Google",
    url: "https://www.google.com/maps/search/?api=1&query=Yum+Sushi+Avenida+Cupec%C3%AA+2346",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--cor-conversao)" }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    value: "1.000+",
    label: "Avaliações",
    url: "https://www.google.com/maps/search/?api=1&query=Yum+Sushi+Avenida+Cupec%C3%AA+2346",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--cor-estrutural)" }}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    value: "Jabaquara",
    label: "São Paulo",
    url: "#localizacao",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--cor-estrutural)" }}>
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    value: "VR/Alelo",
    label: "Sodexo/Ticket",
    url: "#footer",
  },
];

export default function NossaHistoria() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) => {
            el.classList.add("visible");
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nossa-historia"
      ref={ref}
      className="section-container-no-border"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background photo + overlay */}
      <div
        className="nossa-historia-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.55)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        {/* Decorative line */}
        <div
          className="reveal"
          style={{
            width: 48,
            height: 2,
            background: "var(--cor-estrutural)",
            marginBottom: 24,
          }}
        />

        <p
          className="reveal"
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "var(--cor-estrutural)",
            marginBottom: 16,
            fontFamily: "Montserrat, sans-serif",
            transitionDelay: "0.05s",
          }}
        >
          — Nossa História
        </p>

        <h2
          className="reveal section-title"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
            maxWidth: 700,
            transitionDelay: "0.1s",
          }}
        >
          Tradição japonesa no<br />
          coração do Jabaquara
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.75,
            maxWidth: 600,
            margin: "20px 0 24px",
            fontFamily: "Montserrat, sans-serif",
            transitionDelay: "0.2s",
          }}
        >
          O Yum Sushi nasceu do amor pela culinária japonesa e do desejo de
          trazer o autêntico sabor do Japão para a Zona Sul de São Paulo. Cada
          peça que chega à sua mesa é preparada com ingredientes selecionados
          diariamente, respeitando a tradição e celebrando o frescor.
        </p>

        {/* Highlight quote */}
        <blockquote
          className="reveal"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            fontStyle: "italic",
            color: "var(--cor-conversao)",
            borderLeft: "3px solid var(--cor-estrutural)",
            paddingLeft: 24,
            margin: "32px 0 48px",
            transitionDelay: "0.3s",
          }}
        >
          &ldquo;Cada peça conta uma história.<br />
          A sua começa aqui.&rdquo;
        </blockquote>

        {/* Stats */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 32,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "40px 0",
            marginTop: 48,
            transitionDelay: "0.4s",
          }}
        >
          {statsData.map((stat) => {
            const isExternal = stat.url.startsWith("http") || stat.url.startsWith("#");
            const CardTag = "a";
            
            return (
              <CardTag
                key={stat.value}
                href={stat.url}
                target={stat.url.startsWith("http") ? "_blank" : undefined}
                rel={stat.url.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {stat.icon}
                  <span
                    style={{
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      color: "var(--cor-estrutural)",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 32,
                    fontWeight: 300,
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </p>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
