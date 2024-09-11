"use client";

import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { getEntityQueryFn, getSearchEntityQueryFn } from "@/lib/query";
import { PessoaJuridica } from "../../_models/pessoa-juridica.models";
import PessoasJuridicas from "./pessoas-juridicas";

export default function PessoaJuridicaAutoComplete({
  name,
  label,
  errorMessage,
  pessoaJuridica,
}: {
  name: string;
  label?: string;
  errorMessage?: string;
  pessoaJuridica?: PessoaJuridica;
}) {
  const endpoint = "v2/pessoas-juridicas";
  const getItemText = (e: PessoaJuridica) => `${e.nome} (${e.razao_social})`;

  const getQuery = getEntityQueryFn<PessoaJuridica>(endpoint);
  const searchQuery = getSearchEntityQueryFn<PessoaJuridica>(endpoint);

  return (
    <EntityAutoComplete
      name={name}
      label={label}
      errorMessage={errorMessage}
      queryKey={endpoint}
      placeholder={"Selecione a pessoa jurídica"}
      entityNotFound={"Nenhuma pessoa jurídica encontrada"}
      searchEntityQuery={searchQuery}
      getEntitiesQuery={getQuery}
      getItemText={getItemText}
      selectedEntity={pessoaJuridica}
      Entity={PessoasJuridicas}
    />
  );
}
