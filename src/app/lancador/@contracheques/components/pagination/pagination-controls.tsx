import { Flex } from "@chakra-ui/react";
import ExtremesPaginationButton from "./extremes-pagination-button";
import StepPaginationButton from "./step-pagination-button";

export default function PaginationControls({
  page,
  numberOfPages,
}: {
  page: number;
  numberOfPages: number;
}) {
  return (
    <Flex alignItems="center" gap="10px">
      <ExtremesPaginationButton direction="back" />
      <StepPaginationButton direction="back" />
      <span>
        Página {page} de {numberOfPages}
      </span>
      <StepPaginationButton direction="foward" numberOfPages={numberOfPages} />
      <ExtremesPaginationButton
        direction="foward"
        numberOfPages={numberOfPages}
      />
    </Flex>
  );
}
