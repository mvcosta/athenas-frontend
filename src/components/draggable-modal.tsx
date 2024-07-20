"use client";

import useDraggable from "@/hooks/useDraggable";
import {
  Divider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface DraggableModalProps extends ModalProps {
  title: string;
}

const DraggableModal: FC<DraggableModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
  ...props
}) => {
  const { ref: modalRef, handleMouseDown } = useDraggable();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnOverlayClick={false}
      {...props}
    >
      <ModalOverlay />
      <ModalContent ref={modalRef}>
        <ModalHeader onMouseDown={handleMouseDown}>{title}</ModalHeader>
        <ModalCloseButton />
        <Divider />
        {children}
      </ModalContent>
    </Modal>
  );
};

export default DraggableModal;
