"use client";

import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { getEntityQueryFn, getSearchEntityQueryFn } from "@/lib/query";
import { Servidor } from "@/models/servidor.models";
import Servidores from "./servidores";

export default function ServidorAutoComplete({ name }: { name: string }) {
  const endpoint = "servidores";
  const getItemText = (e: Servidor) => `${e.matricula}: ${e.nome}`;

  const getQuery = getEntityQueryFn<Servidor>(endpoint);
  const searchQuery = getSearchEntityQueryFn<Servidor>(endpoint);

  return (
    <EntityAutoComplete
      name={name}
      queryKey={endpoint}
      placeholder={"Selecione o servidor"}
      entityNotFound={"Nenhum servidor encontrado"}
      searchEntityQuery={searchQuery}
      getEntitiesQuery={getQuery}
      getItemText={getItemText}
      Entity={Servidores}
    />
  );
}
