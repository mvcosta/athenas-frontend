import EntityTable from "@/components/entity-table";
import { Td } from "@chakra-ui/react";
import React from "react";
import { PessoaJuridica } from "../../_models/pessoa-juridica.models";
import MultiSelectionEntityRowType from "@/components/multi-selection-entity-row";

export default function PessoasJuridicas({
  data,
  MultiSelectionEntityRow,
}: {
  data: PessoaJuridica[];
  MultiSelectionEntityRow: typeof MultiSelectionEntityRowType<PessoaJuridica>;
}) {
  const headers = ["Nome", "CNPJ", "Razão Social"];
  return (
    <>
      <EntityTable headers={headers}>
        {data.map((p) => (
          <MultiSelectionEntityRow key={p.id} entity={p} isSelected={false}>
            <Td>{p.nome}</Td>
            <Td>{p.cnpj}</Td>
            <Td>{p.razao_social}</Td>
          </MultiSelectionEntityRow>
        ))}
      </EntityTable>
    </>
  );
}
