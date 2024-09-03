import EntityRowType from "@/components/entity-row";
import EntityTable from "@/components/entity-table";
import { Td } from "@chakra-ui/react";
import React from "react";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";

export default function Previdencias({
  previdencias,
  EntityRow,
}: {
  previdencias: ConfiguracaoPrevidencia[];
  EntityRow: typeof EntityRowType<ConfiguracaoPrevidencia>;
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
          <EntityRow key={p.id} entity={p} isSelected={false}>
            <Td>{p.regime_previdencia.descricao}</Td>
            <Td>{p.regime_previdencia_sicap.descricao}</Td>
            <Td>{p.tipo_plano_segregacao.descricao}</Td>
            <Td>{p.orgao_previdencia.nome}</Td>
            <Td>{p.orgao_recolhimento.nome}</Td>
          </EntityRow>
        ))}
      </EntityTable>
    </>
  );
}
