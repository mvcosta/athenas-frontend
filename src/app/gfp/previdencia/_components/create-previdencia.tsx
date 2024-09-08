import PessoaJuridicaAutoComplete from "@/app/rh/pessoa-juridica/_components/pessoa-juridica-auto-complete";
import { EnumField } from "@/interfaces/enum-field";
import { Box, Flex, FormLabel, Select } from "@chakra-ui/react";
import { createPrevidencia } from "../../_actions/previdencia";
import CreateEntity from "@/components/create-entity";

export type PrevidenciaOptions = {
  regimesPrevidenciaEnum: EnumField[];
  regimesPrevidenciaSicapEnum: EnumField[];
  planosSegregacaoMassa: EnumField[];
};

export default function CreatePrevidencia({
  options,
}: {
  options: PrevidenciaOptions;
}) {
  const toastConfig = {
    success: {
      title: "Configuração criada.",
      status: "success",
      duration: 9000,
      isClosable: true,
    },
    error: {
      title: "Não foi possível criar a configuração.",
      status: "error",
      duration: 9000,
      isClosable: true,
    },
  };

  return (
    <CreateEntity
      title={"Nova Configuração de Previdência"}
      formAction={createPrevidencia}
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
