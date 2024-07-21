"use client";

import { Flex } from "@chakra-ui/react";
import ExtremesPaginationButton from "./extremes-pagination-button";
import StepPaginationButton from "./step-pagination-button";
import { useState } from "react";

export default function PaginationControls({
  numberOfPages,
  onPageChange,
}: {
  numberOfPages: number;
  onPageChange: (page: number) => void;
}) {
  const [page, setPage] = useState(1);
  const isBackDisabled = page === 1;
  const isFowardDisabled = page === numberOfPages;

  return (
    <Flex alignItems="center" gap="10px">
      <ExtremesPaginationButton
        direction="back"
        onClick={() => {
          setPage((p) => {
            onPageChange(1);
            return 1;
          });
        }}
        isDisabled={isBackDisabled}
      />
      <StepPaginationButton
        direction="back"
        onClick={() => {
          setPage((p) => {
            onPageChange(p - 1);
            return p - 1;
          });
        }}
        isDisabled={isBackDisabled}
      />
      <span>
        Página {page} de {numberOfPages}
      </span>
      <StepPaginationButton
        direction="foward"
        onClick={() => {
          setPage((p) => {
            onPageChange(p + 1);
            return p + 1;
          });
          onPageChange(page);
        }}
        isDisabled={isFowardDisabled}
      />
      <ExtremesPaginationButton
        direction="foward"
        onClick={() => {
          setPage((p) => {
            onPageChange(numberOfPages);
            return numberOfPages;
          });
        }}
        isDisabled={isFowardDisabled}
      />
    </Flex>
  );
}
