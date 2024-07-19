"use client";

import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import FiltroMenu from "./filtro-menu";
import { DeleteIcon, WarningTwoIcon } from "@chakra-ui/icons";

export default function ContrachequesHeader() {
  return (
    <Flex justifyContent="space-evenly">
      <Button colorScheme="red" leftIcon={<DeleteIcon />}>
        Apagar
      </Button>
      <Button
        marginLeft="1rem"
        colorScheme="yellow"
        leftIcon={<WarningTwoIcon />}
      >
        Alterações
      </Button>
      <Flex marginLeft="1rem" flexGrow="2" alignItems="center">
        <FormLabel as="span">Buscar:</FormLabel>
        <Input _placeholder="Busque por matrícula ou nome" />
      </Flex>
      <Button leftIcon={<DeleteIcon />}></Button>
      <Flex marginLeft="1rem">
        <FiltroMenu />
      </Flex>
    </Flex>
  );
}
