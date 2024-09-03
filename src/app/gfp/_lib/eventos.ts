import { Evento, EventoResponse } from "@/app/gfp/_models/eventos.models";
import { authAPIPaginatedFetch } from "@/lib/fetch-server";

export async function getEventos(
  page: number = 0,
  limit: number = 10
): Promise<{ eventos: Evento[]; count: number }> {
  const response = await authAPIPaginatedFetch("eventos/", page, limit);

  const eventoResponse: EventoResponse = await response.json();
  return { eventos: eventoResponse.results, count: eventoResponse.count };
}
