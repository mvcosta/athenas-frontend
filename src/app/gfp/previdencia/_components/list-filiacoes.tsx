"use client";

import TableFilters from "@/components/table-filters";
import { Container, Heading, Flex } from "@chakra-ui/react";
import { FiliacaoPrevidencia } from "../../_models/previdencia.models";
import FiliacoesTable from "./filiacoes-table";
import PaginationControls from "@/components/pagination/pagination-controls";
import { useState } from "react";
import { getEntityQueryFn } from "@/lib/query";
import { useQuery } from "@tanstack/react-query";
import { calcLastPage } from "@/lib/pagination-utils";

function ListFiliacoes() {
  const [page, setPage] = useState(1);

  const endpoint = "v2/filiacoes-previdencia";

  const { data } = useQuery({
    queryKey: ["filiacoes-previdencia", { page: page, limit: 10 }],
    queryFn: getEntityQueryFn<FiliacaoPrevidencia>(endpoint),
  });

  const lastPage = calcLastPage(data?.count ?? 0, 10);

  function onPageChange(page: number) {
    setPage(page);
  }

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Filiações
      </Heading>
      <Flex justifyContent="space-between">
        <TableFilters />
      </Flex>
      <FiliacoesTable data={data?.data ?? []} />
      <PaginationControls lastPage={lastPage} onPageChange={onPageChange} />
    </Container>
  );
}

export default ListFiliacoes;
