"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import PaginationButton from "./pagination-button";

export default function ExtremesPaginationButton({
  direction,
  isDisabled,
  onClick,
}: {
  direction: "foward" | "back";
  isDisabled: boolean;
  onClick: () => void;
}) {
  function isBack(): boolean {
    return direction === "back";
  }

  return (
    <PaginationButton
      direction={direction}
      isDisabled={isDisabled}
      onClick={onClick}
      icon={isBack() ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    >
      {isBack() ? "Primeira" : "Última"}
    </PaginationButton>
  );
}
