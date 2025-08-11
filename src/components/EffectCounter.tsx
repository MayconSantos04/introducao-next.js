'use client'

import { useEffect, useState } from "react";

export default function EffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Clicou")
    document.title = `Contagem: ${count}`
  }, [count]);

  return (
    <div className="text-center p-10">
      <h1>Contagem: {count}</h1>
      <button className="bg-blue-400 rounded p-2  m-2 hover:bg-blue-600 hover:text-amber-50"
        onClick={() => {
          setCount(count + 1);
        }}
      >Incrementar</button>

      <button className="bg-amber-600 rounded p-2  m-2 hover:bg-amber-700 hover:text-amber-50"
        onClick={() => {
          setCount((0));
        }}
      >Desencrementar</button>
    </div>
  );
}
