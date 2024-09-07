"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { FiliacaoPrevidencia } from "../../_models/previdencia.models";
import TanstackEntityTable from "@/components/tanstack-entity-table";

const columnsHelper = createColumnHelper<FiliacaoPrevidencia>();
const columns = [
  columnsHelper.accessor("id", {
    header: "Id",
    cell: (info) => info.getValue(),
    size: 150,
  }),
  columnsHelper.accessor("servidor", {
    header: "Servidor",
    cell: (info) => info.getValue().pessoa_fisica.nome,
    size: 650,
  }),
  columnsHelper.accessor("data_inicio_vigencia", {
    header: "Data de inicio",
    cell: (info) => info.getValue(),
    size: 300,
  }),
  columnsHelper.accessor("data_fim_vigencia", {
    header: "Data de fim",
    cell: (info) => info.getValue(),
    size: 300,
  }),
];

function FiliacoesTable({ data }: { data: FiliacaoPrevidencia[] }) {
  return <TanstackEntityTable data={data} columns={columns} />;
}

export default FiliacoesTable;
