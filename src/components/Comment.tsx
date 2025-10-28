export default function Comment({ nome, mensagem, data }: { nome: string; mensagem: string; data: string }) {
  return (
    <div className="border p-3 rounded-md shadow-sm mb-3 bg-gray-50">
      <p className="font-semibold">{nome}</p>
      <p>{mensagem}</p>
      <p className="text-sm text-gray-500">{data}</p>
    </div>
  );
}
