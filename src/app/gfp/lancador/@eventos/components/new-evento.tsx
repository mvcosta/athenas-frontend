"use client";

import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  ModalBody,
  ModalFooter,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import MoedaFormControl from "../../../../../components/moeda/moeda-form-control";
import DraggableModal from "@/components/draggable-modal";
import EventoFormControl from "@/app/gfp/components/evento-form-control";

export default function NewEvento() {
  const pathname = usePathname();
  const paths = pathname.split("/");
  const ano = paths?.[3];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const moedaFormControls = [
    "Quantidade:",
    "Quantidade Base:",
    "Percentual:",
    "Prazo:",
    "Valor:",
    "Valor Base:",
    "Patronal:",
    "Base Previdenciária:",
  ];

  return (
    <>
      <MenuItem icon={<AddIcon />} onClick={onOpen}>
        Adicionar
      </MenuItem>
      <DraggableModal
        title="Lançar Evento"
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalBody>
          <form action="">
            <FormControl>
              <Flex direction={"column"} marginBottom={"1rem"} gap={"10px"}>
                <Box>
                  <FormLabel>Competencia:</FormLabel>
                  <Input
                    variant="filled"
                    placeholder={`Janeiro de ${ano}`}
                    isDisabled={true}
                  />
                </Box>
                <EventoFormControl />
              </Flex>
              <Flex wrap={"wrap"} gap={"15px 10px"} marginTop={"1rem"}>
                {moedaFormControls.map((m) => (
                  <MoedaFormControl key={m}>{m}</MoedaFormControl>
                ))}
                <Box flex={1}>
                  <FormLabel>Informações:</FormLabel>
                  <Textarea></Textarea>
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
