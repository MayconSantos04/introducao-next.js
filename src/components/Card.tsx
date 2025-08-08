"use client";

import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
  description: string;
  category: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <Image src={props.image} width={500} height={110} alt="imagens" />
      <h2 className="text-lg font-semibold mb-1">{props.title}</h2>
      <h3 className="font-medium mb-1">{props.category}</h3>
      <p className="text-gray-700">{props.description}</p>
    </div>
  );
}
