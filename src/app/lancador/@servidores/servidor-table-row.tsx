"use client";

import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ServidorTableRowProps {
  servidor: any;
  isSelected: boolean;
}

export default function ServidorTableRow({
  servidor,
  isSelected,
}: ServidorTableRowProps) {
  const router = useRouter();
  function navigateToContracheque() {
    router.push(`/lancador/${servidor.id}`);
  }

  return (
    <Tr
      bg={isSelected ? "green.500" : "transparent"}
      _hover={{ bg: "green.500" }}
      onClick={navigateToContracheque}
      cursor={"pointer"}
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
