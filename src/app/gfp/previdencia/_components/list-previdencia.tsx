import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import TableFilters from "@/components/table-filters";
import { Container, Heading, Flex } from "@chakra-ui/react";
import CreatePrevidencia from "./create-previdencia";
import PrevidenciaTable from "./previdencia-table";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";
import { EnumField } from "@/interfaces/enum-field";

function ListPrevidencia({
  data,
  page,
  lastPage,
  options,
}: {
  data: ConfiguracaoPrevidencia[];
  page: number;
  lastPage: number;
  options: {
    regimesPrevidenciaEnum: EnumField[];
    regimesPrevidenciaSicapEnum: EnumField[];
    planosSegregacaoMassa: EnumField[];
  };
}) {
  return (
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        Configurações de Previdência
      </Heading>
      <Flex justifyContent="space-between">
        <TableFilters />
        <CreatePrevidencia options={options}>
          Nova configuração
        </CreatePrevidencia>
      </Flex>
      <PrevidenciaTable data={data} />
      <QueryPaginationControls page={page} lastPage={lastPage} pathIndex={3} />
    </Container>
  );
}

export default ListPrevidencia;
