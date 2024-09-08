"use client";

import FiliacoesTable from "./filiacoes-table";
import CreateFiliacao from "./create-filiacao";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import { FiliacaoPrevidencia } from "../../_models/previdencia.models";
import ListEntity from "@/components/list-entity";

function ListFiliacoes({
  data,
  page,
  lastPage,
  pagePrefix,
  configPrevidenciaId,
}: {
  data: FiliacaoPrevidencia[];
  page: number;
  lastPage: number;
  pagePrefix: string;
  configPrevidenciaId?: number;
}) {
  return (
    <ListEntity
      title={"Filiações"}
      CreateEntity={
        <CreateFiliacao configPrevidenciaId={configPrevidenciaId} />
      }
    >
      <FiliacoesTable data={data} />
      <QueryPaginationControls
        page={page}
        lastPage={lastPage}
        pagePrefix={pagePrefix}
      />
    </ListEntity>
  );
}

export default ListFiliacoes;
