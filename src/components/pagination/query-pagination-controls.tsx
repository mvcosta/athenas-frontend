"use client";

import { Flex } from "@chakra-ui/react";
import ExtremesPaginationButton from "./extremes-pagination-button";
import StepPaginationButton from "./step-pagination-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function QueryPaginationControls({
  page,
  numberOfPages,
}: {
  page: number;
  numberOfPages: number;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function onPageChange(newPage: number) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", newPage.toString());
    const pagination = current.toString();
    const query = pagination ? `?${pagination}` : "";

    router.push(`${pathName}${query}`);
  }

  const isBackDisabled = page === 1;
  const isFowardDisabled = page === numberOfPages;

  return (
    <Flex alignItems="center" gap="10px">
      <ExtremesPaginationButton
        direction="back"
        onClick={() => onPageChange(1)}
        isDisabled={isBackDisabled}
      />
      <StepPaginationButton
        direction="back"
        onClick={() => onPageChange(page - 1)}
        isDisabled={isBackDisabled}
      />
      <span>
        Página {page} de {numberOfPages}
      </span>
      <StepPaginationButton
        direction="foward"
        onClick={() => onPageChange(page + 1)}
        isDisabled={isFowardDisabled}
      />
      <ExtremesPaginationButton
        direction="foward"
        onClick={() => onPageChange(numberOfPages)}
        isDisabled={isFowardDisabled}
      />
    </Flex>
  );
}
