import EntityTable from "@/components/entity-table";
import { Td } from "@chakra-ui/react";
import React from "react";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";
import MultiSelectionEntityRowType from "@/components/multi-selection-entity-row";

export default function Previdencias({
  previdencias,
  MultiSelectionEntityRow,
}: {
  previdencias: ConfiguracaoPrevidencia[];
  MultiSelectionEntityRow: typeof MultiSelectionEntityRowType<ConfiguracaoPrevidencia>;
}) {
  const headers = [
    "Regime de previdência",
    "Regime de previdência (SICAP)",
    "Plano de Segregação da Massa",
    "Órgão de previdência",
    "Órgão de recolhimento",
  ];
  return (
    <>
      <EntityTable headers={headers}>
        {previdencias.map((p) => (
          <MultiSelectionEntityRow key={p.id} entity={p} isSelected={false}>
            <Td>{p.regime_previdencia.descricao}</Td>
            <Td>{p.regime_previdencia_sicap.descricao}</Td>
            <Td>{p.tipo_plano_segregacao.descricao}</Td>
            <Td>{p.orgao_previdencia.nome}</Td>
            <Td>{p.orgao_recolhimento.nome}</Td>
          </MultiSelectionEntityRow>
        ))}
      </EntityTable>
    </>
  );
}
