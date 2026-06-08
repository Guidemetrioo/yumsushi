"use client";

import { useEffect, useRef } from "react";

const WA_LINK = "https://wa.me/5511960175164";

const badges = [
  { text: "4.8 Google", delay: "0s" },
  { text: "Jabaquara, SP", delay: "0.3s" },
  { text: "Aceita Vale Refeição", delay: "0.6s" },
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
          willChange: "transform",
        }}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content" style={{ width: "100%" }}>
        {/* Location tag */}
        <div
          className="hero-badges-container"
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
              <span>{b.text}</span>
            </div>
          ))}
        </div>

        {/* Main title */}
        <h1 className="hero-title">O sushi que<br />conquistou o Jabaquara</h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Frescor, sabor e qualidade em cada peça.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-buttons-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 8,
          }}
        >
          <a
            id="hero-cta-reservar"
            href="https://dg.dguests.com/reserva_mesa/yumsushi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 15 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 2 }}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
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
