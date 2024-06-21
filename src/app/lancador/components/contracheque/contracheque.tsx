import { contracheque } from "../../data-access/contracheque";

import { Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
import ContrachequeHeader from "./header";

export default function ConTracheque(props: any) {
  const servidor = props.servidor;

  const eventos = contracheque.find(
    (c) => c.servidor_id === servidor.id
  )?.eventos;

  return (
    <>
      <ContrachequeHeader />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Evento</Th>
              <Th>Descrição</Th>
              <Th>Quantidade</Th>
              <Th>Percentual</Th>
              <Th>Prazo</Th>
              <Th>Valor(R$)</Th>
              <Th>Valor Base(R$)</Th>
              <Th>Patronal(R$)</Th>
            </Tr>
          </Thead>
          <tbody>
            {eventos?.map((e, index) => (
              <Tr key={index}>
                <Td></Td>
                <Td>{e.evento}</Td>
                <Td>{e.descricao}</Td>
                <Td>{e.quantidade}</Td>
                <Td>{e.percentual}</Td>
                <Td> </Td>
                <Td>{e.valor}</Td>
                <Td>{e.valor_base}</Td>
                <Td>{e.patronal}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
}
