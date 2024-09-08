"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { FiliacaoPrevidencia } from "../../_models/previdencia.models";
import TanstackEntityTable from "@/components/tanstack-entity-table";
import { Button, Flex } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import DeleteFiliacao from "./delete-filiacao";
import { deleteFiliacao } from "../../_actions/previdencia";

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
    size: 600,
  }),
  columnsHelper.accessor("data_inicio_vigencia", {
    header: "Data de inicio",
    cell: (info) => info.getValue(),
    size: 250,
  }),
  columnsHelper.accessor("data_fim_vigencia", {
    header: "Data de fim",
    cell: (info) => info.getValue(),
    size: 250,
  }),
  columnsHelper.display({
    id: "acoes",
    header: "Ações",
    cell: (info) => {
      const filiacao = info.row.original;
      return (
        <>
          <Flex columnGap="10px">
            <DeleteFiliacao filiacao={filiacao} formAction={deleteFiliacao} />
            <Button colorScheme="blue">
              <EditIcon />
            </Button>
          </Flex>
        </>
      );
    },
  }),
];

function FiliacoesTable({ data }: { data: FiliacaoPrevidencia[] }) {
  return <TanstackEntityTable data={data} columns={columns} />;
}

export default FiliacoesTable;
