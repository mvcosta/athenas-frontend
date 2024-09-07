import { Container, Heading } from "@chakra-ui/react";
import { getFiliacoesPrevidencia } from "@/app/gfp/_lib/previdencia";
import FiliacoesTable from "../../_components/filiacoes-table";

export default async function FiliacoesPrevidenciaPage() {
  const { filiacoesPrevidencia } = await getFiliacoesPrevidencia();

  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Filiações
      </Heading>
      <FiliacoesTable data={filiacoesPrevidencia} />
    </Container>
  );
}
