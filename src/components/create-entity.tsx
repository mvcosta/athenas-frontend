"use client";

import DraggableModal from "@/components/draggable-modal";
import {
  Button,
  Flex,
  FormControl,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import SaveButton from "./save-button";
import { useQueryClient } from "@tanstack/react-query";
import { ActionState } from "@/interfaces/action-state";

export default function CreateEntity({
  children,
  title,
  formAction,
  btnText,
  invalidateQueries,
  toastConfig,
}: {
  children: React.ReactNode;
  title: string;
  formAction: any;
  btnText: string;
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
      <Button onClick={onOpen} colorScheme="green">
        <Flex columnGap="10px" alignItems="center">
          <AddIcon />
          {btnText}
        </Flex>
      </Button>
      <DraggableModal
        title={title}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form action={action}>
          <ModalBody>
            <FormControl>{children}</FormControl>
          </ModalBody>
          <ModalFooter>
            <SaveButton />
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}
