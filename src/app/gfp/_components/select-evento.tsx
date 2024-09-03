"use client";

import { AddIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  Heading,
  InputRightElement,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Evento } from "@/app/gfp/_models/eventos.models";
import { useState } from "react";
import DraggableModal from "../../../components/draggable-modal";
import PaginationControls from "../../../components/pagination/pagination-controls";
import EntityRow, { EntityRowProps } from "@/components/entity-row";
import Eventos from "../eventos/_components/eventos";
import { calcLastPage } from "@/lib/pagination-utils";
import { useQuery } from "@tanstack/react-query";
import { getEventosQuery } from "../_queries/eventos-query";

export default function SelectEvento({
  onSelected,
}: {
  onSelected: (evento: Evento) => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["eventos", { page: page, limit: 20 }],
    queryFn: getEventosQuery,
  });

  const eventos = data?.eventos;
  const lastPage = calcLastPage(data?.count ?? 0, 20);

  async function onPageChange(page: number) {
    setPage(page);
  }

  const handleClick = (e: Evento) => {
    onSelected(e);
    onClose();
  };

  let content = (
    <>
      <SelectEventoTable eventos={eventos!} onClick={handleClick} />
    </>
  );

  if (isPending)
    content = (
      <Heading>
        <CircularProgress isIndeterminate color="green.300" />
      </Heading>
    );

  return (
    <>
      <InputRightElement
        as="button"
        type="button"
        color="green"
        onClick={onOpen}
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
          {content}
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
