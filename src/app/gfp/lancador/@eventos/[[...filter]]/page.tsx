import { Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { getFolhaEventos } from "../../../lib/contracheques";

interface FolhaEventosPageProps {
  params: { [key: string]: string | string[] | undefined };
}

export default async function FolhaEventosPage({
  params,
}: FolhaEventosPageProps) {
  const contrachequeId = Number(params?.filter?.[3]);
  if (!contrachequeId) return <h1>Selecione um contracheque</h1>;

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
            {folhaEventos?.map((fe) => (
              <Tr key={fe.id}>
                <Td></Td>
                <Td>{fe.evento} </Td>
                <Td>{fe.descricao}</Td>
                <Td>{fe.quantidade}</Td>
                <Td>{fe.percentual}</Td>
                <Td>{fe.prazo} </Td>
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
