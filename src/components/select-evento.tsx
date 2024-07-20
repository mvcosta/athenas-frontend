"use client";

import { AddIcon } from "@chakra-ui/icons";
import { InputRightElement, ModalBody, useDisclosure } from "@chakra-ui/react";
import { Evento } from "@/models/eventos.models";
import Eventos from "../app/gfp/eventos/components/eventos";
import { useState } from "react";
import { getEventos } from "../app/gfp/eventos/lib/eventos";
import DraggableModal from "./draggable-modal";

export default function SelectEvento({
  onSelected,
}: {
  onSelected: (evento: Evento) => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventos, setEventos] = useState<Evento[]>([]);

  async function onOpenModal() {
    const eventosRes = await getEventos();
    setEventos(eventosRes);
    onOpen();
  }

  const handleClick = (e: Evento) => {
    onSelected(e);
    onClose();
  };

  return (
    <>
      <InputRightElement
        as="button"
        type="button"
        color="green"
        onClick={onOpenModal}
      >
        <AddIcon />
      </InputRightElement>
      <DraggableModal
        title="Selecionar Evento"
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalBody>
          <Eventos eventos={eventos} onClick={handleClick} />
        </ModalBody>
      </DraggableModal>
    </>
  );
}
