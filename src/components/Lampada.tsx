"use client"

import { useState } from "react"

export default function Lampada() {
  const [lampada, setLampada] = useState(false)

  const imagens = {
    ligada: "https://cdn-icons-png.flaticon.com/512/702/702797.png",
    desligada: "https://cdn-icons-png.flaticon.com/512/702/702814.png"
  }

  function alternar() {
    setLampada((prev) => !prev)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="p-6 bg-white shadow-xl rounded-xl flex flex-col items-center gap-6">
        <img
          src={lampada ? imagens.ligada : imagens.desligada}
          alt="Lâmpada"
          className="w-48 h-48 transition-all duration-500 transform hover:scale-105"
        />
        <button
          onClick={alternar}
          className={`px-10 py-3 rounded-lg font-semibold text-white transition-colors duration-300 ${
            lampada ? "bg-yellow-500 hover:bg-yellow-400" : "bg-gray-600 hover:bg-gray-500"
          }`}
        >
          {lampada ? "Desligar" : "Ligar"}
        </button>
      </div>
    </div>
  )
}
