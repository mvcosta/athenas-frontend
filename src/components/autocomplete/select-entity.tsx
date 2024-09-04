"use client";

import { AddIcon } from "@chakra-ui/icons";
import {
  CircularProgress,
  Heading,
  InputLeftAddon,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import EntityRow, { EntityRowProps } from "@/components/entity-row";
import { calcLastPage } from "@/lib/pagination-utils";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import DraggableModal from "../draggable-modal";
import PaginationControls from "../pagination/pagination-controls";
import { HasId } from "@/interfaces/has-id";

export type SelectEntityConfig<T extends HasId> = {
  entityName: string;
  queryKey: string;
  queryFn: queryFnType<T>;
  Entity: React.ComponentType<EntityProps<T>>;
};

type queryFnType<T> = (
  context: QueryFunctionContext<[string, { page: number; limit: number }]>
) => Promise<{ data: T[]; count: number }>;

type EntityProps<T extends HasId> = {
  data: T[];
  EntityRow: typeof EntityRow<T>;
};

export default function SelectEntity<T extends HasId>({
  onSelected,
  config,
}: {
  onSelected: (evento: T) => void;
  config: SelectEntityConfig<T>;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: [config.queryKey, { page: page, limit: 20 }],
    queryFn: config.queryFn,
  });

  const entityData = data?.data;
  const lastPage = calcLastPage(data?.count ?? 0, 20);

  async function onPageChange(page: number) {
    setPage(page);
  }

  const handleClick = (e: T) => {
    onSelected(e);
    onClose();
  };

  let content = (
    <>
      <SelectEntityTable
        Entity={config.Entity}
        entities={entityData!}
        onClick={handleClick}
      />
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
      <InputLeftAddon
        borderLeftRadius={0}
        borderRightRadius={"5px"}
        as="button"
        type="button"
        color="green"
        onClick={onOpen}
      >
        <AddIcon />
      </InputLeftAddon>
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

function SelectEntityTable<T extends HasId>({
  Entity,
  entities,
  onClick,
}: {
  Entity: any;
  entities: T[];
  onClick?: (e: T) => void;
}) {
  const withOnClickEntityRow = ({ entity, ...props }: EntityRowProps<T>) => (
    <EntityRow {...props} entity={entity} onClick={() => onClick?.(entity)}>
      {props.children}
    </EntityRow>
  );

  return <Entity data={entities} EntityRow={withOnClickEntityRow} />;
}
