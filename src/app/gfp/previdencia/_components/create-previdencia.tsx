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
} from "@chakra-ui/react";
import { createPrevidencia } from "../../_actions/previdencia";

export type PrevidenciaOptions = {
  regimesPrevidenciaEnum: EnumField[];
  regimesPrevidenciaSicapEnum: EnumField[];
  planosSegregacaoMassa: EnumField[];
};

export default function CreatePrevidencia({
  children,
  options,
}: {
  children: React.ReactNode;
  options: PrevidenciaOptions;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{children}</Button>
      <DraggableModal
        title="Nova Configuração de Previdência"
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form action={createPrevidencia}>
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
            <Button colorScheme="green" mr={3} type="submit">
              Salvar
            </Button>
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}
