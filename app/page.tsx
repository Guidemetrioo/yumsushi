import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Delivery from "@/components/Delivery";
import Rodizio from "@/components/Rodizio";
import NossaHistoria from "@/components/NossaHistoria";
import Galeria from "@/components/Galeria";
import Avaliacoes from "@/components/Avaliacoes";
import Reserva from "@/components/Reserva";
import Blog from "@/components/Blog";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Delivery />
        <Rodizio />
        <NossaHistoria />
        <Galeria />
        <Avaliacoes />
        <Reserva />
        <Blog />
        <Localizacao />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
