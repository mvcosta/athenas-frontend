import { PageProps } from "@/types/next-page-type";
import { getEventos } from "./lib/eventos";
import { getPageFromParams } from "@/lib/fetch";
import { Container, Heading } from "@chakra-ui/react";
import Eventos from "./components/eventos";
import EntityRow from "@/components/entity-row";

export default async function EventosPage({ searchParams }: PageProps) {
  const { page, limit } = getPageFromParams(searchParams);
  const { eventos } = await getEventos(page, limit);

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Gerenciador de Eventos da Folha
      </Heading>
      <Eventos eventos={eventos} EntityRow={EntityRow} />
    </Container>
  );
}
