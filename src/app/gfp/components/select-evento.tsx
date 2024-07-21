"use client";

import { AddIcon } from "@chakra-ui/icons";
import { InputRightElement, ModalBody, useDisclosure } from "@chakra-ui/react";
import { Evento } from "@/models/eventos.models";
import { useState } from "react";
import { getEventos } from "../eventos/lib/eventos";
import DraggableModal from "../../../components/draggable-modal";
import { useParams } from "next/navigation";
import { getPageFromParams } from "@/lib/fetch";
import PaginationControls from "../../../components/pagination/pagination-controls";
import EntityRow, { EntityRowProps } from "@/components/entity-row";
import Eventos from "../eventos/components/eventos";

export default function SelectEvento({
  onSelected,
}: {
  onSelected: (evento: Evento) => void;
}) {
  const params = useParams();
  const { limit } = getPageFromParams(params);

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
          <SelectEventoTable eventos={eventos} onClick={handleClick} />
          <PaginationControls
            onPageChange={onPageChange}
            numberOfPages={numberOfPages}
          />
        </ModalBody>
      </DraggableModal>
    </>
  );
}

function SelectEventoTable({
  eventos,
  onClick,
}: {
  eventos: Evento[];
  onClick?: (e: Evento) => void;
}) {
  const withOnClickEntityRow = ({
    entity,
    ...props
  }: EntityRowProps<Evento>) => (
    <EntityRow {...props} entity={entity} onClick={() => onClick?.(entity)}>
      {props.children}
    </EntityRow>
  );

  return <Eventos eventos={eventos} EntityRow={withOnClickEntityRow} />;
}
