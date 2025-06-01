'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [modoEscuro, setModoEscuro] = useState(false);

  const alternarTema = () => {
    setModoEscuro((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = modoEscuro ? '#111' : '#fff';
    document.body.style.color = modoEscuro ? '#fff' : '#000';
  }, [modoEscuro]);

  return (
    <button onClick={alternarTema}>
      Alternar para modo {modoEscuro ? 'claro' : 'escuro'}
    </button>
  );
}
