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
  onCtrlClick?: (entity: T) => void;
  onShiftClick?: (eentity: T) => void;
  children: React.ReactNode;
}

export default function EntityRow<T extends HasId>({
  entity,
  isSelected,
  pathIndex,
  onClick,
  onCtrlClick,
  onShiftClick,
  children,
}: EntityRowProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (e.ctrlKey) {
      onCtrlClick?.(entity);
      return;
    }
    if (e.shiftKey) {
      onShiftClick?.(entity);
      return;
    }

    if (onClick) {
      onClick(e);
    } else {
      navigateToEntity();
    }
  }

  function navigateToEntity() {
    if (!pathIndex) return;

    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const query = current ? `?${current}` : "";
    const paths = pathname.split("/");
    paths[pathIndex] = entity.id.toString();
    router.push(`${paths.join("/")}${query}`);
  }

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
