import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";
import { createFiliacao, createPrevidencia } from "../../_actions/previdencia";
import CreateEntity from "@/components/create-entity";
import ServidorAutoComplete from "@/app/rh/servidor/_components/servidor-auto-complete";
import { useQuery } from "@tanstack/react-query";
import { getEntityByIdQueryFn } from "@/lib/query";
import { ConfiguracaoPrevidencia } from "../../_models/previdencia.models";

export default function CreateFiliacao({
  configPrevidenciaId,
}: {
  configPrevidenciaId?: number;
}) {
  let configPrevidencia;
  if (configPrevidenciaId) {
    const endpoint = "v2/configuracoes-previdencia";

    const { data } = useQuery({
      queryKey: ["configuracoes-previdencia", { id: configPrevidenciaId }],
      queryFn: getEntityByIdQueryFn<ConfiguracaoPrevidencia>(
        endpoint,
        configPrevidenciaId
      ),
    });
    configPrevidencia = data;
  }

  const toastConfig = {
    success: {
      title: "Filiação criada.",
      status: "success",
      duration: 9000,
      isClosable: true,
    },
    error: {
      title: "Não foi possível criar a filiação.",
      status: "error",
      duration: 9000,
      isClosable: true,
    },
  };

  return (
    <CreateEntity
      title={"Nova Filiação de Previdência"}
      formAction={createFiliacao}
      btnText={"Adicionar Filiação"}
      toastConfig={toastConfig}
      invalidateQueries={{ queryKey: ["filiacoes-previdencia"] }}
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
