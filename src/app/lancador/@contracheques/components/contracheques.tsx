import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import Contracheque from "./contracheque";
import { getContracheques } from "../../lib/contracheques";

interface ContrachequesProps {
  selectedContrachequeId?: number;
}

export default async function Contracheques({
  selectedContrachequeId,
}: ContrachequesProps) {
  const contracheques = await getContracheques();
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
            {contracheques.map((c: any) => (
              <Contracheque
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
