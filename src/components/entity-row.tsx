"use client";

import useNavigateToEntity from "@/hooks/useNavigateToEntity";
import { Tr, useColorModeValue } from "@chakra-ui/react";

export default function EntityRow({
  entityId,
  isSelected,
  pathIndex,
  children,
  onClick,
}: {
  entityId: number;
  isSelected: boolean;
  // Indice da url a ser atualizado durante a navegação
  pathIndex?: number;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const highlightColor = useColorModeValue("gray.100", "whiteAlpha.50");
  const navigateToEntity = useNavigateToEntity();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();

    if (onClick) {
      onClick(e);
    } else {
      navigateToEntity(entityId, pathIndex);
    }
  }

  return (
    <Tr
      bg={isSelected ? highlightColor : "transparent"}
      _hover={{ bg: highlightColor }}
      onClick={handleClick}
      cursor={"pointer"}
    >
      {children}
    </Tr>
  );
}
