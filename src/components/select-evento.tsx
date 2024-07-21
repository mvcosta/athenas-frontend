"use client";

import { AddIcon } from "@chakra-ui/icons";
import { InputRightElement, ModalBody, useDisclosure } from "@chakra-ui/react";
import { Evento } from "@/models/eventos.models";
import Eventos from "../app/gfp/eventos/components/eventos";
import { useState } from "react";
import { getEventos } from "../app/gfp/eventos/lib/eventos";
import DraggableModal from "./draggable-modal";
import { useParams } from "next/navigation";
import { getPageFromParams } from "@/lib/fetch";
import PaginationControls from "./pagination/pagination-controls";

export default function SelectEvento({
  onSelected,
}: {
  onSelected: (evento: Evento) => void;
}) {
  const params = useParams();
  const { page, limit } = getPageFromParams(params);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [numberOfPages, setnumberOfPages] = useState<number>(0);

  async function onOpenModal() {
    const { eventos: eventosRes, count } = await getEventos();
    setEventos(eventosRes);
    setnumberOfPages(Math.ceil(count / limit));
    onOpen();
  }

  async function onPageChange(page: number) {
    const { eventos: eventosRes } = await getEventos(page);
    setEventos(eventosRes);
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
          <PaginationControls
            onPageChange={onPageChange}
            numberOfPages={numberOfPages}
          />
        </ModalBody>
      </DraggableModal>
    </>
  );
}
