import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import ContrachequeRow from "./contracheque";
import { Contracheque } from "@/models/contracheque.models";

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
