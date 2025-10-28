type PostCardProps = {
  id: number;
  autor: string;
  conteudo: string;
  likes: number;
  curtirPost: (id: number) => void;
};

export default function PostCard({ id, autor, conteudo, likes, curtirPost }: PostCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow hover:shadow-md transition">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 flex items-center justify-center bg-fuchsia-800 text-white font-semibold rounded-full mr-3">
          {autor[0].toUpperCase()}
        </div>
        <h3 className="font-medium text-gray-800">{autor}</h3>
      </div>

      <p className="text-gray-700 mb-3">{conteudo}</p>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>❤️ {likes} {likes === 1 ? "curtida" : "curtidas"}</span>
        <button
          onClick={() => curtirPost(id)}
          className="px-3 py-1 bg-fuchsia-800 text-white rounded hover:bg-fuchsia-600 transition"
        >
          Curtir
        </button>
      </div>
    </div>
  );
}
