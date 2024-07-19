"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import PaginationButton from "./pagination-button";

export default function ExtremesPaginationButton({
  direction,
  numberOfPages,
}: {
  direction: "foward" | "back";
  numberOfPages?: number;
}) {
  function getNewPage(page: number): number {
    if (isBack()) return 1;
    if (!numberOfPages) throw new Error("Configure o número de paginas");
    return numberOfPages;
  }

  function isBack(): boolean {
    return direction === "back";
  }

  return (
    <PaginationButton
      getNewPage={getNewPage}
      icon={isBack() ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      direction={direction}
      numberOfPages={numberOfPages}
    >
      {isBack() ? "Primeira" : "Última"}
    </PaginationButton>
  );
}
