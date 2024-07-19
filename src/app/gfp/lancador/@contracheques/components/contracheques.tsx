import React from "react";
import {
  Td,
} from "@chakra-ui/react";
import { Contracheque } from "@/models/contracheque.models";
import EntityRow from "@/app/components/entity-row";
import EntityTable from "@/app/components/entity-table";

interface ContrachequesProps {
  contracheques: Contracheque[];
  selectedContrachequeId?: number;
}

export default async function Contracheques({
  contracheques,
  selectedContrachequeId,
}: ContrachequesProps) {
  const headers = [
    "Matrícula",
    "Nome",
    "Efetivo",
    "Confiança",
    "Estágio",
    "Ref. de Férias",
  ];

  return (
    <EntityTable headers={headers}>
      {contracheques.map((c) => (
        <EntityRow
          key={c.id}
          id={c.id}
          isSelected={c.id === selectedContrachequeId}
          pathIndex={6}
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
