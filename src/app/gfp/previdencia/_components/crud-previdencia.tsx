"use client";

import PessoaJuridicaAutoComplete from "@/app/rh/pessoa-juridica/_components/pessoa-juridica-auto-complete";
import CreateEntity from "@/components/create-entity";
import ListEntity from "@/components/list-entity";
import QueryPaginationControls from "@/components/pagination/query-pagination-controls";
import TanstackEntityTable from "@/components/tanstack-entity-table";
import { EnumField } from "@/interfaces/enum-field";
import { Flex, Box, FormLabel, Select } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";
import { createPrevidenciaAction } from "../../_actions/previdencia";

type PrevidenciaOptions = {
  regimesPrevidenciaEnum: EnumField[];
  regimesPrevidenciaSicapEnum: EnumField[];
  planosSegregacaoMassa: EnumField[];
};

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

export default function CrudPrevidencia({
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

function PrevidenciaTable({ data }: { data: ConfiguracaoPrevidencia[] }) {
  return <TanstackEntityTable data={data} columns={columns} pathIndex={3} />;
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
