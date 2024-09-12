"use client";

import { Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import CreateOrUpdateEntity from "./create-or-update-entity";
import { AddIcon } from "@chakra-ui/icons";

export default function CreateEntity({
  children,
  title,
  formAction,
  btnText,
  invalidateQueries,
}: {
  children: React.ReactNode;
  title: string;
  formAction: any;
  btnText: string;
  invalidateQueries?: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const button = (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      colorScheme="green"
    >
      <HStack>
        <AddIcon />
        <Text>{btnText}</Text>
      </HStack>
    </Button>
  );

  const childProps = {
    children,
    title,
    formAction,
    invalidateQueries,
    button,
    isOpen,
    onClose,
  };

  return <CreateOrUpdateEntity {...childProps} />;
}
