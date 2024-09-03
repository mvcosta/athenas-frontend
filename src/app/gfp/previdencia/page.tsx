import { Container, Flex, Heading } from "@chakra-ui/react";
import { PageProps } from "@/interfaces/page-props";
import Previdencias from "./_components/previdencias";
import EntityRow from "@/components/entity-row";
import CrudControls from "@/components/crud-controls";

export default async function EventosPage({ searchParams }: PageProps) {
  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Configurações de Previdência
      </Heading>
      <Previdencias EntityRow={EntityRow} />
      <Flex justifyContent={"center"} marginTop={"2rem"}>
        <CrudControls />
      </Flex>
    </Container>
  );
}
