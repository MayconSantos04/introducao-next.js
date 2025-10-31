import Image from "next/image";

interface CardProps {
  title: string
  image: string
  description: string
  category: string
}

export default function Card(props: CardProps) {

    const cardsItem = [
        {
            title: "Atidade 21",
            image: "/images/atividade21.jpg",
            description: "Descrição da Atividade 21",
            category: "Categoria 1"
        },
        {
            title: "Atidade 22",
            image: "/images/atividade22.jpg",
            description: "Descrição da Atividade 22",
            category: "Categoria 2"
        },
        {
            title: "Atidade 23",
            image: "/images/atividade23.jpg",
            description: "Descrição da Atividade 23",
            category: "Categoria 3"
        }
    ]

    cardsItem.map((card) => {
        return (
            <Card
                key={card.title}
                title={card.title}
                image={card.image}
                description={card.description}
                category={card.category}
            />
        );
    });

  return (
    <div className="bg-red-500 rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">{props.title}</h2>
      <h2>{props.category}</h2>
      <Image
        src={props.image}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <p className="text-gray-700">{props.description}</p>
    </div>
  );
}