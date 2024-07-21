import { PageProps } from "@/types/next-page-type";
import { getEventos } from "./lib/eventos";
import { getPageFromParams } from "@/lib/fetch";
import { Container, Heading } from "@chakra-ui/react";
import Eventos from "./components/eventos";

export default async function EventosPage({ searchParams }: PageProps) {
  const { page, limit } = getPageFromParams(searchParams);
  const { eventos, count } = await getEventos(page, limit);

  const numberOfPages = Math.ceil(count / limit);

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Gerenciador de Eventos da Folha
      </Heading>
      <Eventos eventos={eventos} />
    </Container>
  );
}
