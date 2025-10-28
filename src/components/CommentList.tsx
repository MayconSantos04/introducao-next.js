import Comment from "./Comment";

export default function CommentList({ comentarios }: { comentarios: any[] }) {
  if (comentarios.length === 0) {
    return <p className="text-center text-gray-500 mt-4">Nenhum comentário ainda.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-4">
      {comentarios.map((c, i) => (
        <Comment key={i} nome={c.nome} mensagem={c.mensagem} data={c.data} />
      ))}
    </div>
  );
}
