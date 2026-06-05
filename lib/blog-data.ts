export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Cardápio" | "Eventos" | "Dicas" | "Novidades";
  date: string;
  image: string;
  readTime: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "rodizio-japones-jabaquara-yum-sushi",
    title: "Rodízio japonês no Jabaquara: por que o Yum Sushi é o favorito da região",
    excerpt:
      "Descubra o que torna o Yum Sushi o destino favorito de quem busca rodízio japonês de qualidade no Jabaquara. Da culinária ao ambiente, tudo foi pensado para você.",
    category: "Cardápio",
    date: "2026-05-20",
    image:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=80",
    readTime: "5 min",
    content: `
      <h2>O Jabaquara ganhou um novo favorito</h2>
      <p>Quando o assunto é rodízio japonês no Jabaquara, um nome vem imediatamente à mente dos moradores da região: Yum Sushi. Localizado na Avenida Cupecê, 2346, o restaurante se tornou referência em qualidade, ambiente e atendimento.</p>
      
      <h2>O que faz o Yum Sushi ser diferente?</h2>
      <p>A resposta está em cada detalhe. Dos ingredientes selecionados diariamente ao preparo cuidadoso de cada peça, o Yum Sushi mantém um padrão de excelência que conquistou mais de mil avaliações 5 estrelas no Google.</p>
      
      <h3>Peixes frescos, todo dia</h3>
      <p>O Yum Sushi prioriza ingredientes de procedência confiável, garantindo que cada fatia de salmão ou atum chegue à sua mesa no ponto ideal.</p>
      
      <h3>Rodízio completo e sem pressa</h3>
      <p>Diferente de muitos restaurantes que apressam os clientes, aqui você tem tempo para apreciar cada momento. O rodízio inclui sashimis, sushis, uramakis, temakis, entradas quentes e muito mais.</p>
      
      <h2>Reserve sua mesa agora</h2>
      <p>Venha descobrir por que o Yum Sushi é o favorito do Jabaquara. Aceitamos reservas pelo WhatsApp, e também recebemos os principais vales-refeição do mercado: VR, Alelo, Sodexo e Ticket Restaurante.</p>
    `,
  },
  {
    slug: "sashimi-vs-sushi-diferenca",
    title: "Sashimi vs Sushi: qual a diferença e como apreciar cada um",
    excerpt:
      "Muita gente confunde sashimi com sushi. Aprenda de uma vez por todas a diferença entre essas duas delícias da culinária japonesa e descubra qual combina mais com o seu paladar.",
    category: "Dicas",
    date: "2026-05-10",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80",
    readTime: "4 min",
    content: `
      <h2>A confusão mais comum da culinária japonesa</h2>
      <p>Seja você um iniciante ou um frequentador habitual de restaurantes japoneses, é comum confundir sashimi com sushi. Mas a diferença é fundamental — e conhecê-la vai melhorar muito a sua experiência.</p>
      
      <h2>O que é Sashimi?</h2>
      <p>Sashimi é peixe (ou frutos do mar) fatiado e servido cru, sem arroz. É a forma mais pura de apreciar a qualidade do ingrediente. No Yum Sushi, nosso sashimi de salmão é cortado em fatias generosas e servido com shoyu e wasabi.</p>
      
      <h3>Como apreciar o sashimi</h3>
      <p>O ideal é consumir o sashimi primeiro, antes de qualquer outro prato, quando o paladar está limpo. Mergulhe levemente no shoyu — nunca deixe o peixe "nadar" no molho — e aprecie o sabor natural.</p>
      
      <h2>O que é Sushi?</h2>
      <p>Sushi é qualquer preparação que leve arroz temperado com vinagre. O nigiri (bolinho de arroz com peixe por cima) e o maki (enrolado em alga) são os mais conhecidos.</p>
      
      <h2>Qual pedir no Yum Sushi?</h2>
      <p>A boa notícia: você não precisa escolher. Nosso rodízio inclui as duas opções em abundância!</p>
    `,
  },
  {
    slug: "almoco-em-grupo-yum-sushi",
    title: "Como organizar um almoço em grupo no Yum Sushi",
    excerpt:
      "Aniversário, confraternização ou simplesmente aquele almoço especial com amigos? O Yum Sushi tem tudo que você precisa para um evento inesquecível. Veja como organizar.",
    category: "Eventos",
    date: "2026-04-28",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    readTime: "3 min",
    content: `
      <h2>O Yum Sushi é perfeito para grupos</h2>
      <p>Seja uma confraternização de empresa, aniversário ou simplesmente aquele almoço especial com a família, o Yum Sushi tem espaço e estrutura para receber seu grupo com conforto e qualidade.</p>
      
      <h2>Passo a passo para organizar</h2>
      
      <h3>1. Faça sua reserva com antecedência</h3>
      <p>Para grupos acima de 8 pessoas, recomendamos reservar com pelo menos 48 horas de antecedência. Entre em contato via WhatsApp para garantir seu espaço.</p>
      
      <h3>2. Informe restrições alimentares</h3>
      <p>Tem alguém no grupo com alergia ou preferência? Nos avise com antecedência e faremos questão de atender da melhor forma possível.</p>
      
      <h3>3. Escolha o melhor dia e horário</h3>
      <p>Para grupos grandes, sugerimos o almoço de segunda a quinta (12h–15h) ou o jantar (19h–23h), horários em que temos maior disponibilidade para atender com atenção especial.</p>
      
      <h2>Formas de pagamento</h2>
      <p>Aceitamos dinheiro, cartões de crédito e débito, Pix e os principais vales: VR, Alelo, Sodexo e Ticket Restaurante. Dividir a conta entre o grupo é simples e rápido.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
