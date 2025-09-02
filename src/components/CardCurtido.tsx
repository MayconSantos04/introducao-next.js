"use client";
import LikeButton from "./LikeButtom";
import Image from "next/image";

export default function CardCurtido() {
  return (
    <div className="bg-amber-100 flex flex-col rounded-lg shadow-md p-4 items-center h-100 w-150">
      <Image src="/image.png" alt="imagem" height={500} width={500} />
      <h2 className="text-lg font-semibold mb-2"> Em rascunho de asilo a Milei, Bolsonaro pedia urgência e dizia esperar
        ser preso em breve</h2>
      <p className="text-gray-600 mb-4">
        🔎A Polícia Federal (PF) indiciou na quarta-feira (20) o ex-presidente
        Jair Bolsonaro (PL) e o filho dele, o deputado federal Eduardo Bolsonaro
        (PL-SP) por suspeita de coação no curso do processo, devido a
        intimidações a autoridades responsáveis pela ação penal da tentativa de
        golpe de Estado (leia mais abaixo).
      </p>
      <div>
        <LikeButton />
      </div>
      
    </div>
  );
}
