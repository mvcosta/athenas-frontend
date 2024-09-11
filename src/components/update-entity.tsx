"use client";

import DraggableModal from "@/components/draggable-modal";
import {
  Button,
  FormControl,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { EditIcon } from "@chakra-ui/icons";
import SaveButton from "./save-button";
import { useQueryClient } from "@tanstack/react-query";
import { ActionState } from "@/interfaces/action-state";

export default function UpdateEntity({
  children,
  title,
  formAction,
  invalidateQueries,
  toastConfig,
}: {
  children: React.ReactNode;
  title: string;
  formAction: any;
  invalidateQueries?: any;
  toastConfig: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, action] = useFormState<ActionState, FormData>(formAction, {
    message: "",
    status: "",
  });
  const toast = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (state.status === "success") {
      toast({ ...toastConfig.success, description: state.message });
      if (invalidateQueries) {
        queryClient.invalidateQueries(invalidateQueries);
      }
      onClose();
    }
    if (state.status === "error") {
      toast({ ...toastConfig.error, description: state.message });
    }
  }, [state]);

  return (
    <>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          onOpen();
        }}
        colorScheme="blue"
      >
        <EditIcon />
      </Button>
      <DraggableModal
        title={title}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <SaveButton />
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}
