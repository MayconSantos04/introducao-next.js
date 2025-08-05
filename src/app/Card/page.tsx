import Card from "@/components/Card";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Card</h1>
        <Card
          title={"Atidade 21"}
          image={"/favicon.ico"}
          description={"Olá, mim chamo Maycon!"}
        />
    </div>
  );
}
