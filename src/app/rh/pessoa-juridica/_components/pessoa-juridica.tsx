import EntityRowType from "@/components/entity-row";
import EntityTable from "@/components/entity-table";
import { Td } from "@chakra-ui/react";
import React from "react";
import { PessoaJuridica } from "../../_models/pessoa-juridica.models";

export default function PessoasJuridicas({
  data,
  EntityRow,
}: {
  data: PessoaJuridica[];
  EntityRow: typeof EntityRowType<PessoaJuridica>;
}) {
  const headers = ["Nome", "CNPJ", "Razão Social"];
  return (
    <>
      <EntityTable headers={headers}>
        {data.map((p) => (
          <EntityRow key={p.id} entity={p} isSelected={false}>
            <Td>{p.nome}</Td>
            <Td>{p.cnpj}</Td>
            <Td>{p.razao_social}</Td>
          </EntityRow>
        ))}
      </EntityTable>
    </>
  );
}
