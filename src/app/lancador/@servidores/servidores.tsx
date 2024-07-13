import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import ServidorTableRow from "./servidor-table-row";
import ServidoresHeader from "./servidores-header";
import { servidores } from "../data-access/servidores";

interface ServidoresProps {
  contracheque?: number;
}

export default function Servidores({ contracheque }: ServidoresProps) {
  return (
    <>
      <ServidoresHeader />
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
            {servidores.map((s) => (
              <ServidorTableRow
                servidor={s}
                isSelected={s.id === contracheque}
                key={s.id}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
