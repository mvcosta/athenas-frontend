"use client";

import { Contracheque } from "@/app/models/contracheque.models";
import { Td, Tr } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ContrachequeProps {
  contracheque: Contracheque;
  isSelected: boolean;
}

export default function ContrachequeRow({
  contracheque,
  isSelected,
}: ContrachequeProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function navigateToContracheque() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const pagination = current.toString();
    const query = pagination ? `?${pagination}` : "";

    const paths = pathname.split("/");

    paths[5] = contracheque.id.toString();

    router.push(`${paths.join("/")}${query}`);
  }

  return (
    <Tr
      bg={isSelected ? "gray.100" : "transparent"}
      _hover={{ bg: "gray.100" }}
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
