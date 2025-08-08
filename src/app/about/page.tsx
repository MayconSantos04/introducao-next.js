import Card from "@/components/Card";

export default function Page() {
  const MeusCards = [
    {
      id: 1,
      title: "Dragon Ball Z - Série 1989 - AdoroCinema",
      image: "/300795.jpg",
      description:
        "O irmão de Son Goku (protagonista da série Dragon Ball) aparece na Terra e lhe informa que sua família pertence a outro planeta.",
      category: "FILMES E SÉRIES",
    },
    {
      id: 2,
      title: "League of Legends: Realms of Runeterra (Official Companion)",
      image: "/5bfdc36b22e14.jpg",
      description:
        "Embark on a journey through the realms of Runeterra in this first-ever collectible companion book, published to celebrate the game's tenth anniversary.",
      category: "LIVROS",
    },
    {
      id: 3,
      title: "Hell Let Loose",
      image: "/image.png",
      description:
        "jogo de tiro em primeira pessoa hardcore e realista com batalhas de 50 contra 50 jogadores, uma linha de frente que muda dinamicamente e um metajogo único inspirado em RTS baseado em recursos.",
      category: "JOGOS",
    },
    {
      id: 4,
      title: "Grand Theft Auto V for PlayStation 4",
      image: "/image copy.png",
      description:
        "Grand Theft Auto V é um jogo eletrônico de ação e aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
      category: "JOGOS",
    },
    {
      id: 5,
      title: "Pai Rico, pai Pobre",
      image: "/image copy 2.png",
      description:
        "Pai Rico, pai PobreA escola prepara as crianças para o mundo real? Essa é a primeira pergunta com a qual o leitor se depara neste livro.",
      category: "LIVROS",
    },
    {
      id: 6,
      title: "Cidade de Deus",
      image: "/image copy 3.png",
      description:
        "Cidade de Deus é um filme de ação brasileiro de 2002 produzido pela O2 Filmes, VideoFilmes e distribuído pela Lumière Brasil.",
      category: "FILMES E SÉRIES",
    },
  ];

  return (
    <div className="grid lg:px-100 md:px-25 mt-15 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-x-4 ">
      {MeusCards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
          category={card.category}
        />
      ))}
    </div>
  );
}
