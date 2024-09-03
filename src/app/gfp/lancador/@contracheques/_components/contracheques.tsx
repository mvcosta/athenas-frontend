"use client";

import React, { useState } from "react";
import { Td } from "@chakra-ui/react";
import EntityRow from "@/components/entity-row";
import EntityTable from "@/components/entity-table";
import { Contracheque } from "@/app/gfp/_models/contracheque.models";

export default function Contracheques({
  contracheques,
  selectedContrachequeId,
}: {
  contracheques: Contracheque[];
  selectedContrachequeId: number;
}) {
  const headers = [
    "Matrícula",
    "Nome",
    "Efetivo",
    "Confiança",
    "Estágio",
    "Ref. de Férias",
  ];

  const [selectedContracheques, setSelectedContracheques] = useState<number[]>([
    selectedContrachequeId,
  ]);

  function handleCtrlClick(contracheque: Contracheque) {
    setSelectedContracheques((cs) => [...cs, contracheque.id]);
  }

  function handleShiftClick(contracheque: Contracheque) {
    const contrachequesIds = contracheques.map((c) => c.id);
    const selection = getSliceByIds(
      contrachequesIds,
      selectedContrachequeId,
      contracheque.id
    );

    setSelectedContracheques(selection);
  }

  function getSliceByIds(array: number[], id1: number, id2: number): number[] {
    let startIndex = array.indexOf(id1);
    let endIndex = array.indexOf(id2);
    if (startIndex === -1 || endIndex === -1) {
      return [];
    }
    if (startIndex > endIndex) {
      [startIndex, endIndex] = [endIndex, startIndex];
    }
    return array.slice(startIndex, endIndex + 1);
  }

  return (
    <EntityTable headers={headers}>
      {contracheques.map((c) => (
        <EntityRow
          key={c.id}
          entity={c}
          isSelected={selectedContracheques.includes(c.id)}
          pathIndex={6}
          onCtrlClick={handleCtrlClick}
          onShiftClick={handleShiftClick}
        >
          <Td></Td>
          <Td>{c.matricula}</Td>
          <Td>{c.nome}</Td>
          <Td>{c.efetivo}</Td>
          <Td>{c.confianca}</Td>
          <Td>{c.estagio}</Td>
          <Td>{c.ferias}</Td>
        </EntityRow>
      ))}
    </EntityTable>
  );
}
