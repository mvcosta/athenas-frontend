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

type State = {
  message: string;
  status: string;
};

export default function CreateEntity({
  children,
  title,
  formAction,
  btnText,
  toastConfig,
}: {
  children: React.ReactNode;
  title: string;
  formAction: any;
  btnText: string;
  toastConfig: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, action] = useFormState<State, FormData>(formAction, {
    message: "",
    status: "",
  });
  const toast = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({ ...toastConfig.success, description: state.message });
      onClose();
    }
    if (state.status === "error") {
      toast({ ...toastConfig.error, description: state.message });
    }
  }, [state]);

  return (
    <>
      <Button onClick={onOpen}>
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
