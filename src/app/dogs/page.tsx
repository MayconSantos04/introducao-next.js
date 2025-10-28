"use client";

import { useState, useEffect } from "react";

export default function DogsPage() {
  const [imagem, setImagem] = useState("")
  function buscarImagem() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImagem(data.message))
  }

  useEffect(() => {
    buscarImagem()
  }, [])

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Imagem de Cachorro</h1>

      <img src={imagem} alt="Cachorro" width="300" height="300" />
      <br />
      <button
        onClick={buscarImagem}
        className="mt-4 px-5 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
      >
        Nova imagem
      </button>
    </div>
  )
}
