"use client";

import { useEffect, useRef } from "react";

const WA_LINK = "https://wa.me/5511000000000";

export default function Delivery() {
  const ref = useRef<HTMLDivElement>(null);

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
      id="delivery"
      ref={ref}
      style={{
        background: "var(--cor-card)",
        borderTop: "1px solid var(--borda-card)",
        borderBottom: "1px solid var(--borda-card)",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
        }}
      >
        {/* Emoji */}
        <div
          className="reveal"
          style={{ fontSize: 48, lineHeight: 1, marginBottom: 4 }}
        >
          🛵
        </div>

        {/* Title */}
        <h2
          className="reveal section-title"
          style={{ transitionDelay: "0.1s", marginBottom: 16 }}
        >
          O sabor do Yum na sua casa
        </h2>

        {/* Subtitle */}
        <p
          className="reveal section-subtitle"
          style={{ transitionDelay: "0.2s", textAlign: "center", marginBottom: 32 }}
        >
          Nosso sushi premium direto na sua porta. Peça agora pelo WhatsApp e
          receba onde você estiver.
        </p>

        {/* CTA */}
        <a
          id="delivery-cta"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary reveal"
          style={{
            fontSize: 15,
            padding: "16px 36px",
            transitionDelay: "0.3s",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.559 4.136 1.534 5.874L0 24l6.336-1.502A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.5-5.261-1.373l-.378-.222-3.762.892.934-3.653-.245-.39A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Pedir pelo WhatsApp
        </a>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--texto-secundario)", fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cor-estrutural)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>Entrega rápida</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--texto-secundario)", fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cor-estrutural)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            <span>Embalagem premium</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--texto-secundario)", fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cor-estrutural)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
            </svg>
            <span>Temperatura ideal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
