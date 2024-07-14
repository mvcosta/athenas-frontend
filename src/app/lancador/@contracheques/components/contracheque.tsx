"use client";

import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ContrachequeProps {
  contracheque: any;
  isSelected: boolean;
}

export default function Contracheque({
  contracheque,
  isSelected,
}: ContrachequeProps) {
  const router = useRouter();
  function navigateToContracheque() {
    router.push(`/lancador/${contracheque.id}`);
  }

  return (
    <Tr
      bg={isSelected ? "green.500" : "transparent"}
      _hover={{ bg: "green.500" }}
      onClick={navigateToContracheque}
      cursor={"pointer"}
    >
      <Td></Td>
      <Td>{contracheque.matricula}</Td>
      <Td>{contracheque.nome}</Td>
      <Td>{contracheque.efetivo}</Td>
      <Td>{contracheque.confianca}</Td>
      <Td>{contracheque.estagio}</Td>
      <Td>{contracheque.ferias}</Td>
    </Tr>
  );
}
