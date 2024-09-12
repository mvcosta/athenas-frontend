"use client";

import { Flex } from "@chakra-ui/react";
import ExtremesPaginationButton from "./extremes-pagination-button";
import StepPaginationButton from "./step-pagination-button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function QueryPaginationControls({
  page,
  lastPage,
  pathIndex,
  pagePrefix = "",
}: {
  page: number;
  lastPage: number;
  pathIndex?: number;
  pagePrefix?: string;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function getNewPathName() {
    if (!pathIndex) return pathName;

    const paths = pathName.split("/");
    paths.splice(pathIndex, 1);
    return paths.join("/");
  }

  function onPageChange(newPage: number) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(`${pagePrefix}Page`, newPage.toString());
    const pagination = current.toString();
    const query = pagination ? `?${pagination}` : "";

    router.push(`${getNewPathName()}${query}`);
  }

  const isBackDisabled = page === 1;
  const isFowardDisabled = page === lastPage;

  return (
    <>
      {lastPage > 1 && (
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
            Página {page} de {lastPage}
          </span>
          <StepPaginationButton
            direction="foward"
            onClick={() => onPageChange(page + 1)}
            isDisabled={isFowardDisabled}
          />
          <ExtremesPaginationButton
            direction="foward"
            onClick={() => onPageChange(lastPage)}
            isDisabled={isFowardDisabled}
          />
        </Flex>
      )}
    </>
  );
}
