"use client";

import PessoaJuridicaAutoComplete from "@/app/rh/pessoa-juridica/_components/pessoa-juridica-auto-complete";
import DraggableModal from "@/components/draggable-modal";
import { EnumField } from "@/interfaces/enum-field";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  ModalBody,
  ModalFooter,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { createPrevidencia } from "../../_actions/previdencia";
import { useFormState } from "react-dom";
import SaveButton from "../../../../components/save-button";
import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";

export type PrevidenciaOptions = {
  regimesPrevidenciaEnum: EnumField[];
  regimesPrevidenciaSicapEnum: EnumField[];
  planosSegregacaoMassa: EnumField[];
};

type State = {
  message: string;
  status: string;
};

export default function CreatePrevidencia({
  children,
  options,
}: {
  children: React.ReactNode;
  options: PrevidenciaOptions;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, action] = useFormState<State, FormData>(createPrevidencia, {
    message: "",
    status: "",
  });
  const toast = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Configuração criada.",
        description: state.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
    }

    if (state.status === "error") {
      toast({
        title: "Não foi possível criar a configuração.",
        description: state.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [state]);

  return (
    <>
      <Button onClick={onOpen}>
        <Flex columnGap="10px" alignItems="center">
          <AddIcon />
          {children}
        </Flex>
      </Button>
      <DraggableModal
        title="Nova Configuração de Previdência"
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form action={action}>
          <ModalBody>
            <FormControl>
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
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <SaveButton />
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}
