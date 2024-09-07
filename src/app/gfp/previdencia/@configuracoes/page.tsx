import { Container, Heading } from "@chakra-ui/react";
import { getConfiguracoesPrevidencia } from "../../_lib/previdencia";
import PrevidenciaTable from "../_components/previdencia-table";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import { PageProps } from "@/interfaces/page-props";
import { getPaginatedPageData } from "@/lib/pagination-utils";

export default async function ConfiguracoesPrevidenciaPage({
  searchParams,
}: PageProps) {
  const { data, page, lastPage } = await getPaginatedPageData(
    searchParams,
    getConfiguracoesPrevidencia
  );

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Configurações de Previdência
      </Heading>
      <PrevidenciaTable data={data} />
      <QueryPaginationControls page={page} lastPage={lastPage} pathIndex={3} />
    </Container>
  );
}
