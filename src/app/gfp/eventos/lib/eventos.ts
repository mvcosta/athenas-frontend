import { authAPIPaginatedFetch } from "@/lib/fetch";
import { Evento, EventoResponse } from "@/models/eventos.models";
import { QueryFunctionContext } from "@tanstack/react-query";

type QueryKey = [string, { page: number; limit: number }];

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
}: QueryFunctionContext<QueryKey>): Promise<{
  eventos: Evento[];
  count: number;
}> {
  console.log("fetching");

  const [_, { page, limit }] = queryKey;
  const response = await authAPIPaginatedFetch("eventos/", page, limit);

  const eventoResponse: EventoResponse = await response.json();
  return { eventos: eventoResponse.results, count: eventoResponse.count };
}
