import { Container, Flex, Heading } from "@chakra-ui/react";
import { PageProps } from "@/interfaces/page-props";
import Previdencias from "./_components/previdencias";
import EntityRow from "@/components/entity-row";
import CrudControls from "@/components/crud-controls";
import { getConfiguracoesPrevidencia } from "../_lib/previdencia";

export default async function EventosPage({ searchParams }: PageProps) {
  const { configuracoesPrevidencias, count } =
    await getConfiguracoesPrevidencia();

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Configurações de Previdência
      </Heading>
      <Previdencias
        previdencias={configuracoesPrevidencias}
        EntityRow={EntityRow}
      />
      <Flex justifyContent={"center"} marginTop={"2rem"}>
        <CrudControls />
      </Flex>
    </Container>
  );
}
