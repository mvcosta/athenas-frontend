"use client";

import { HasId } from "@/interfaces/has-id";
import { Tr } from "@chakra-ui/react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export interface EntityRowProps<T extends HasId> {
  entity: T;
  isSelected: boolean;
  // Indice da url a ser atualizado durante a navegação
  pathIndex?: number;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export default function EntityRow<T extends HasId>({
  entity,
  isSelected,
  pathIndex,
  onClick,
  children,
}: EntityRowProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function navigateToEntity() {
    if (!pathIndex) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const query = current ? `?${current}` : "";
    const paths = pathname.split("/");
    paths[pathIndex] = entity.id.toString();
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
