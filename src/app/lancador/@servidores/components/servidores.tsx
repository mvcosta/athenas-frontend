import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import Servidor from "./servidor";
import { getServidores } from "../lib/servidores";

interface ServidoresProps {
  selectedServidorId?: number;
}

export default async function Servidores({
  selectedServidorId,
}: ServidoresProps) {
  const servidores = await getServidores();
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
            {servidores.map((s: any) => (
              <Servidor
                servidor={s}
                isSelected={s.id === selectedServidorId}
                key={s.id}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
