import { Container, Heading } from "@chakra-ui/react";

export default async function FiliacoesPrevidenciaPage() {
  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Filiações
      </Heading>
      <Heading textAlign="center" as="h3" size="lg">
        Selecione uma configuração de previdência
      </Heading>
    </Container>
  );
}
