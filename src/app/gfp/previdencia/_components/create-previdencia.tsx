"use client";

import DraggableModal from "@/components/draggable-modal";
import { EnumField } from "@/interfaces/enum-field";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

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
        <ModalBody>
          <form action="">
            <FormControl>
              <Flex direction={"column"} marginBottom={"1rem"} gap={"10px"}>
                <Box>
                  <FormLabel>Regime de previdência:</FormLabel>
                  <Select>
                    {options.regimesPrevidenciaEnum.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.descricao}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Regime de previdência (SICAP):</FormLabel>
                  <Select>
                    {options.regimesPrevidenciaSicapEnum.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.descricao}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Plano de Segregação da Massa:</FormLabel>
                  <Select>
                    {options.planosSegregacaoMassa.map((o) => (
                      <option key={o.id} value={o.id}>
                        {o.descricao}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Órgão de previdência:</FormLabel>
                  <Input />
                </Box>
                <Box>
                  <FormLabel>Órgão de recolhimento:</FormLabel>
                  <Input />
                </Box>
              </Flex>
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="green" mr={3} onClick={onClose}>
            Salvar
          </Button>
        </ModalFooter>
      </DraggableModal>
    </>
  );
}
