import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputRightElement,
  MenuItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import MoedaInput from "./moeda-input";
import Link from "next/link";

export default function NewEvento() {
  const pathname = usePathname();
  const paths = pathname.split("/");

  const ano = paths?.[2];
  const mes = paths?.[3];
  const folha = paths?.[4];
  const contrachequeId = paths?.[5];

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onModalOpen() {
    if (!folha || !contrachequeId) {
      toast({
        title: "Selecione um contracheque",
        description:
          "Você deve selecionar um contracheque para adicionar um evento",
        status: "error",
        duration: 9000,
      });
      return;
    }

    onOpen();
  }

  return (
    <>
      <MenuItem icon={<AddIcon />} onClick={onModalOpen}>
        Adicionar
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lançar Evento</ModalHeader>
          <ModalCloseButton />
          <Divider />
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
                  <Box>
                    <FormLabel>Evento:</FormLabel>
                    <InputGroup>
                      <InputLeftAddon>
                        <SearchIcon />
                      </InputLeftAddon>
                      <Input placeholder="Busque o evento" />
                      <InputRightElement color="green">
                        <Link href="/">
                          <AddIcon />
                        </Link>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </Flex>
                <Divider />
                <Flex wrap={"wrap"} gap={"10px"} marginTop={"1rem"}>
                  <Box>
                    <FormLabel>Quantidade:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Quantidade Base:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Percentual:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Prazo:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Valor:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Valor Base:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Patronal:</FormLabel>
                    <MoedaInput />
                  </Box>
                  <Box>
                    <FormLabel>Base Previdenciária:</FormLabel>
                    <MoedaInput />
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
        </ModalContent>
      </Modal>
    </>
  );
}
