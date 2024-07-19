"use client";

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import PaginationButton from "./pagination-button";

export default function StepPaginationButton({
  direction,
  numberOfPages,
}: {
  direction: "foward" | "back";
  numberOfPages?: number;
}) {
  function getNewPage(page: number): number {
    return isBack() ? page - 1 : page + 1;
  }

  function isBack(): boolean {
    return direction === "back";
  }

  return (
    <PaginationButton
      getNewPage={getNewPage}
      icon={isBack() ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      direction={direction}
      numberOfPages={numberOfPages}
    >
      {isBack() ? "Anterior" : "Próximo"}
    </PaginationButton>
  );
}
