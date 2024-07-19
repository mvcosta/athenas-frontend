import { authAPIPaginatedFetch } from "@/app/lib/fetch";
import { Evento, EventoResponse } from "@/app/models/eventos.models";

export async function getEventos(
  page: number = 0,
  limit: number = 10
): Promise<Evento[]> {
  const response = await authAPIPaginatedFetch("eventos/", page, limit);

  const eventoResponse: EventoResponse = await response.json();
  return eventoResponse.results;
}
