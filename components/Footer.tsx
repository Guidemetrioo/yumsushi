"use client";

import Link from "next/link";
import Image from "next/image";

const WA_LINK = "https://wa.me/5511000000000";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#rodizio", label: "Rodízio" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#reserva", label: "Reserva" },
  { href: "/blog", label: "Blog" },
  { href: "#localizacao", label: "Localização" },
];

const horarios = [
  { dia: "Seg–Qui", h: "12h–15h | 19h–23h" },
  { dia: "Sex–Sáb", h: "12h–00h" },
  { dia: "Domingo", h: "12h–23h" },
];

const pagamentos = ["Dinheiro", "Crédito", "Débito", "Pix", "VR", "Alelo", "Sodexo", "Ticket"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--borda-card)",
        padding: "64px 24px 32px",
        background: "var(--bg-solid)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <Image
                src="/images/logo-yum.png"
                alt="Yum Sushi Logo"
                width={48}
                height={48}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--texto-secundario)",
                lineHeight: 1.7,
                maxWidth: 280,
                fontFamily: "Montserrat, sans-serif",
                fontStyle: "italic",
                marginBottom: 20,
              }}
            >
              Tradição japonesa no coração do Jabaquara.
            </p>
            {/* WhatsApp button */}
            <a
              id="footer-whatsapp"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 13 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.559 4.136 1.534 5.874L0 24l6.336-1.502A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.5-5.261-1.373l-.378-.222-3.762.892.934-3.653-.245-.39A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--cor-estrutural)",
                marginBottom: 16,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Menu
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("/") ? (
                    <Link
                      href={l.href}
                      style={{
                        fontSize: 13,
                        color: "var(--texto-secundario)",
                        textDecoration: "none",
                        fontFamily: "Montserrat, sans-serif",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--cor-conversao)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--texto-secundario)";
                      }}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      style={{
                        fontSize: 13,
                        color: "var(--texto-secundario)",
                        textDecoration: "none",
                        fontFamily: "Montserrat, sans-serif",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--cor-conversao)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--texto-secundario)";
                      }}
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Horários */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--cor-estrutural)",
                marginBottom: 16,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Horários
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {horarios.map((h) => (
                <div key={h.dia}>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--texto-principal)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {h.dia}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--texto-secundario)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {h.h}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pagamento + Instagram */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--cor-estrutural)",
                marginBottom: 16,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Pagamento
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {pagamentos.map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: 11,
                    color: "var(--texto-secundario)",
                    background: "var(--borda-card)",
                    padding: "3px 10px",
                    borderRadius: 999,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Instagram */}
            <a
              id="footer-instagram"
              href="https://instagram.com/yumsushioficialsp"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: "var(--cor-estrutural)",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--cor-conversao)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "var(--cor-estrutural)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @yumsushioficialsp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--borda-card)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "var(--texto-secundario)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            © {currentYear} Yum Sushi. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontSize: 12,
              color: "var(--texto-secundario)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Av. Cupecê, 2346 · Jardim Jabaquara · São Paulo – SP
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
