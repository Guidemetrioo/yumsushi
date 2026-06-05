"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export default function Blog() {
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

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section
      id="blog"
      ref={ref}
      style={{
        padding: "120px 24px",
        borderTop: "1px solid var(--borda-card)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
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
              — Blog
            </p>
            <h2 className="section-title">Conteúdo & Inspiração</h2>
          </div>
          <Link
            href="/blog"
            className="btn-outline"
            style={{ flexShrink: 0 }}
          >
            Ver todos os posts →
          </Link>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32,
          }}
        >
          {blogPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="card-base reveal"
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: 140,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1)";
                  }}
                />
                {/* Category badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "var(--cor-conversao)",
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: 999,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "16px 20px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 11,
                    color: "var(--texto-secundario)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>⏱ {post.readTime} de leitura</span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--texto-principal)",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    fontSize: 12,
                    color: "var(--texto-secundario)",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {post.excerpt.length > 95
                    ? post.excerpt.substring(0, 95) + "..."
                    : post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--cor-conversao)",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    marginTop: 4,
                    transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = "12px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.gap = "6px";
                  }}
                >
                  Ler Mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
