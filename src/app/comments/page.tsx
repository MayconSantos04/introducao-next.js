"use client";

import { useState } from "react";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList"

export default function CommentsPage() {
  const [comentarios, setComentarios] = useState<any[]>([])

  function adicionarComentario(novo: any) {
    setComentarios([novo, ...comentarios])
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-6">Comentários</h1>

      <CommentForm onAddComment={adicionarComentario} />
      <CommentList comentarios={comentarios} />
    </div>
  );
}
