"use client";

import { useState } from "react";

export function ListaDeCompras() {
  const [lista, setLista] = useState(false);

  const listaT = [
    {
      id: 1,
      nome: "Arroz",
      comprado: false,
    },
    {
      id: 2,
      nome: "Feijão",
      comprado: false,
    },
    {
      id: 3,
      nome: "Livros",
      comprado: false,
    },
  ];

  return (
    <div>
      <button onClick={() => handleCheck(index)}>Lista</button>
      {lista || (
        <ul>
          {listaT.map((item) => (
            <li key={item.index}>
              <input type="checkbox" />
              <span>
                className={item.comprado ? "line-through" : ""}
                {item.nome}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
