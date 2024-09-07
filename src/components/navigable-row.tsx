"use client";

import { HasId } from "@/interfaces/has-id";
import { Tr, useColorModeValue } from "@chakra-ui/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function NavigableRow<T extends HasId>({
  entityId,
  isSelected,
  pathIndex,
  children,
}: {
  entityId: number;
  isSelected: boolean;
  // Indice da url a ser atualizado durante a navegação
  pathIndex?: number;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const highlightColor = useColorModeValue("gray.100", "#152838");

  function navigateToEntity() {
    if (!pathIndex) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const query = current ? `?${current}` : "";
    const paths = pathname.split("/");
    paths[pathIndex] = entityId.toString();
    router.push(`${paths.join("/")}${query}`);
  }

  return (
    <Tr
      bg={isSelected ? highlightColor : "transparent"}
      _hover={{ bg: highlightColor }}
      onClick={navigateToEntity}
      cursor={pathIndex ? "pointer" : "auto"}
    >
      {children}
    </Tr>
  );
}
