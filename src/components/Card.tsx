"use client";

import Image from "next/image";

interface CardProps {
  title: string
  image: string
  description: string
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-red-500 rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4">{props.title}</h2>
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