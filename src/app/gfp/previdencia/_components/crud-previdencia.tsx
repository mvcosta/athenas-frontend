"use client";

import PessoaJuridicaAutoComplete from "@/app/rh/pessoa-juridica/_components/pessoa-juridica-auto-complete";
import CreateEntity from "@/components/create-entity";
import ListEntity from "@/components/list-entity";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import TanstackEntityTable from "@/components/tanstack-entity-table";
import { EnumField } from "@/interfaces/enum-field";
import { Flex, Box, FormLabel, Select, HStack } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";
import {
  createPrevidenciaAction,
  deletePrevidenciaAction,
} from "../../_actions/previdencia";
import DeleteEntity from "@/components/delete-entity";
import UpdateEntity from "@/components/update-entity";
import { FormProvider, useForm } from "react-hook-form";

type PrevidenciaOptions = {
  regimesPrevidenciaEnum: EnumField[];
  regimesPrevidenciaSicapEnum: EnumField[];
  planosSegregacaoMassa: EnumField[];
};

const columnsHelper = createColumnHelper<ConfiguracaoPrevidencia>();
function getColumns(options: PrevidenciaOptions) {
  return [
    columnsHelper.accessor("id", {
      header: "Id",
      cell: (info) => info.getValue(),
      size: 115,
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
      size: 300,
    }),
    columnsHelper.accessor("orgao_previdencia", {
      header: "Órgão de previdência",
      cell: (info) => info.getValue().nome,
      size: 250,
    }),
    columnsHelper.accessor("orgao_recolhimento", {
      header: "Órgão de recolhimento",
      cell: (info) => info.getValue().nome,
      size: 250,
    }),
    columnsHelper.display({
      id: "acoes",
      header: "Ações",
      size: 50,
      cell: (info) => {
        const previdencia = info.row.original;
        return (
          <HStack>
            <UpdatePrevidencia previdencia={previdencia} options={options} />
            <DeletePrevidencia previdencia={previdencia} />
          </HStack>
        );
      },
    }),
  ];
}

export default function CrudPrevidencia({
  data,
  page,
  lastPage,
  options,
}: {
  data: ConfiguracaoPrevidencia[];
  page: number;
  lastPage: number;
  options: PrevidenciaOptions;
}) {
  const breadCrumbItems = [
    {
      name: "Previdência",
    },
  ];
  return (
    <ListEntity
      title={"Configurações de Previdência"}
      breadCrumbItems={breadCrumbItems}
      CreateEntity={<CreatePrevidencia options={options} />}
    >
      <PrevidenciaTable data={data} options={options} />
      <QueryPaginationControls page={page} lastPage={lastPage} />
    </ListEntity>
  );
}

function PrevidenciaTable({
  data,
  options,
}: {
  data: ConfiguracaoPrevidencia[];
  options: PrevidenciaOptions;
}) {
  return (
    <TanstackEntityTable
      data={data}
      columns={getColumns(options)}
      pathIndex={3}
    />
  );
}

function CreatePrevidencia({ options }: { options: PrevidenciaOptions }) {
  const toastConfig = {
    success: {
      title: "Configuração criada.",
      status: "success",
    },
    error: {
      title: "Não foi possível criar a configuração.",
      status: "error",
    },
  };

  return (
    <CreateEntity
      title={"Nova Configuração de Previdência"}
      formAction={createPrevidenciaAction}
      btnText={"Adicionar Configuração"}
      toastConfig={toastConfig}
    >
      <Flex direction={"column"} marginBottom={"1rem"} gap={"10px"}>
        <Box>
          <FormLabel>Regime de previdência:</FormLabel>
          <Select name="regime">
            {options.regimesPrevidenciaEnum.map((o) => (
              <option key={o.id} value={o.id}>
                {o.descricao}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <FormLabel>Regime de previdência (SICAP):</FormLabel>
          <Select name="regime-sicap">
            {options.regimesPrevidenciaSicapEnum.map((o) => (
              <option key={o.id} value={o.id}>
                {o.descricao}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <FormLabel>Plano de Segregação da Massa:</FormLabel>
          <Select name="plano">
            {options.planosSegregacaoMassa.map((o) => (
              <option key={o.id} value={o.id}>
                {o.descricao}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <FormLabel>Órgão de previdência:</FormLabel>
          <PessoaJuridicaAutoComplete name="orgao-previdencia" />
        </Box>
        <Box>
          <FormLabel>Órgão de recolhimento:</FormLabel>
          <PessoaJuridicaAutoComplete name="orgao-recolhimento" />
        </Box>
      </Flex>
    </CreateEntity>
  );
}

function UpdatePrevidencia({
  options,
  previdencia,
}: {
  options: PrevidenciaOptions;
  previdencia: ConfiguracaoPrevidencia;
}) {
  const formMethods = useForm({
    mode: "onTouched",
    values: {
      regime: previdencia.regime_previdencia.id,
      "regime-sicap": previdencia.regime_previdencia_sicap.id,
      plano: previdencia.tipo_plano_segregacao.id,
      "orgao-previdencia-id": previdencia.orgao_previdencia.id,
      "orgao-recolhimento-id": previdencia.orgao_recolhimento.id,
    },
  });

  const { register } = formMethods;

  const toastConfig = {
    success: {
      title: "Configuração criada.",
      status: "success",
    },
    error: {
      title: "Não foi possível criar a configuração.",
      status: "error",
    },
  };

  return (
    <FormProvider {...formMethods}>
      <UpdateEntity
        title={"Atualizando Configuração de Previdência"}
        formAction={createPrevidenciaAction}
        toastConfig={toastConfig}
      >
        <Flex direction={"column"} marginBottom={"1rem"} gap={"10px"}>
          <Box>
            <FormLabel>Regime de previdência:</FormLabel>
            <Select {...register("regime")}>
              {options.regimesPrevidenciaEnum.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.descricao}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <FormLabel>Regime de previdência (SICAP):</FormLabel>
            <Select {...register("regime-sicap")}>
              {options.regimesPrevidenciaSicapEnum.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.descricao}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <FormLabel>Plano de Segregação da Massa:</FormLabel>
            <Select {...register("plano")}>
              {options.planosSegregacaoMassa.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.descricao}
                </option>
              ))}
            </Select>
          </Box>
          <PessoaJuridicaAutoComplete
            name="orgao-previdencia"
            label="Órgão de previdência:"
            pessoaJuridica={previdencia.orgao_previdencia}
            errorMessage={"Órgão da previdência é obrigatório"}
          />
          <PessoaJuridicaAutoComplete
            name="orgao-recolhimento"
            label="Órgão de recolhimento:"
            pessoaJuridica={previdencia.orgao_recolhimento}
            errorMessage={"Órgão de recolhimento é obrigatório"}
          />
        </Flex>
      </UpdateEntity>
    </FormProvider>
  );
}

function DeletePrevidencia({
  previdencia,
  invalidateQueries,
}: {
  previdencia: ConfiguracaoPrevidencia;
  invalidateQueries?: any;
}) {
  const toastConfig = {
    success: {
      title: "Configuração excluída.",
      status: "success",
    },
    error: {
      title: "Não foi possível excluir a configuração.",
      status: "error",
    },
  };

  return (
    <DeleteEntity
      title={`Excluindo a configuração ${previdencia.orgao_previdencia.nome}`}
      name={"configuracao-previdencia-id"}
      entity={previdencia}
      formAction={deletePrevidenciaAction}
      toastConfig={toastConfig}
      invalidateQueries={invalidateQueries}
    >
      Você tem certeza que deseja excluir a configuração
      {` ${previdencia?.orgao_previdencia.nome}`}?
    </DeleteEntity>
  );
}
