"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

const WA_LINK = "https://wa.me/5511000000000";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} ref={menuRef}>
      {/* Logo */}
      <a href="#inicio" className="flex items-center" style={{ height: 52 }}>
        <Image
          src="/images/logo-yum.png"
          alt="Yum Sushi Logo"
          width={48}
          height={48}
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </a>

      {/* Desktop Nav */}
      <ul
        className="hidden md:flex items-center gap-1"
        style={{ listStyle: "none" }}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            {link.href.startsWith("/") ? (
              <Link
                href={link.href}
                style={{
                  padding: "8px 12px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--texto-principal)",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "color 0.2s ease, background 0.2s ease",
                  display: "block",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--cor-conversao)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--texto-principal)";
                }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  padding: "8px 12px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--texto-principal)",
                  textDecoration: "none",
                  borderRadius: 6,
                  transition: "color 0.2s ease",
                  display: "block",
                  fontFamily: "Montserrat, sans-serif",
                  letterSpacing: "0.3px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--cor-conversao)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--texto-principal)";
                }}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <button
        id="mobile-menu-btn"
        className="md:hidden flex flex-col justify-center items-center"
        style={{
          width: 36,
          height: 36,
          gap: 5,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 4,
        }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menu"
        aria-expanded={mobileOpen}
      >
        <span
          style={{
            width: 22,
            height: 2,
            background: "var(--texto-principal)",
            borderRadius: 2,
            display: "block",
            transition: "all 0.3s ease",
            transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span
          style={{
            width: 22,
            height: 2,
            background: "var(--texto-principal)",
            borderRadius: 2,
            display: "block",
            transition: "all 0.3s ease",
            opacity: mobileOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 22,
            height: 2,
            background: "var(--texto-principal)",
            borderRadius: 2,
            display: "block",
            transition: "all 0.3s ease",
            transform: mobileOpen
              ? "rotate(-45deg) translate(5px, -5px)"
              : "none",
          }}
        />
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--navbar-scrolled)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid var(--borda-card)",
            padding: "12px 0 16px",
            display: "flex",
            flexDirection: "column",
            gap: 0,
            animation: "fadeInUp 0.2s ease forwards",
          }}
        >
          {/* Reservar Mesa — primeiro item mobile */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "8px 16px",
              padding: "14px 20px",
              background: "var(--cor-conversao)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              textAlign: "center",
              textDecoration: "none",
              borderRadius: 8,
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.5px",
            }}
          >
            📅 Reservar Mesa
          </a>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (!link.href.startsWith("/")) {
                  e.preventDefault();
                  handleNavClick(link.href);
                } else {
                  setMobileOpen(false);
                }
              }}
              style={{
                padding: "12px 24px",
                fontSize: 15,
                fontWeight: 500,
                color: "var(--texto-principal)",
                textDecoration: "none",
                fontFamily: "Montserrat, sans-serif",
                display: "block",
                borderBottom: "1px solid var(--borda-card)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
