import Image from "next/image";

interface ProdutoCardProps {
  nome: string;
  imagem: string;
  descricao: string;
  preco: number;
}

export default function ProdutoCard({ nome, imagem, descricao, preco }: ProdutoCardProps) {
  return (
    // Contêiner principal do cartão
    <div className="flex flex-col rounded-xl bg-white shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Imagem do produto */}
      <div className="relative w-full h-48">
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover"
        />
      </div>

      {/* Seção de informações */}
      <div className="flex flex-col p-4">
        {/* Título e Preço */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800 leading-tight">{nome}</h2>
          <p className="text-lg font-bold text-green-600">
            R${preco.toFixed(2)}
          </p>
        </div>

        {/* Descrição do produto */}
        <p className="text-sm text-gray-600 line-clamp-2">{descricao}</p>
        
        {/* Botão de adicionar ao carrinho */}
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition-colors">
          Adicionar
        </button>
      </div>
    </div>
  );
}