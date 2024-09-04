"use client";

import {
  getEventosQuery,
  searchEventosQuery,
} from "../../_queries/eventos-query";
import Eventos from "./eventos";
import { Evento } from "../../_models/eventos.models";
import EntityAutoComplete from "@/components/autocomplete/entity-auto-complete";
import { Box, FormLabel } from "@chakra-ui/react";

export default function EventoAutoComplete() {
  const getEventoText = (e: Evento) =>
    `${e.numero} (${e.rubrica}) - ${e.titulo}`;

  const handleSelectedEvento = (
    evento: Evento,
    setValue: (value: any) => void
  ) => setValue(`${evento.numero} (${evento.rubrica}) - ${evento.titulo}`);

  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <EntityAutoComplete
        queryKey={"evento"}
        placeholder={"Selecione o evento"}
        entityNotFound={"Nenhum evento encontrado"}
        handleSelectedEntity={handleSelectedEvento}
        searchEntityQuery={searchEventosQuery}
        getEntitiesQuery={getEventosQuery}
        getItemText={getEventoText}
        Entity={Eventos}
      />
    </Box>
  );
}
