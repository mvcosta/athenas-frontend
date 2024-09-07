import EntityRowType from "@/components/multi-selection-entity-row";
import EntityTable from "@/components/entity-table";
import { Evento } from "@/app/gfp/_models/eventos.models";
import { Td } from "@chakra-ui/react";
import React from "react";

export default function Eventos({
  data,
  EntityRow,
}: {
  data: Evento[];
  EntityRow: typeof EntityRowType<Evento>;
}) {
  const headers = [
    "",
    "Número",
    "Rúbrica",
    "Título",
    "Lançamento",
    "Tipo",
    "Tipo de Cálculo",
    "Automático",
    "Cálculo",
    "Caráter",
  ];

  return (
    <>
      <EntityTable headers={headers}>
        {data.map((e) => (
          <EntityRow key={e.id} entity={e} isSelected={false}>
            <Td></Td>
            <Td>{e.numero}</Td>
            <Td>{e.rubrica}</Td>
            <Td>{e.titulo}</Td>
            <Td>{e.lancamento.descricao}</Td>
            <Td>{e.tipo}</Td>
            <Td>{e.tipo_calculo.descricao}</Td>
            <Td></Td>
            <Td>{e.calculo?.slug}</Td>
            <Td>{e.carater.descricao}</Td>
          </EntityRow>
        ))}
      </EntityTable>
    </>
  );
}
