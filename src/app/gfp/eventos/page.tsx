import { PageProps } from "@/app/types/next-page-type";
import { getEventos } from "./lib/eventos";
import { getCurrentPage } from "@/app/lib/fetch";

export default async function EventosPage({ searchParams }: PageProps) {
  const { page, limit } = getCurrentPage(searchParams);
  const eventos = await getEventos(page, limit);
  return (
    <>
      <h1>Gerenciador de Eventos da Folha</h1>
      {eventos.map((e) => e.titulo)}
    </>
  );
}
