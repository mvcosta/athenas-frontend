import { Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { getFolhaEventos } from "../../lib/contracheques";

interface FolhaEventosPageProps {
  params: any;
}

export default async function FolhaEventosPage({
  params,
}: FolhaEventosPageProps) {
  const contrachequeId = +params.contracheque;
  const folhaEventos = await getFolhaEventos(contrachequeId);
  return (
    <>
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
            {folhaEventos?.map((fe: any) => (
              <Tr key={fe.id}>
                <Td></Td>
                <Td>
                  {fe.evento.numero}({fe.evento.rubrica})
                </Td>
                <Td>{fe.evento.titulo}</Td>
                <Td>{fe.qnt}</Td>
                <Td>{fe.pct}</Td>
                <Td> </Td>
                <Td>{fe.valor}</Td>
                <Td>{fe.valor_base}</Td>
                <Td>{fe.patronal}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
}
