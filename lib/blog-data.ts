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
    slug: "comemore-aniversario-yum-sushi",
    title: "Comemore seu aniversário no Yum Sushi e viva uma experiência inesquecível",
    excerpt:
      "Quer comemorar seu aniversário na Zona Sul? Descubra por que o Yum Sushi é o lugar perfeito para reunir amigos e saborear um rodízio completo com frutos do mar.",
    category: "Eventos",
    date: "2026-05-28",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    readTime: "4 min",
    content: `
      <h2>O local ideal para sua celebração</h2>
      <p>Comemorar o aniversário é um momento especial, e a escolha do restaurante faz toda a diferença. O Yum Sushi, localizado no coração do Jabaquara, oferece a atmosfera perfeita com iluminação acolhedora, música agradável e um atendimento impecável preparado para receber grupos de todos os tamanhos.</p>
      
      <h2>Rodízio completo com frutos do mar</h2>
      <p>Para comemorações, nada melhor do que o nosso rodízio premium completo. Seus convidados poderão desfrutar de uma grande variedade de sashimis frescos de salmão, atum e peixe branco, além de camarão, lula, polvo e ovas especiais. E o melhor de tudo: a sobremesa está inclusa e é servida à vontade.</p>
      
      <h2>Praticidade nas reservas para grupos</h2>
      <p>Organizar um evento em grupo exige facilidade. No Yum Sushi, você pode gerenciar sua reserva de mesa diretamente pelo link oficial do DGuests, garantindo comodidade e confirmação imediata para todos os seus convidados.</p>
    `,
  },
  {
    slug: "rodizio-casal-dupla-promocao",
    title: "Conheça a Promoção Especial de Rodízio para Casal ou Dupla no Yum Sushi",
    excerpt:
      "Buscando o date perfeito ou quer dividir um rodízio completo com alguém especial? Saiba tudo sobre a promoção de casal ou dupla no Yum Sushi.",
    category: "Novidades",
    date: "2026-05-15",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80",
    readTime: "5 min",
    content: `
      <h2>O melhor custo-benefício para compartilhar</h2>
      <p>Se você estava procurando um rodízio japonês completo para dividir com um amigo, parceiro ou familiar, a promoção de Casal ou Dupla do Yum Sushi é a escolha ideal. Com preços especiais para duas pessoas, a promoção está disponível no almoço e no jantar.</p>
      
      <h2>Valores Promocionais</h2>
      <p>Confira a tabela de valores vigentes para o casal ou dupla:</p>
      <ul>
        <li>Almoço (Segunda a Sexta): R$ 159,90 o casal (exceto feriados)</li>
        <li>Jantar (Segunda a Quinta): R$ 199,90 o casal</li>
        <li>Jantar (Sexta, Sábado, Domingo e Feriados): R$ 212,90 o casal</li>
      </ul>
      
      <h2>O que está incluso na promoção?</h2>
      <p>Os clientes que optarem pela promoção de casal ou dupla aproveitam o rodízio completo, incluindo iguarias marinhas premium como camarão, lula, polvo e ovas. As sobremesas também estão inclusas à vontade no valor promocional. Bebidas e taxas de serviço são cobradas à parte.</p>
    `,
  },
  {
    slug: "pedido-tablet-praticidade",
    title: "Peça tudo direto no tablet: mais agilidade e frescor no seu prato",
    excerpt:
      "Saiba como funciona o nosso sistema de pedidos por tablet na mesa e como ele garante sushis e sashimis montados do seu jeito com rapidez e precisão.",
    category: "Novidades",
    date: "2026-05-02",
    image:
      "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=800&q=80",
    readTime: "3 min",
    content: `
      <h2>Tecnologia a serviço da gastronomia</h2>
      <p>No Yum Sushi, a tradição da culinária japonesa se une à modernidade do autoatendimento. Cada mesa conta com um tablet exclusivo no qual você pode explorar fotos detalhadas de todos os nossos pratos e fazer os pedidos em tempo real diretamente para a nossa equipe de sushimen e cozinha.</p>
      
      <h2>Vantagens do pedido via tablet</h2>
      <p>O sistema de tablet traz diversos benefícios para os clientes, entre eles:</p>
      <ul>
        <li>Agilidade: Sem necessidade de esperar o garçom para anotar ou complementar os pedidos.</li>
        <li>Customização: Peça exatamente as quantidades que deseja consumir, reduzindo desperdícios.</li>
        <li>Frescor total: Como os pratos chegam mais rápido à mesa, os sushis e pratos quentes mantêm a temperatura e a textura perfeitas.</li>
      </ul>
      <p>Experimente essa facilidade moderna em sua próxima visita ao Yum Sushi. Faça sua reserva de mesa hoje mesmo.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
