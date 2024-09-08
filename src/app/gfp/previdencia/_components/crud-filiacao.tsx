"use client";

import ListEntity from "@/components/list-entity";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import TanstackEntityTable from "@/components/tanstack-entity-table";
import { createColumnHelper } from "@tanstack/react-table";
import {
  ConfiguracaoPrevidencia,
  FiliacaoPrevidencia,
} from "../../_models/previdencia.models";
import { useQuery } from "@tanstack/react-query";
import { getEntityByIdQueryFn } from "@/lib/query";
import ServidorAutoComplete from "@/app/rh/servidor/_components/servidor-auto-complete";
import CreateEntity from "@/components/create-entity";
import { Flex, Box, FormLabel, Input } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import DeleteEntity from "@/components/delete-entity";
import {
  createFiliacaoAction,
  deleteFiliacaoAction,
} from "../../_actions/filiacao";

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
      return <DeleteFiliacao filiacao={filiacao} />;
    },
  }),
];

export default function CrudFiliacao({
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

function FiliacoesTable({ data }: { data: FiliacaoPrevidencia[] }) {
  return <TanstackEntityTable data={data} columns={columns} />;
}

function CreateFiliacao({
  configPrevidenciaId,
}: {
  configPrevidenciaId?: number;
}) {
  let configPrevidencia;
  if (configPrevidenciaId) {
    const { data } = useQuery({
      queryKey: ["configuracoes-previdencia", { id: configPrevidenciaId }],
      queryFn: getEntityByIdQueryFn<ConfiguracaoPrevidencia>(
        "v2/configuracoes-previdencia",
        configPrevidenciaId
      ),
    });
    configPrevidencia = data;
  }

  const toastConfig = {
    success: {
      title: "Filiação criada.",
      status: "success",
    },
    error: {
      title: "Não foi possível criar a filiação.",
      status: "error",
    },
  };

  return (
    <CreateEntity
      title={"Nova Filiação de Previdência"}
      formAction={createFiliacaoAction}
      btnText={"Adicionar Filiação"}
      toastConfig={toastConfig}
    >
      <Flex direction={"column"} marginBottom={"1rem"} gap={"10px"}>
        <Box>
          <FormLabel>Configuração de Previdência:</FormLabel>{" "}
          <Input
            variant="filled"
            placeholder={configPrevidencia?.orgao_previdencia.nome ?? ""}
            isDisabled={true}
          />
          <Input
            type="hidden"
            name={"configuracao-previdencia-id"}
            value={configPrevidenciaId}
          />
        </Box>
        <Box>
          <FormLabel>Servidor:</FormLabel>
          <ServidorAutoComplete name="servidor" />
        </Box>
        <Box>
          <FormLabel>Data de Início:</FormLabel>
          <Input name="data-inicio" />
        </Box>
        <Box>
          <FormLabel>Data de Fim:</FormLabel>
          <Input name="data-fim" />
        </Box>
      </Flex>
    </CreateEntity>
  );
}

function DeleteFiliacao({
  filiacao,
  invalidateQueries,
}: {
  filiacao: FiliacaoPrevidencia;
  invalidateQueries?: any;
}) {
  const pathname = usePathname();

  const paths = pathname.split("/");
  const configuracaoId = +paths[3];

  const { data } = useQuery({
    queryKey: ["configuracoes-previdencia", { id: configuracaoId }],
    queryFn: getEntityByIdQueryFn<ConfiguracaoPrevidencia>(
      "v2/configuracoes-previdencia",
      configuracaoId
    ),
  });
  const getServidorName = () => {
    return `${filiacao.servidor.matricula}: ${filiacao.servidor.pessoa_fisica.nome}`;
  };

  const toastConfig = {
    success: {
      title: "Filiação removida.",
      status: "success",
    },
    error: {
      title: "Não foi possível remover a filiação.",
      status: "error",
    },
  };

  return (
    <DeleteEntity
      title={`Removendo filiação do servidor ${getServidorName()}`}
      name={"filiacao-id"}
      entity={filiacao}
      formAction={deleteFiliacaoAction}
      toastConfig={toastConfig}
      invalidateQueries={invalidateQueries}
    >
      Você tem certeza que deseja remover o servidor {getServidorName()} da
      configuração {data?.orgao_previdencia.nome}?
    </DeleteEntity>
  );
}
