import { authAPIPaginatedClientFetch } from "@/lib/fetch-client";
import { QueryFunctionContext } from "@tanstack/react-query";
import { Evento, EventoResponse } from "../_models/eventos.models";

export async function getEventosQuery({
  queryKey,
}: QueryFunctionContext<[string, { page: number; limit: number }]>): Promise<{
  eventos: Evento[];
  count: number;
}> {
  const [_, { page, limit }] = queryKey;
  const response = await authAPIPaginatedClientFetch("eventos/", page, limit);

  const eventoResponse: EventoResponse = await response.json();
  return { eventos: eventoResponse.results, count: eventoResponse.count };
}

export async function searchEventosQuery({
  queryKey,
}: QueryFunctionContext<[string, { search: string }]>): Promise<Evento[]> {
  const [_, { search }] = queryKey;
  const query = search ? `eventos/?search=${search}` : "eventos";
  const response = await authAPIPaginatedClientFetch(query, 1, 20);

  const eventoResponse: EventoResponse = await response.json();

  return eventoResponse.results;
}
