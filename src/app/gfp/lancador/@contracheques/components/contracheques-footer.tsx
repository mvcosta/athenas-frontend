import { Box, Flex } from "@chakra-ui/react";
import SeletorFolha from "./seletor-folha";
import QueryPaginationControls from "../../../../../components/pagination/query-pagination-controls";

export default function ContrachequesFooter({
  page,
  numberOfPages,
  ano,
  mes,
  folha,
}: {
  page: number;
  numberOfPages: number;
  ano?: string;
  mes?: string;
  folha?: string;
}) {
  return (
    <Flex gap="2rem">
      <Box flex="1">
        <QueryPaginationControls page={page} numberOfPages={numberOfPages} />
      </Box>
      <Box flex="1">
        <SeletorFolha ano={ano} mes={mes} folha={folha} />
      </Box>
    </Flex>
  );
}
