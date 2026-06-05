import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Yum Sushi — Dicas, Cardápio e Novidades",
  description:
    "Explore o blog do Yum Sushi. Dicas de culinária japonesa, novidades do restaurante, guias de sushi e sashimi e muito mais.",
};

const categorias = ["Todos", "Cardápio", "Eventos", "Dicas", "Novidades"];

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: 96,
        paddingBottom: 96,
        padding: "96px 24px",
      }}
    >
      {/* Back link */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            color: "var(--texto-secundario)",
            textDecoration: "none",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 500,
            marginBottom: 48,
          }}
        >
          ← Voltar ao início
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--cor-estrutural)",
              marginBottom: 12,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            — Blog
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--texto-principal)",
              marginBottom: 16,
            }}
          >
            Conteúdo & Inspiração
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--texto-secundario)",
              maxWidth: 560,
              lineHeight: 1.6,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Dicas de culinária japonesa, novidades do Yum Sushi e tudo sobre a
            cultura gastronômica do Japão.
          </p>
        </div>

        {/* Category filter */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {categorias.map((cat) => (
            <button
              key={cat}
              id={`blog-cat-${cat.toLowerCase()}`}
              className="btn-pill"
              style={{ fontSize: 13 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 32,
          }}
        >
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="card-base"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: 240,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={blogPosts.indexOf(post) === 0}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "var(--cor-conversao)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
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
                  padding: "28px 28px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: 12,
                    color: "var(--texto-secundario)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--texto-principal)",
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    fontSize: 13,
                    color: "var(--texto-secundario)",
                    lineHeight: 1.65,
                    flex: 1,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--cor-conversao)",
                    textDecoration: "none",
                    fontFamily: "Montserrat, sans-serif",
                    marginTop: 8,
                  }}
                >
                  Ler Mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
