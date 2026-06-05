import type { Metadata } from "next";
import {
  Montserrat,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yumsushi.com.br"),
  title: "Yum Sushi | Rodízio Japonês no Jabaquara – São Paulo",
  description:
    "Experimente o melhor rodízio japonês do Jabaquara. Sushi premium, sashimi fresco e ambiente sofisticado na Av. Cupecê. Reserve sua mesa agora!",
  keywords:
    "sushi jabaquara, rodízio japonês são paulo, yum sushi, sushi sp, temaki jabaquara, sashimi são paulo",
  openGraph: {
    title: "Yum Sushi | Rodízio Japonês no Jabaquara",
    description:
      "Frescor, sabor e qualidade em cada peça. O sushi que conquistou o Jabaquara. Reserve sua mesa!",
    url: "https://yumsushi.com.br",
    siteName: "Yum Sushi",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Yum Sushi — Rodízio Japonês no Jabaquara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yum Sushi | Rodízio Japonês no Jabaquara",
    description: "Frescor, sabor e qualidade em cada peça. Reserve sua mesa!",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Yum Sushi",
              image: "/images/hero.png",
              description:
                "Rodízio japonês premium no Jabaquara, São Paulo. Sushi fresco, sashimi e muito mais.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenida Cupecê, 2346",
                addressLocality: "Jardim Jabaquara",
                addressRegion: "SP",
                postalCode: "04360-001",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.6631096,
                longitude: -46.6620661,
              },
              url: "https://yumsushi.com.br",
              telephone: "+5511000000000",
              servesCuisine: "Japanese",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "12:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "12:00",
                  closes: "00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "12:00",
                  closes: "23:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "1200",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${cormorantGaramond.variable} ${playfairDisplay.variable} tema-1`}
      >
        {children}
      </body>
    </html>
  );
}
