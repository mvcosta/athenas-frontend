import { getEventos } from "../_lib/eventos";
import { Container, Heading } from "@chakra-ui/react";
import Eventos from "./_components/eventos";
import { PageProps } from "@/interfaces/page-props";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import { calcLastPage, getPageFromParams } from "@/lib/pagination-utils";
import MultiSelectionEntityRow from "@/components/multi-selection-entity-row";

export default async function EventosPage({ searchParams }: PageProps) {
  const { page, limit } = getPageFromParams(searchParams);
  const { eventos, count } = await getEventos(page, limit);
  const lastPage = calcLastPage(count, limit);

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Gerenciador de Eventos da Folha
      </Heading>
      <Eventos
        data={eventos}
        MultiSelectionEntityRow={MultiSelectionEntityRow}
      />
      <QueryPaginationControls page={page} lastPage={lastPage} />
    </Container>
  );
}
