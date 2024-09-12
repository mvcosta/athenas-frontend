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
import {
  Flex,
  FormLabel,
  Input,
  FormControl,
  Heading,
  HStack,
  Card,
  CardBody,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import DeleteEntity from "@/components/delete-entity";
import {
  createFiliacaoAction,
  deleteFiliacaoAction,
  updateFiliacaoAction,
} from "../../_actions/filiacao";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import UpdateEntity from "@/components/update-entity";
import DateInput from "@/components/date-input";
import { normalizeDate } from "@/lib/date-utils";

const columnsHelper = createColumnHelper<FiliacaoPrevidencia>();
function getColumns(configPrevidenciaId?: number) {
  return [
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
          <HStack>
            <UpdateFiliacao
              filiacao={filiacao}
              configPrevidenciaId={configPrevidenciaId}
            />
            <DeleteFiliacao filiacao={filiacao} />;
          </HStack>
        );
      },
    }),
  ];
}

export default function CrudFiliacao({
  data,
  page,
  lastPage,
  configPrevidenciaId,
}: {
  data: FiliacaoPrevidencia[];
  page: number;
  lastPage: number;
  configPrevidenciaId?: number;
}) {
  const breadCrumbItems = [
    {
      name: "Previdência",
      link: "/gfp/previdencia",
    },
    {
      name: "Filiação",
    },
  ];
  let configPrevidencia;
  if (configPrevidenciaId) {
    configPrevidencia = queryConfiguracaoById(configPrevidenciaId);
  }

  return (
    <ListEntity
      info={<FiliacaoInfo configPrevidencia={configPrevidencia} />}
      breadCrumbItems={breadCrumbItems}
      empty={!data.length}
      notFound="Nenhuma filiação encontrada"
      emptyMessage="Nenhuma filiação cadastrada"
      CreateEntity={
        <CreateFiliacao configPrevidenciaId={configPrevidenciaId} />
      }
    >
      <FiliacoesTable data={data} configPrevidenciaId={configPrevidenciaId} />
      <QueryPaginationControls page={page} lastPage={lastPage} />
    </ListEntity>
  );
}

function FiliacaoInfo({
  configPrevidencia,
}: {
  configPrevidencia?: ConfiguracaoPrevidencia;
}) {
  const infoProps = [
    {
      label: "ÓRGÃO DA PREVIDÊNCIA: ",
      value: configPrevidencia?.orgao_previdencia.nome,
    },

    {
      label: "REGIME DE PREVIDÊNCIA: ",
      value: configPrevidencia?.regime_previdencia.descricao,
    },
    {
      label: "REGIME DE PREVIDÊNCIA (SICAP): ",
      value: configPrevidencia?.regime_previdencia_sicap.descricao,
    },
    {
      label: "TIPO DE PLANO DE SEGREGAÇÃO: ",
      value: configPrevidencia?.tipo_plano_segregacao.descricao,
      colSpan: 2,
    },
    {
      label: "ÓRGÃO DE RECOLHIMENTO: ",
      value: configPrevidencia?.orgao_recolhimento.nome,
    },
  ];

  return (
    <>
      <Heading marginY="1rem" as="h3" size="lg">
        Filiações
      </Heading>
      <Card w="100%">
        <CardBody>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {infoProps.map((i, index) => (
              <GridItem key={index} colSpan={i.colSpan}>
                <Text as={"b"}>{i.label}</Text>
                {i.value}
              </GridItem>
            ))}
          </Grid>
        </CardBody>
      </Card>
    </>
  );
}

function FiliacoesTable({
  data,
  configPrevidenciaId,
}: {
  data: FiliacaoPrevidencia[];
  configPrevidenciaId?: number;
}) {
  return (
    <TanstackEntityTable
      data={data}
      columns={getColumns(configPrevidenciaId)}
    />
  );
}

function CreateFiliacao(props: { configPrevidenciaId?: number }) {
  const formMethods = useForm({
    mode: "onBlur",
    values: {
      "servidor-id": "",
      "data-inicio": "",
      "data-fim": "",
    },
  });

  return (
    <FormProvider {...formMethods}>
      <CreateEntity
        title={"Nova Filiação de Previdência"}
        formAction={createFiliacaoAction}
        btnText={"Adicionar Filiação"}
      >
        <FiliacaoForm {...props} />
      </CreateEntity>
    </FormProvider>
  );
}

function UpdateFiliacao({
  filiacao,
  configPrevidenciaId,
}: {
  filiacao: FiliacaoPrevidencia;
  configPrevidenciaId?: number;
}) {
  const formMethods = useForm({
    mode: "onBlur",
    values: {
      "servidor-id": filiacao.servidor.id,
      "data-inicio": filiacao.data_inicio_vigencia,
      "data-fim": filiacao.data_fim_vigencia,
    },
  });

  return (
    <FormProvider {...formMethods}>
      <UpdateEntity
        title={"Atualizando filiação"}
        formAction={updateFiliacaoAction}
      >
        <FiliacaoForm
          filiacao={filiacao}
          configPrevidenciaId={configPrevidenciaId}
        />
      </UpdateEntity>
    </FormProvider>
  );
}

function FiliacaoForm({
  filiacao,
  configPrevidenciaId,
}: {
  filiacao?: FiliacaoPrevidencia;
  configPrevidenciaId?: number;
}) {
  let configPrevidencia;
  if (configPrevidenciaId) {
    configPrevidencia = queryConfiguracaoById(configPrevidenciaId);
  }

  const { getValues, trigger } = useFormContext();

  const placeholder = `${configPrevidencia?.orgao_previdencia.nome} - ${configPrevidencia?.tipo_plano_segregacao.descricao}`;

  const dateFieldProps = {
    onChange: (e: any) => (e.target.value = normalizeDate(e)),
    pattern: {
      value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
      message: "Data inválida",
    },
  };

  return (
    <Flex direction={"column"} marginBottom={"1rem"} gap={"10px"}>
      <FormControl>
        <Input type="hidden" name={"id"} value={filiacao?.id} />
        <FormLabel>Configuração de Previdência:</FormLabel>{" "}
        <Input variant="filled" placeholder={placeholder} isDisabled={true} />
        <Input
          type="hidden"
          name={"configuracao-previdencia-id"}
          value={configPrevidencia?.id}
        />
      </FormControl>
      <ServidorAutoComplete
        name="servidor"
        label="Servidor:"
        errorMessage={"Servidor é obrigatório"}
        servidor={filiacao?.servidor}
      />
      <DateInput
        name={"data-inicio"}
        dateFieldProps={{
          required: "A data inicial é obrigatória",
          onBlur: (e: any) => trigger("data-fim"),
          ...dateFieldProps,
        }}
      >
        Data de Início:
      </DateInput>
      <DateInput
        name={"data-fim"}
        dateFieldProps={{
          ...dateFieldProps,
          validate: (value: string) => {
            const dataInicio = getValues("data-inicio");
            if (!dataInicio || !value) {
              return true;
            }
            return (
              new Date(value) >= new Date(dataInicio) ||
              "Data Fim deve ser maior ou igual à Data de Início"
            );
          },
        }}
      >
        Data Fim:
      </DateInput>
    </Flex>
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

  return (
    <DeleteEntity
      title={`Removendo filiação do servidor ${getServidorName()}`}
      entity={filiacao}
      formAction={deleteFiliacaoAction}
      invalidateQueries={invalidateQueries}
    >
      Você tem certeza que deseja remover o servidor {getServidorName()} da
      configuração{" "}
      {`${data?.orgao_previdencia.nome} - ${data?.tipo_plano_segregacao.descricao}`}
      ?
    </DeleteEntity>
  );
}
function queryConfiguracaoById(configPrevidenciaId: number) {
  const { data } = useQuery({
    queryKey: ["configuracoes-previdencia", { id: configPrevidenciaId }],
    queryFn: getEntityByIdQueryFn<ConfiguracaoPrevidencia>(
      "v2/configuracoes-previdencia",
      configPrevidenciaId
    ),
  });
  return data;
}
