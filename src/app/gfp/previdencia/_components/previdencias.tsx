import EntityRowType from "@/components/entity-row";
import EntityTable from "@/components/entity-table";
import { Td } from "@chakra-ui/react";
import React from "react";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";

export default function Previdencias({
  previdencias,
  EntityRow,
}: {
  previdencias?: ConfiguracaoPrevidencia[];
  EntityRow: typeof EntityRowType<ConfiguracaoPrevidencia>;
}) {
  const headers = ["", "Previdencia", "Plano de Segregação da Massa"];
  previdencias = [
    {
      id: 1,
      pessoaJuridica: "INSS",
      tipoPlanoSegregacao: "Não se aplica",
    },
    {
      id: 2,
      pessoaJuridica: "IPER",
      tipoPlanoSegregacao: "Financeiro",
    },
    {
      id: 3,
      pessoaJuridica: "IPER",
      tipoPlanoSegregacao: "Previdenciário",
    },
  ];

  return (
    <>
      <EntityTable headers={headers}>
        {previdencias!.map((p) => (
          <EntityRow key={p.id} entity={p} isSelected={false}>
            <Td></Td>
            <Td>{p.pessoaJuridica}</Td>
            <Td>{p.tipoPlanoSegregacao}</Td>
          </EntityRow>
        ))}
      </EntityTable>
    </>
  );
}
