"use client";

import Eventos from "./eventos";
import { Evento } from "../../_models/eventos.models";
import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { Box, FormLabel } from "@chakra-ui/react";
import { getEntityQueryFn, getSearchEntityQueryFn } from "@/lib/query";

export default function EventoAutoComplete() {
  const endpoint = "eventos";
  const getItemText = (e: Evento) => `${e.numero} (${e.rubrica}) - ${e.titulo}`;
  const getQuery = getEntityQueryFn<Evento>(endpoint);
  const searchQuery = getSearchEntityQueryFn<Evento>(endpoint);

  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <EntityAutoComplete
        queryKey={endpoint}
        placeholder={"Selecione o evento"}
        entityNotFound={"Nenhum evento encontrado"}
        searchEntityQuery={searchQuery}
        getEntitiesQuery={getQuery}
        getItemText={getItemText}
        Entity={Eventos}
      />
    </Box>
  );
}
