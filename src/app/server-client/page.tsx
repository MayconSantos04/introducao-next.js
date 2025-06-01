import ThemeToggle from '@/components/ThemeToggle';

export default function ServerClientPage() {
  const dataHoraServidor = new Date().toLocaleString();

  return (
    <div>
      <h1>Data e Hora do Servidor</h1>
      <p>{dataHoraServidor}</p>

      <ThemeToggle />
    </div>
  );
}
