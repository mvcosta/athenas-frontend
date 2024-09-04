"use client";

import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { getEntityQueryFn, getSearchEntityQueryFn } from "@/lib/query";
import { PessoaJuridica } from "../../_models/pessoa-juridica.models";
import PessoasJuridicas from "./pessoa-juridica";

export default function PessoaJuridicaAutoComplete() {
  const endpoint = "v2/pessoas-juridicas";
  const getItemText = (e: PessoaJuridica) => `${e.nome} (${e.razao_social})`;

  const getQuery = getEntityQueryFn<PessoaJuridica>(endpoint);
  const searchQuery = getSearchEntityQueryFn<PessoaJuridica>(endpoint);

  return (
    <EntityAutoComplete
      queryKey={endpoint}
      placeholder={"Selecione a pessoa jurídica"}
      entityNotFound={"Nenhuma pessoa jurídica encontrada"}
      searchEntityQuery={searchQuery}
      getEntitiesQuery={getQuery}
      getItemText={getItemText}
      Entity={PessoasJuridicas}
    />
  );
}
