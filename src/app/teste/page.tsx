import CardProduto from "@/components/CardProduto";

export default function Page() {
  
  const produtos = [
    {
      titulo: "oi",
      descricao: "oi",
      preco: 9,
      Image: "/image.png",
      precoPromocao: 9,
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Use o método .map() para renderizar um card para cada produto na lista. */}
        {produtos.map((produto, index) => (
          <CardProdutos
            key={index} // A 'key' é essencial para o React.
            nome={produto.titulo}
            descricao={produto.descricao}
            preco={produto.preco}
            precoPromocao={produto.precoPromocao}
            imagem={produto.Image}
          />
        )
          </div>
    </div>
  );
}
