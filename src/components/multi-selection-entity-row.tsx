"use client";

import { HasId } from "@/interfaces/has-id";
import EntityRow from "./entity-row";
import useNavigateToEntity from "@/hooks/useNavigateToEntity";

export interface MultiSelectionEntityRowProps<T extends HasId> {
  entity: T;
  isSelected: boolean;
  // Indice da url a ser atualizado durante a navegação
  pathIndex?: number;
  onClick?: (e: React.MouseEvent) => void;
  onCtrlClick?: (entity: T) => void;
  onShiftClick?: (eentity: T) => void;
  children: React.ReactNode;
}

export default function MultiSelectionEntityRow<T extends HasId>({
  entity,
  isSelected,
  pathIndex,
  onClick,
  onCtrlClick,
  onShiftClick,
  children,
}: MultiSelectionEntityRowProps<T>) {
  const navigateToEntity = useNavigateToEntity(entity.id, pathIndex);
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

  return (
    <EntityRow
      entityId={entity.id}
      isSelected={isSelected}
      pathIndex={pathIndex}
      onClick={handleClick}
    >
      {children}
    </EntityRow>
  );
}
