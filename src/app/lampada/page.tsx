feature/lampada
import Lampada from "@/components/Lampada";

export default function Page() {
    return(
        <div>
            <Lampada />
        </div>
    )

"use client";

import { useState } from "react";

export default function LampadaPage() {
  const [ligada, setLigada] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-100">
      <h1 className="text-2xl font-bold">💡 Lâmpada</h1>

      <img
        src={
          ligada
            ? "https://i.pinimg.com/originals/bd/13/62/bd136273017b5b8d6e87d0864e4e184b.png" // acesa
            : "https://i.pinimg.com/originals/7f/49/0b/7f490b78a8f69ad57d0e2645f48ed9db.png" // apagada
        }
        width={200}
        height={200}
        alt="Lâmpada"
        className="transition-all duration-300"
      />

      <img
        src={
          ligada
            ? "https://i.pinimg.com/originals/aa/8e/0c/aa8e0c87cbef6e0d2bce6b4761b5dfb5.png" // interruptor ligado
            : "https://i.pinimg.com/originals/eb/7b/33/eb7b333b61f45cb82c3bba842b22f212.png" // interruptor desligado
        }
        width={100}
        height={100}
        alt="Interruptor"
        className="cursor-pointer hover:scale-105 transition-all"
        onClick={() => setLigada(!ligada)}
      />
    </div>
  );
 main
}
