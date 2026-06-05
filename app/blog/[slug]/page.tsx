import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog Yum Sushi`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 800, height: 600, alt: post.title }],
      type: "article",
      publishedTime: post.date,
      siteName: "Yum Sushi",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">
) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div style={{ minHeight: "100vh", paddingTop: 96 }}>
      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "Yum Sushi",
            },
            publisher: {
              "@type": "Organization",
              name: "Yum Sushi",
              logo: {
                "@type": "ImageObject",
                url: "/images/logo.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://yumsushi.com.br/blog/${post.slug}`,
            },
          }),
        }}
      />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 96px" }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 40 }}>
          <Link
            href="/"
            style={{
              color: "var(--texto-secundario)",
              textDecoration: "none",
              fontSize: 13,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Início
          </Link>
          <span
            style={{
              margin: "0 8px",
              color: "var(--texto-secundario)",
              fontSize: 13,
            }}
          >
            /
          </span>
          <Link
            href="/blog"
            style={{
              color: "var(--texto-secundario)",
              textDecoration: "none",
              fontSize: 13,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Blog
          </Link>
          <span
            style={{
              margin: "0 8px",
              color: "var(--texto-secundario)",
              fontSize: 13,
            }}
          >
            /
          </span>
          <span
            style={{
              color: "var(--cor-conversao)",
              fontSize: 13,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {post.category}
          </span>
        </nav>

        {/* Category + Date */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              background: "var(--cor-conversao)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "4px 14px",
              borderRadius: 999,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontSize: 13,
              color: "var(--texto-secundario)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {formatDate(post.date)} · ⏱ {post.readTime} de leitura
          </span>
        </div>

        {/* Title H1 */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--texto-principal)",
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          {post.title}
        </h1>

        {/* Hero image */}
        <div
          style={{
            position: "relative",
            borderRadius: "var(--card-radius)",
            overflow: "hidden",
            marginBottom: 48,
            aspectRatio: "16/9",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Article content */}
        {post.content && (
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: 15,
              color: "var(--texto-principal)",
              lineHeight: 1.8,
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {/* Internal link CTA */}
        <div
          style={{
            marginTop: 48,
            padding: "32px",
            background: "var(--cor-card)",
            border: "1px solid var(--borda-card)",
            borderRadius: "var(--card-radius)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 700,
              color: "var(--texto-principal)",
              marginBottom: 12,
            }}
          >
            Pronto para experimentar?
          </p>
          <p
            style={{
              fontSize: 13,
              color: "var(--texto-secundario)",
              marginBottom: 20,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Reserve sua mesa agora e venha viver a experiência Yum Sushi.
          </p>
          <a
            href="https://wa.me/5511000000000?text=Olá!%20Li%20o%20blog%20e%20gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Reservar Mesa pelo WhatsApp
          </a>
        </div>

        {/* Other posts */}
        {otherPosts.length > 0 && (
          <div style={{ marginTop: 64 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 700,
                color: "var(--texto-principal)",
                marginBottom: 28,
              }}
            >
              Continue lendo
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {otherPosts.map((op) => (
                <Link
                  key={op.slug}
                  href={`/blog/${op.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="card-base"
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: 160,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={op.image}
                        alt={op.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                    <div style={{ padding: "16px 20px" }}>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: "var(--cor-conversao)",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {op.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "var(--texto-principal)",
                          lineHeight: 1.3,
                          marginTop: 8,
                        }}
                      >
                        {op.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
