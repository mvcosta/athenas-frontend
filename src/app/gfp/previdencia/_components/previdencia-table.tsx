"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";
import TanstackEntityTable from "@/components/tanstack-entity-table";

const columnsHelper = createColumnHelper<ConfiguracaoPrevidencia>();
const columns = [
  columnsHelper.accessor("id", {
    header: "Id",
    cell: (info) => info.getValue(),
    size: 150,
  }),
  columnsHelper.accessor("regime_previdencia", {
    header: "Regime de previdência",
    cell: (info) => info.getValue().descricao,
    size: 200,
  }),
  columnsHelper.accessor("regime_previdencia_sicap", {
    header: "Regime de previdência (SICAP)",
    cell: (info) => info.getValue().descricao,
    size: 250,
  }),
  columnsHelper.accessor("tipo_plano_segregacao", {
    header: "Plano de Segregação da Massa",
    cell: (info) => info.getValue().descricao,
    size: 400,
  }),
  columnsHelper.accessor("orgao_previdencia", {
    header: "Órgão de previdência",
    cell: (info) => info.getValue().nome,
    size: 300,
  }),
  columnsHelper.accessor("orgao_recolhimento", {
    header: "Órgão de recolhimento",
    cell: (info) => info.getValue().nome,
    size: 300,
  }),
];

function PrevidenciaTable({ data }: { data: ConfiguracaoPrevidencia[] }) {
  return <TanstackEntityTable data={data} columns={columns} pathIndex={3} />;
}

export default PrevidenciaTable;
