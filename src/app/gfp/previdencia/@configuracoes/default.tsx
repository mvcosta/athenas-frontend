import { Container, Heading } from "@chakra-ui/react";
import { getConfiguracoesPrevidencia } from "../../_lib/previdencia";
import PrevidenciaTable from "../_components/previdencia-table";

export default async function ConfiguracoesPrevidenciaPage() {
  const { configuracoesPrevidencias } = await getConfiguracoesPrevidencia();

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Configurações de Previdência
      </Heading>
      <PrevidenciaTable data={configuracoesPrevidencias} />
    </Container>
  );
}
