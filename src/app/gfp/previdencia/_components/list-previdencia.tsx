import CreatePrevidencia from "./create-previdencia";
import PrevidenciaTable from "./previdencia-table";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";
import { EnumField } from "@/interfaces/enum-field";
import ListEntity from "@/components/list-entity";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";

function ListPrevidencia({
  data,
  page,
  lastPage,
  pagePrefix,
  options,
}: {
  data: ConfiguracaoPrevidencia[];
  page: number;
  lastPage: number;
  pagePrefix: string;
  options: {
    regimesPrevidenciaEnum: EnumField[];
    regimesPrevidenciaSicapEnum: EnumField[];
    planosSegregacaoMassa: EnumField[];
  };
}) {
  return (
    <>
      <ListEntity
        title={"Configurações de Previdência"}
        CreateEntity={<CreatePrevidencia options={options} />}
      >
        <PrevidenciaTable data={data} />
        <QueryPaginationControls
          page={page}
          lastPage={lastPage}
          pagePrefix={pagePrefix}
        />
      </ListEntity>
    </>
  );
}

export default ListPrevidencia;
