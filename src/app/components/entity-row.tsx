"use client";

import { Tr } from "@chakra-ui/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function EntityRow({
  id,
  pathIndex,
  isSelected,
  children,
}: {
  id: number;
  // Indice da url a ser atualizado durante a navegação
  pathIndex: number;
  isSelected: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function navigateToEntity() {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const query = current ? `?${current}` : "";
    const paths = pathname.split("/");
    paths[pathIndex] = id.toString();
    router.push(`${paths.join("/")}${query}`);
  }
  return (
    <Tr
      bg={isSelected ? "gray.100" : "transparent"}
      _hover={{ bg: "gray.100" }}
      onClick={navigateToEntity}
      cursor={"pointer"}
    >
      {children}
    </Tr>
  );
}
