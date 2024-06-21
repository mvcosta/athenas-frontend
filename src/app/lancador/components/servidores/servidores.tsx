"use client";

import React from "react";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import ServidorTableRow from "./servidor-table-row";
import { servidores } from "../../data-access/servidores";
import ServidoresHeader from "./header";

export default function Servidores(props: any) {
  function servidorClickedHandler(event: any) {
    event.preventDefault();
    const servidor_id = +event.target.parentElement.getAttribute("data-id");

    props.servidorClicked(servidor_id);
  }
  const selectedServidor = props.selectedServidor;
  console.log(selectedServidor);

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
                isSelected={s.id === selectedServidor.id}
                key={s.id}
                onClick={servidorClickedHandler}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
