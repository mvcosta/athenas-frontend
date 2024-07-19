import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Contracheque } from "@/models/contracheque.models";
import EntityRow from "@/app/components/entity-row";

interface ContrachequesProps {
  contracheques: Contracheque[];
  selectedContrachequeId?: number;
}

export default async function Contracheques({
  contracheques,
  selectedContrachequeId,
}: ContrachequesProps) {
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Matrícula</Th>
              <Th>Nome</Th>
              <Th>Efetivo</Th>
              <Th>Confiança</Th>
              <Th>Estágio</Th>
              <Th>Ref. de Férias</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contracheques.map((c) => (
              <ContrachequeRow
                contracheque={c}
                isSelected={c.id === selectedContrachequeId}
                key={c.id}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

function ContrachequeRow({
  contracheque,
  isSelected,
}: {
  contracheque: Contracheque;
  isSelected: boolean;
}) {
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
