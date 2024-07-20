import {
  Divider,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function DraggableModal({
  title,
  isOpen,
  onClose,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const documentRef = useRef(document);
  const modalRef = useRef<any>(null);

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    const modal = modalRef.current;
    const document = documentRef.current;

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
      size={"xl"}
      closeOnOverlayClick={false}
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
}
