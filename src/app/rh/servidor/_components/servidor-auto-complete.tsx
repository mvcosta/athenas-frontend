"use client";

import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { getEntityQueryFn, getSearchEntityQueryFn } from "@/lib/query";
import Servidores from "./servidores";
import { Servidor } from "../../_models/servidor.models";

export default function ServidorAutoComplete(props: {
  name: string;
  label: string;
  errorMessage: string;
  servidor?: Servidor;
}) {
  const endpoint = "v2/servidores/";
  const getItemText = (e: Servidor) =>
    `${e.matricula}: ${e.pessoa_fisica.nome}`;

  const getQuery = getEntityQueryFn<Servidor>(endpoint);
  const searchQuery = getSearchEntityQueryFn<Servidor>(endpoint);

  return (
    <EntityAutoComplete
      {...props}
      selectedEntity={props.servidor}
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
