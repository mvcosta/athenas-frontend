import { Flex } from "@chakra-ui/react";
import StepPaginationButton from "./pagination/step-pagination-button";
import ExtremesPaginationButton from "./pagination/extremes-pagination-button";

export default function ContrachequesFooter({
  page,
  numberOfPages,
}: {
  page: number;
  numberOfPages: number;
}) {
  return (
    <Flex justifyContent="space-evenly" alignItems="center">
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
