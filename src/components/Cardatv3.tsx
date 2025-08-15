"use client";
import Image from "next/image";

interface cardProps {
  id: number;
  titulo: string;
  subtitulo: string;
  image: string;
}

export default function CardP(props: cardProps) {
  return (
    <div className="bg-cyan-200 rounded-2xl m-6 w-50 p-4 justify-center items-center flex flex-col">
        <Image className="rounded"
        src={props.image}
        alt="imagem"
        width={800}
        height={500} />
        <h1 className="mt-3 mb-3 font-bold text-2xl">{props.titulo}</h1>
        <h2 className="text-gray-700">{props.subtitulo}</h2>
      </div>
  );
}
