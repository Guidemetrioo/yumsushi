"use client";

import { useEffect } from "react";

const themes = [
  { id: 1, name: "CARVÃO & OURO", cores: ["#0E0E10", "#C9A96E", "#E8B860"] },
  { id: 2, name: "ROBUSTA & COBRE", cores: ["#120C0A", "#B8722A", "#D4924A"] },
  { id: 3, name: "FUMAÇA & BRASA", cores: ["#121416", "#E8602A", "#D4843A"] },
  { id: 4, name: "MUSGO NEGRO", cores: ["#050D10", "#FFFFFF", "#C9A96E"] },
  { id: 5, name: "BORGONHA & BRONZE", cores: ["#15080E", "#CD7F32", "#E5A96F"] },
  { id: 6, name: "NOITE & PLATINA", cores: ["#080A10", "#A8B8C8", "#FFFFFF"] },
  { id: 7, name: "ABISMO & JADE", cores: ["#050E0F", "#3AB888", "#5AD4A4"] },
  { id: 8, name: "TAUPE & OURO ROSA", cores: ["#151210", "#B76E79", "#E8C3C9"] },
  { id: 9, name: "OBSIDIANA & PRATA", cores: ["#0A0A0A", "#A0A0A0", "#E0E0E0"] },
  { id: 10, name: "OMAKASE MINIMALISTA", cores: ["#11100F", "#E6DFD3", "#D4A843"] },
];

export default function ThemeSwitcher() {
  useEffect(() => {
    // Load saved theme
    const saved = localStorage.getItem("yumsushi-tema");
    if (saved) {
      document.body.className = document.body.className
        .replace(/tema-\d+/, "")
        .trim();
      document.body.classList.add(`tema-${saved}`);
    }
  }, []);

  const applyTheme = (id: number) => {
    const body = document.body;
    // Remove existing tema class
    const classes = body.className.split(" ").filter((c) => !c.match(/^tema-\d+$/));
    classes.push(`tema-${id}`);
    body.className = classes.join(" ");
    localStorage.setItem("yumsushi-tema", String(id));
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "16px",
        padding: "16px",
        width: "220px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "9px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "12px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 600,
        }}
      >
        Seletor Temporário
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {themes.map((t) => (
          <button
            key={t.id}
            id={`theme-btn-${t.id}`}
            onClick={() => applyTheme(t.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "7px 10px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.05)";
            }}
          >
            {/* Color preview */}
            <div style={{ display: "flex", gap: "3px", flexShrink: 0 }}>
              {t.cores.map((cor, i) => (
                <div
                  key={i}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: cor,
                    border: "1px solid rgba(255,255,255,0.15)",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
            <span
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "9px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              {t.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
