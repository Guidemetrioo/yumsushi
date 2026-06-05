"use client";

import { useEffect, useRef } from "react";

const LAT = -23.6631096;
const LNG = -46.6620661;

const WAZE_URL = `https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`;
const GMAPS_URL = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;
const UBER_URL = `https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=${LAT}&dropoff[longitude]=${LNG}&dropoff[nickname]=Yum+Sushi`;

export default function Localizacao() {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section
      id="localizacao"
      ref={ref}
      style={{
        padding: "120px 24px",
        borderTop: "1px solid var(--borda-card)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 60 }}>
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
            — Como Chegar
          </p>
          <h2 className="section-title">Localização</h2>
          <p className="section-subtitle" style={{ marginTop: 12 }}>
            Avenida Cupecê, 2346 – Jardim Jabaquara, São Paulo – SP
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: 40,
            alignItems: "start",
          }}
          className="localizacao-grid"
        >
          {/* Map embed */}
          <div
            className="reveal"
            style={{
              borderRadius: "var(--card-radius)",
              overflow: "hidden",
              border: "1px solid var(--borda-card)",
              aspectRatio: "16/9",
            }}
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d${LNG}!3d${LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM5JzQ3LjIiUyA0NsKwMzknNDMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890`}
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: 300,
                filter: "invert(90%) hue-rotate(180deg) contrast(110%) grayscale(20%)"
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Yum Sushi — Av. Cupecê, 2346, Jardim Jabaquara, SP"
            />
          </div>

          {/* Info card */}
          <div
            className="reveal card-base"
            style={{
              padding: "32px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              transitionDelay: "0.15s",
            }}
          >
            {/* Address */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--cor-estrutural)",
                  marginBottom: 10,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Endereço
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--texto-principal)",
                  lineHeight: 1.6,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Avenida Cupecê, 2346<br />
                Jardim Jabaquara<br />
                São Paulo – SP
              </p>
            </div>

            {/* Navigation buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--cor-estrutural)",
                  marginBottom: 2,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Como chegar
              </p>

              <a
                id="loc-gmaps"
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: "center", width: "100%" }}
              >
                🗺️ Google Maps
              </a>

              <a
                id="loc-waze"
                href={WAZE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ justifyContent: "center", width: "100%" }}
              >
                🚗 Abrir no Waze
              </a>

              <a
                id="loc-uber"
                href={UBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ justifyContent: "center", width: "100%" }}
              >
                🚕 Chamar Uber
              </a>
            </div>

            {/* Horário resumo */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--cor-estrutural)",
                  marginBottom: 10,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Horários
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--texto-secundario)",
                  lineHeight: 1.8,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Seg–Qui: 12h–15h e 19h–23h<br />
                Sex–Sáb: 12h–00h<br />
                Dom: 12h–17h e 17h–23h
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .localizacao-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
