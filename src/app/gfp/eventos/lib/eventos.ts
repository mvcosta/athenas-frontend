import { authAPIPaginatedFetch } from "@/lib/fetch";
import { Evento, EventoResponse } from "@/models/eventos.models";
import { QueryFunctionContext } from "@tanstack/react-query";

export async function getEventos(
  page: number = 0,
  limit: number = 10
): Promise<{ eventos: Evento[]; count: number }> {
  const response = await authAPIPaginatedFetch("eventos/", page, limit);

  const eventoResponse: EventoResponse = await response.json();
  return { eventos: eventoResponse.results, count: eventoResponse.count };
}

export async function getEventosQuery({
  queryKey,
}: QueryFunctionContext<[string, { page: number; limit: number }]>): Promise<{
  eventos: Evento[];
  count: number;
}> {
  const [_, { page, limit }] = queryKey;
  const response = await authAPIPaginatedFetch("eventos/", page, limit);

  const eventoResponse: EventoResponse = await response.json();
  return { eventos: eventoResponse.results, count: eventoResponse.count };
}

export async function searchEventosQuery({
  queryKey,
}: QueryFunctionContext<[string, { search: string }]>): Promise<Evento[]> {
  const [_, { search }] = queryKey;
  const query = search ? `eventos/?search=${search}` : "eventos";
  const response = await authAPIPaginatedFetch(query, 1, 20);

  const eventoResponse: EventoResponse = await response.json();

  return eventoResponse.results;
}
