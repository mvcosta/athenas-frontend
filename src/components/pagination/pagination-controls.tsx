"use client";

import { Flex } from "@chakra-ui/react";
import ExtremesPaginationButton from "./extremes-pagination-button";
import StepPaginationButton from "./step-pagination-button";
import { useEffect, useState } from "react";

export default function PaginationControls({
  lastPage,
  onPageChange,
}: {
  lastPage: number;
  onPageChange: (page: number) => void;
}) {
  const [page, setPage] = useState(1);
  const isBackDisabled = page === 1;
  const isFowardDisabled = page === lastPage;

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  return (
    <Flex alignItems="center" gap="10px">
      <ExtremesPaginationButton
        direction="back"
        onClick={() => setPage(1)}
        isDisabled={isBackDisabled}
      />
      <StepPaginationButton
        direction="back"
        onClick={() => setPage((p) => Math.max(p - 1, 1))}
        isDisabled={isBackDisabled}
      />
      <span>
        Página {page} de {lastPage > 0 ? lastPage : "..."}
      </span>
      <StepPaginationButton
        direction="foward"
        onClick={() => setPage((p) => Math.min(p + 1, lastPage))}
        isDisabled={isFowardDisabled}
      />
      <ExtremesPaginationButton
        direction="foward"
        onClick={() => setPage(lastPage)}
        isDisabled={isFowardDisabled}
      />
    </Flex>
  );
}
