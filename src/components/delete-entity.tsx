"use client";

import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  useToast,
  Button,
  Input,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import DeleteButton from "./delete-button";
import DraggableModal from "./draggable-modal";
import { ActionState } from "@/interfaces/action-state";
import { HasId } from "@/interfaces/has-id";
import { useFormState } from "react-dom";

function DeleteEntity<T extends HasId>({
  children,
  title,
  entity,
  formAction,
  invalidateQueries,
}: {
  children: React.ReactNode;
  title: string;
  entity: T;
  formAction: any;
  invalidateQueries?: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const queryClient = useQueryClient();

  const [state, action] = useFormState<ActionState, FormData>(formAction, {
    message: "",
    status: "",
  });

  useEffect(() => {
    if (state.status === "success") {
      if (invalidateQueries) {
        queryClient.invalidateQueries(invalidateQueries);
      }
      onClose();
    }
  }, [state]);

  return (
    <>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        colorScheme="red"
      >
        <DeleteIcon />
      </Button>
      <DraggableModal
        title={title}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form action={action}>
          <Input type="hidden" name={"id"} value={entity.id} />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <DeleteButton />
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}

export default DeleteEntity;
