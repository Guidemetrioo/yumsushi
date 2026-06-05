"use client";

import { useEffect, useRef } from "react";

const WA_LINK = "https://wa.me/5511000000000";

const badges = [
  { icon: "⭐", text: "4.8 Google", delay: "0s" },
  { icon: "📍", text: "Jabaquara, SP", delay: "0.3s" },
  { icon: "💳", text: "Aceita Vale Refeição", delay: "0.6s" },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Parallax on scroll
    const onScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const heroEl = heroRef.current.querySelector(
        ".hero-bg"
      ) as HTMLElement | null;
      if (heroEl) {
        heroEl.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="hero-section"
      aria-label="Bem-vindo ao Yum Sushi"
    >
      {/* Background image with parallax */}
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: "-20% 0 0 0",
          backgroundImage: "url(https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=1600&q=90)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content" style={{ width: "100%" }}>
        {/* Location tag */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 24,
          }}
        >
          {badges.map((b) => (
            <div
              key={b.text}
              className="hero-badge"
              style={{ animationDelay: b.delay }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Location label */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "var(--cor-conversao)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 12,
            fontFamily: "Montserrat, sans-serif",
            textShadow: "0 1px 8px rgba(0,0,0,0.5)",
          }}
        >
          Jardim Jabaquara, São Paulo
        </p>

        {/* Main title */}
        <h1 className="hero-title">O sushi que<br />conquistou o Jabaquara</h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Frescor, sabor e qualidade em cada peça.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 8,
          }}
        >
          <a
            id="hero-cta-reservar"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 15 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.559 4.136 1.534 5.874L0 24l6.336-1.502A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.5-5.261-1.373l-.378-.222-3.762.892.934-3.653-.245-.39A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Reservar Mesa
          </a>
          <a
            id="hero-cta-rodizio"
            href="#rodizio"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("rodizio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
            style={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.5)",
              fontSize: 15,
            }}
          >
            Ver Rodízio
          </a>
        </div>
      </div>
    </section>
  );
}
