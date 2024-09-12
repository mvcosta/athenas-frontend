import { PaginatedResponse } from "@/interfaces/paginated-response";
import {
  authAPIClientFetch,
  authAPIPaginatedClientFetch,
} from "@/lib/fetch-client";
import { QueryFunctionContext } from "@tanstack/react-query";

export function getEntityQueryFn<T>(endpoint: string) {
  return async ({
    queryKey,
  }: QueryFunctionContext<[string, { page: number; limit: number }]>): Promise<{
    data: T[];
    count: number;
  }> => {
    const [_, { page, limit }] = queryKey;
    const response = await authAPIPaginatedClientFetch(
      `${endpoint}/`,
      page,
      limit
    );

    const eventoResponse: PaginatedResponse<T> = await response.json();
    return { data: eventoResponse.results, count: eventoResponse.count };
  };
}

export function getEntityByIdQueryFn<T>(endpoint: string, id: number) {
  return async ({
    queryKey,
  }: QueryFunctionContext<[string, { id: number }]>): Promise<T> => {
    const [_, { id }] = queryKey;
    const response = await authAPIClientFetch(`${endpoint}/${id}`);

    const entity: T = await response.json();
    return entity;
  };
}

export function getSearchEntityQueryFn<T>(endpoint: string) {
  return async ({
    queryKey,
  }: QueryFunctionContext<[string, { search: string }]>): Promise<T[]> => {
    const [_, { search }] = queryKey;

    const query = search ? `${endpoint}/?search=${search}` : `${endpoint}/`;
    const response = await authAPIPaginatedClientFetch(query, 1, 20);

    const eventoResponse: PaginatedResponse<T> = await response.json();

    return eventoResponse.results;
  };
}
