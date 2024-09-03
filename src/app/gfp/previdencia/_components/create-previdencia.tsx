"use client";

import DraggableModal from "@/components/draggable-modal";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

export default function CreatePrevidencia({
  children,
}: {
  children: React.ReactNode;
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
                  <FormLabel>Previdencia:</FormLabel>
                  <Input />
                </Box>
                <Box>
                  <FormLabel>Plano de Segregação da Massa:</FormLabel>
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
