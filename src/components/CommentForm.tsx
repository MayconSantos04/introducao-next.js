"use client";

import { useState } from "react";

export default function CommentForm({ onAddComment }: { onAddComment: (comment: any) => void }) {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("")

  function enviarComentario(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !mensagem) return;

    const novoComentario = {
      nome,
      mensagem,
      data: new Date().toLocaleString(),
    };

    onAddComment(novoComentario);
    setNome("");
    setMensagem("");
  }

  return (
    <form onSubmit={enviarComentario} className="flex flex-col gap-2 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
}
