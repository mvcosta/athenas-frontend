"use client";

import EntityRow from "@/app/components/entity-row";
import { Contracheque } from "@/models/contracheque.models";
import { Td } from "@chakra-ui/react";

interface ContrachequeProps {
  contracheque: Contracheque;
  isSelected: boolean;
}

export default function ContrachequeRow({
  contracheque,
  isSelected,
}: ContrachequeProps) {
  return (
    <EntityRow id={contracheque.id} isSelected={isSelected} pathIndex={6}>
      <Td></Td>
      <Td>{contracheque.matricula}</Td>
      <Td>{contracheque.nome}</Td>
      <Td>{contracheque.efetivo}</Td>
      <Td>{contracheque.confianca}</Td>
      <Td>{contracheque.estagio}</Td>
      <Td>{contracheque.ferias}</Td>
    </EntityRow>
  );
}
