"use client";

import TableFilters from "@/components/table-filters";
import { Container, Heading, Flex } from "@chakra-ui/react";
import FiliacoesTable from "./filiacoes-table";
import CreateFiliacao from "./create-filiacao";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import { FiliacaoPrevidencia } from "../../_models/previdencia.models";

function ListFiliacoes({
  data,
  page,
  lastPage,
  configPrevidenciaId,
}: {
  data: FiliacaoPrevidencia[];
  page: number;
  lastPage: number;
  configPrevidenciaId?: number;
}) {
  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Filiações
      </Heading>
      <Flex justifyContent="space-between">
        <TableFilters />
        <CreateFiliacao configPrevidenciaId={configPrevidenciaId} />
      </Flex>
      <FiliacoesTable data={data} />
      <QueryPaginationControls
        page={page}
        lastPage={lastPage}
        pagePrefix="filiacoes"
      />
    </Container>
  );
}

export default ListFiliacoes;
