"use client";

import DraggableModal from "@/components/draggable-modal";
import { ModalBody, ModalFooter, useToast } from "@chakra-ui/react";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import SaveButton from "./save-button";
import { useQueryClient } from "@tanstack/react-query";
import { ActionState } from "@/interfaces/action-state";

export default function CreateOrUpdateEntity({
  children,
  title,
  formAction,
  button,
  invalidateQueries,
  onClose,
  isOpen,
}: {
  children: React.ReactNode;
  title: string;
  formAction: any;
  button: React.ReactNode;
  invalidateQueries?: any;
  onClose: () => void;
  isOpen: boolean;
}) {
  const [state, action] = useFormState<ActionState, FormData>(formAction, {
    message: "",
    status: "",
  });
  const toast = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (state?.status === "success") {
      if (invalidateQueries) {
        queryClient.invalidateQueries(invalidateQueries);
      }
      onClose();
    }
  }, [state]);

  return (
    <>
      {button}
      <DraggableModal
        title={title}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <form action={action}>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <SaveButton />
          </ModalFooter>
        </form>
      </DraggableModal>
    </>
  );
}
