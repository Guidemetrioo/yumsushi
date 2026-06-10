"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WA_LINK = "https://wa.me/5511960175164";
const WA_RESERVA = `${WA_LINK}?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Yum%20Sushi.`;

interface PriceOption {
  label: string;
  valor: string;
}

interface RodizioCard {
  id: string;
  nome: string;
  precoDestaque: string;
  precoDestaqueDesc: string;
  imagem: string;
  tabelaPrecos?: PriceOption[];
  incluso: string[];
  destaque?: boolean;
  tipo: "dupla" | "individual";
}

const rodizioCards: RodizioCard[] = [
  {
    id: "rodizio-premium-individual",
    nome: "Rodízio Premium Individual",
    precoDestaque: "R$ 98,90",
    precoDestaqueDesc: "por pessoa no almoço",
    imagem:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80",
    tabelaPrecos: [
      { label: "Almoço (Seg a Dom)", valor: "R$ 98,90 por pessoa" },
      { label: "Jantar (Seg a Qui)", valor: "R$ 119,90 por pessoa" },
      { label: "Jantar (Sex, Sáb, Dom e Feriados)", valor: "R$ 129,90 por pessoa" }
    ],
    incluso: [
      "Experiência individual completa",
      "Peça do seu jeito direto no tablet, servido na mesa",
      "Frutos do mar inclusos: Camarão, Lula, Polvo e Ovas",
      "Sobremesa inclusa no rodízio",
      "Sashimis (salmão, atum, peixe branco) e sushis contemporâneos",
      "Bebidas à parte"
    ],
    destaque: false,
    tipo: "individual",
  },
  {
    id: "rodizio-casal-almoco",
    nome: "Rodízio Casal / Dupla",
    precoDestaque: "R$ 159,90",
    precoDestaqueDesc: "o casal no almoço",
    imagem:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    tabelaPrecos: [
      { label: "Almoço (Seg a Sex)", valor: "R$ 159,90 o casal" }
    ],
    incluso: [
      "Promoção especial de almoço para 2 pessoas",
      "Válido de Segunda a Sexta no Almoço (exceto feriados)",
      "Frutos do mar inclusos: Camarão, Lula, Polvo e Ovas",
      "Sobremesa à vontade inclusa no rodízio",
      "Rodízio completo com sushis, sashimis, pratos quentes e frios",
      "Bebidas à parte"
    ],
    destaque: false,
    tipo: "dupla",
  },
  {
    id: "rodizio-casal-jantar",
    nome: "Rodízio Casal / Dupla",
    precoDestaque: "R$ 199,90",
    precoDestaqueDesc: "o casal no jantar (Seg a Qui)",
    imagem:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80",
    tabelaPrecos: [
      { label: "Jantar (Seg a Qui)", valor: "R$ 199,90 o casal" },
      { label: "Jantar (Sex, Sáb, Dom e Feriados)", valor: "R$ 212,90 o casal" }
    ],
    incluso: [
      "Promoção jantar especial para 2 pessoas",
      "Válido todas as noites no Jantar, incluindo finais de semana e feriados",
      "Frutos do mar inclusos: Camarão, Lula, Polvo e Ovas",
      "Sobremesa à vontade inclusa no rodízio",
      "Rodízio completo com sushis, sashimis, pratos quentes e frios",
      "Bebidas à parte"
    ],
    destaque: true,
    tipo: "dupla",
  },
];

const categorias = [
  { id: "sashimi", label: "Sashimi" },
  { id: "sushi", label: "Sushi" },
  { id: "uramaki", label: "Uramaki" },
  { id: "temaki", label: "Temaki" },
  { id: "entradas", label: "Entradas" },
  { id: "quentes", label: "Pratos Quentes" },
];

const cardapioItems: Record<
  string,
  { nome: string; desc: string; img: string }[]
> = {
  sashimi: [
    {
      nome: "Sashimi de Salmão",
      desc: "5 fatias frescas de salmão nobre",
      img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=300&q=75",
    },
    {
      nome: "Sashimi de Atum",
      desc: "5 fatias de atum vermelho premium",
      img: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=300&q=75",
    },
    {
      nome: "Sashimi de Peixe Branco",
      desc: "Tilápia ou Saint Peter, 5 fatias",
      img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=300&q=75",
    },
  ],
  sushi: [
    {
      nome: "Niguiri de Salmão",
      desc: "Arroz moldado com fatia de salmão",
      img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=300&q=75",
    },
    {
      nome: "Niguiri Maçaricado",
      desc: "Salmão grelhado levemente no maçarico",
      img: "https://images.unsplash.com/photo-1617196034499-8ddb2e12c8c2?w=300&q=75",
    },
  ],
  uramaki: [
    {
      nome: "Uramaki Califórnia",
      desc: "Kani, pepino, cream cheese e gergelim",
      img: "https://images.unsplash.com/photo-1617196034148-f85d3c8d4b95?w=300&q=75",
    },
    {
      nome: "Uramaki Tropical",
      desc: "Salmão, manga e cream cheese",
      img: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=300&q=75",
    },
    {
      nome: "Hot Roll",
      desc: "Empanado e frito, recheio de salmão",
      img: "https://images.unsplash.com/photo-1617196034085-e94ce6868b92?w=300&q=75",
    },
  ],
  temaki: [
    {
      nome: "Temaki de Salmão",
      desc: "Cone de alga com salmão fresco",
      img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=75",
    },
    {
      nome: "Temaki de Camarão",
      desc: "Cone com camarão temperado e cream cheese",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=75",
    },
  ],
  entradas: [
    {
      nome: "Gyoza",
      desc: "Pastel japonês grelhado, 6 unidades",
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&q=75",
    },
    {
      nome: "Edamame",
      desc: "Soja cozida no vapor com sal marinho",
      img: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=75",
    },
    {
      nome: "Missoshiru",
      desc: "Sopa de missô com tofu e cebolinha",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=75",
    },
  ],
  quentes: [
    {
      nome: "Yakissoba de Frango",
      desc: "Macarrão frito com legumes e frango",
      img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=300&q=75",
    },
    {
      nome: "Lamen",
      desc: "Caldo rico com macarrão, ovo e chashu",
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&q=75",
    },
  ],
};

export default function Rodizio() {
  const [activeCategoria, setActiveCategoria] = useState("sashimi");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".reveal").forEach((el) => {
            el.classList.add("visible");
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("rodizio");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="rodizio" className="section-container-full-width" style={{ overflow: "hidden" }}>
      <div className="section-wrapper" style={{ paddingTop: 0, paddingBottom: 0 }}>
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
            — Nossa Proposta
          </p>
          <h2 className="section-title">Escolha seu Rodízio</h2>
          <p className="section-subtitle">
            Cada opção foi pensada para oferecer o máximo de prazer gastronômico.
            Confira abaixo nossos valores e itens inclusos.
          </p>
        </div>

        {/* Flat Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {rodizioCards.map((card, idx) => (
            <div
              key={card.id}
              id={card.id}
              className="card-base reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: card.destaque
                  ? `2px solid var(--cor-conversao)`
                  : `1px solid var(--borda-card)`,
                transitionDelay: `${idx * 0.1}s`,
                overflow: "hidden",
              }}
            >
              {/* Destaque badge */}
              {card.destaque && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    zIndex: 10,
                    background: "var(--cor-conversao)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Mais Popular
                </div>
              )}

              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: 200,
                  overflow: "hidden",
                  borderRadius: `var(--card-radius) var(--card-radius) 0 0`,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={card.imagem}
                  alt={card.nome}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content Block */}
              <div
                style={{
                  padding: "24px 24px 24px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                {/* Header (Type & Name & Destaque Price) */}
                <div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "var(--cor-estrutural)",
                      marginBottom: 6,
                      display: "block",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {card.tipo === "dupla" ? "PROMOÇÃO CASAL / DUPLA" : "RODÍZIO INDIVIDUAL"}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--texto-principal)",
                      marginBottom: 8,
                    }}
                  >
                    {card.nome}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      className="price-tag"
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: "var(--cor-conversao)",
                        fontFamily: "var(--font-display, Cormorant Garamond, serif)",
                        lineHeight: 1.1,
                      }}
                    >
                      {card.precoDestaque}
                    </span>
                    {card.precoDestaqueDesc && (
                      <span
                        style={{
                          fontSize: 12,
                          color: "var(--texto-secundario)",
                          fontWeight: 500,
                        }}
                      >
                        ({card.precoDestaqueDesc})
                      </span>
                    )}
                  </div>
                </div>

                {/* Table of Prices */}
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--cor-estrutural)",
                      marginBottom: 8,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Valores do Rodízio
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      borderBottom: "1px solid var(--borda-card)",
                      paddingBottom: 14,
                    }}
                  >
                    {card.tabelaPrecos?.map((p, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 12,
                          color: "var(--texto-principal)",
                        }}
                      >
                        <span style={{ fontWeight: 500 }}>{p.label}</span>
                        <span style={{ color: "var(--cor-conversao)", fontWeight: 700 }}>{p.valor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What is included */}
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--cor-estrutural)",
                      marginBottom: 8,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    O que está incluso
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {card.incluso.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 12,
                          color: "var(--texto-principal)",
                          lineHeight: 1.4,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--cor-conversao)",
                            fontWeight: 700,
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div style={{ marginTop: 8 }}>
                  <a
                    href="https://dg.dguests.com/reserva_mesa/yumsushi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Reservar Agora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Cardápio Section ── */}
        <div id="cardapio" style={{ paddingTop: 60 }}>
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
              — Explore
            </p>
            <h2 className="section-title">Nosso Cardápio</h2>
          </div>

          {/* Category pills */}
          <div
            className="reveal"
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            {categorias.map((cat) => (
              <button
                key={cat.id}
                id={`cat-${cat.id}`}
                className={`btn-pill ${activeCategoria === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategoria(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 32,
            }}
          >
            {(cardapioItems[activeCategoria] ?? []).map((item) => (
              <div
                key={item.nome}
                className="card-base"
                style={{
                  overflow: "hidden",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.nome}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, 240px"
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <h4
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--texto-principal)",
                      marginBottom: 6,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.nome}
                  </h4>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--texto-secundario)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
