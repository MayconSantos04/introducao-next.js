"use client";
import { useState } from "react";

export default function ListaDeCompras() {
  const [lista, setLista] = useState([
    { item: "Leite em pó", comprado: false },
    { item: "Pão francês", comprado: false },
    { item: "Ovos De Galinha caipira", comprado: false },
  ]);

  function marcarComoComprado(index: number) {
    const novaLista = [...lista]

    novaLista[index].comprado = true
    setLista(novaLista)
  }

  return (
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold text-center mb-4">
        
        Lista de Compras
      </h2>

      <ul className="space-y-2">
        {lista.map((produto, i) => (
          <li
            key={i}
            className="flex items-center justify-between border-b pb-2"
          >
            <span
              className={`${
                produto.comprado
                  ? "line-through text-gray-400"
                  : "text-gray-800"
              }`}
            >
              {produto.item}
            </span>

            {!produto.comprado && (

              <button

                onClick={() => marcarComoComprado(i)}

                className="text-sm bg-amber-800 hover:bg-amber-600 text-white px-2 py-1 rounded"
              >
                Comprar
              </button>
            )}
          </li>

        ))}


      </ul>
    </div>
  );
}
