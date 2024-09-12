"use client";

import { Button, useDisclosure } from "@chakra-ui/react";
import CreateOrUpdateEntity from "./create-or-update-entity";
import { EditIcon } from "@chakra-ui/icons";

export default function UpdateEntity(props: {
  children: React.ReactNode;
  title: string;
  formAction: any;
  invalidateQueries?: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const button = (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        onOpen();
      }}
      colorScheme="blue"
    >
      <EditIcon />
    </Button>
  );

  const childProps = {
    ...props,
    button,
    isOpen,
    onClose,
  };

  return <CreateOrUpdateEntity {...childProps} />;
}
