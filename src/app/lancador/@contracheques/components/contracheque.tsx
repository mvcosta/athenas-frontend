"use client";

import { Contracheque } from "@/app/models/contracheque.models";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface ContrachequeProps {
  contracheque: Contracheque;
  isSelected: boolean;
}

export default function ContrachequeRow({
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
