import { PageProps } from "@/app/types/next-page-type";
import { getEventos } from "./lib/eventos";

export default async function EventosPage({ searchParams }: PageProps) {
  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "20");

  const eventos = await getEventos(page, limit);
  return (
    <>
      <h1>Gerenciador de Eventos da Folha</h1>
      {eventos.map((e) => e.titulo)}
    </>
  );
}
