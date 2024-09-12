import EntityTable from "@/components/entity-table";
import { Td } from "@chakra-ui/react";
import React from "react";
import MultiSelectionEntityRowType from "@/components/multi-selection-entity-row";
import { Servidor } from "../../_models/servidor.models";

export default function Servidores({
  data,
  MultiSelectionEntityRow,
}: {
  data: Servidor[];
  MultiSelectionEntityRow: typeof MultiSelectionEntityRowType<Servidor>;
}) {
  const headers = ["Matricula", "Nome"];
  return (
    <>
      <EntityTable headers={headers}>
        {data.map((s) => (
          <MultiSelectionEntityRow key={s.id} entity={s} isSelected={false}>
            <Td>{s.matricula}</Td>
            <Td>{s.pessoa_fisica.nome}</Td>
          </MultiSelectionEntityRow>
        ))}
      </EntityTable>
    </>
  );
}
