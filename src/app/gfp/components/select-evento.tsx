"use client";

import { AddIcon } from "@chakra-ui/icons";
import { InputRightElement, ModalBody, useDisclosure } from "@chakra-ui/react";
import { Evento } from "@/models/eventos.models";
import { useState } from "react";
import { getEventos } from "../eventos/lib/eventos";
import DraggableModal from "../../../components/draggable-modal";
import { useParams } from "next/navigation";
import PaginationControls from "../../../components/pagination/pagination-controls";
import EntityRow, { EntityRowProps } from "@/components/entity-row";
import Eventos from "../eventos/components/eventos";
import { getPageFromParams } from "@/lib/pagination-utils";

export default function SelectEvento({
  onSelected,
}: {
  onSelected: (evento: Evento) => void;
}) {
  const params = useParams();
  const { limit } = getPageFromParams(params);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [lastPage, setlastPage] = useState<number>(0);

  async function onOpenModal() {
    const { eventos: eventosRes, count } = await getEventos(1, 20);
    setEventos(eventosRes);
    setlastPage(Math.ceil(count / limit));
    onOpen();
  }

  async function onPageChange(page: number) {
    const { eventos: eventosRes } = await getEventos(page, 20);
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
          <PaginationControls onPageChange={onPageChange} lastPage={lastPage} />
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