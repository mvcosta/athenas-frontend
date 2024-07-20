"use client";

import { Tr } from "@chakra-ui/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function EntityRow({
  id,
  isSelected,
  pathIndex,
  onClick,
  children,
}: {
  id: number;
  isSelected: boolean;
  // Indice da url a ser atualizado durante a navegação
  pathIndex?: number;
  onClick?: (e: React.MouseEvent) => any;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function navigateToEntity() {
    if (!pathIndex) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const query = current ? `?${current}` : "";
    const paths = pathname.split("/");
    paths[pathIndex] = id.toString();
    router.push(`${paths.join("/")}${query}`);
  }

  const handleClick = onClick ?? navigateToEntity;

  return (
    <Tr
      bg={isSelected ? "#152838" : "transparent"}
      _hover={{ bg: "#152838" }}
      onClick={handleClick}
      cursor={"pointer"}
    >
      {children}
    </Tr>
  );
}
