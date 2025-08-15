  'use client'

  // import MiniDisplay from "@/components/Mini-Display";
  import Cardatv3 from "@/components/Cardatv3";
  

  export default function about() {
    const CardsA = [
      {
        id: 1,
        titulo: "JOGOS FRIV",
        subtitulo: 'Lançado em 2008, o Friv se popularizou rapidamente, com muitos usuários referindo-se a qualquer site de jogos casuais como "Friv".', 
        image: "/image.png",
      },
      {
        id: 2,
        titulo: "Bob Marley: One Love",
        subtitulo: "A lenda da música reggae Bob Marley ganha vida neste filme biográfico que traça sua jornada de suas origens humildes em Kingston, Jamaica, ao estrelato global.",
        image: "/513iOh4IUjL._UF1000,1000_QL80_.jpg",
      },
      {
        id: 3,
        titulo: "Junior Vianna",
        subtitulo: "Cantor, compositor e empresário cearense conhecido por seu estilo musical, o Forró das Vaquejadas",
        image: "/image copy.png",
      },
    ];

    return (
      <div className="h-screen">
        {/* {/* <h1>Sobre Nós</h1>
              <p>Informações sobre a empresa...</p> */}
        {/* <MiniDisplay />*/}

        <div className="flex flex-rows justify-center items-center h-screen ">
          {CardsA.map((card) => (
            <Cardatv3
              key={card.id} // **Importante**: Use a prop `key` com um valor único
              id={card.id}
              titulo={card.titulo}
              subtitulo={card.subtitulo}
              image={card.image}
            />
          ))}
        </div>
      </div>
    );
  }
