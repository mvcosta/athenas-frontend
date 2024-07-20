"use client";

import {
  Divider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

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
  const modalRef = useRef<any>(null);

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    const modal = modalRef.current;

    let l = modal.offsetLeft;
    let t = modal.offsetTop;

    const startX = e.pageX;
    const startY = e.pageY;

    const drag = (e: any) => {
      const styles = window.getComputedStyle(modal);
      const marginLeft = parseInt(styles.marginLeft);
      const marginTop = parseInt(styles.marginTop);

      modal.style.left = l + (e.pageX - startX - marginLeft) + "px";
      modal.style.top = t + (e.pageY - startY - marginTop) + "px";
    };

    const mouseup = () => {
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", mouseup);
    };

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", mouseup);
  }

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
