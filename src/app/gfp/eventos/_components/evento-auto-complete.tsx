"use client";

import Eventos from "./eventos";
import { Evento } from "../../_models/eventos.models";
import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { Box, FormLabel } from "@chakra-ui/react";
import { getEntityQueryFn, getSearchEntityQueryFn } from "@/lib/query";
import { SetStateAction } from "react";

export default function EventoAutoComplete() {
  const endpoint = "eventos";
  const getItemText = (e: Evento) => `${e.numero} (${e.rubrica}) - ${e.titulo}`;

  const handleSelected = (
    e: Evento,
    setValue: React.Dispatch<SetStateAction<string>>
  ) => setValue(getItemText(e));

  const getQuery = getEntityQueryFn<Evento>(endpoint);
  const searchQuery = getSearchEntityQueryFn<Evento>(endpoint);

  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <EntityAutoComplete
        queryKey={endpoint}
        placeholder={"Selecione o evento"}
        entityNotFound={"Nenhum evento encontrado"}
        handleSelectedEntity={handleSelected}
        searchEntityQuery={searchQuery}
        getEntitiesQuery={getQuery}
        getItemText={getItemText}
        Entity={Eventos}
      />
    </Box>
  );
}
