import { Td, Tr } from "@chakra-ui/react";

export default function ServidorTableRow(props: any) {
  const { servidor, isSelected } = props;
  return (
    <Tr
      bg={isSelected ? "green.500" : "transparent"}
      _hover={{ bg: "green.500" }}
      data-id={servidor.id}
      onClick={props.onClick}
    >
      <Td></Td>
      <Td>{servidor.matricula}</Td>
      <Td>{servidor.nome}</Td>
      <Td>{servidor.efetivo}</Td>
      <Td>{servidor.confianca}</Td>
      <Td>{servidor.estagio}</Td>
      <Td>{servidor.ferias}</Td>
    </Tr>
  );
}
