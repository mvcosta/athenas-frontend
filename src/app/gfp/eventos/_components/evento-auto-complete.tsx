"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { Box, FormLabel, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { useState } from "react";
import { Evento } from "@/app/gfp/_models/eventos.models";
import { useQuery } from "@tanstack/react-query";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import {
  getEventosQuery,
  searchEventosQuery,
} from "../../_queries/eventos-query";
import SelectEntity, {
  SelectEntityConfig,
} from "@/components/autocomplete/select-entity";
import Eventos from "./eventos";

export default function EventoAutoComplete() {
  const [value, setValue] = useState<string>(" ");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const handleSelectedEvento = (evento: Evento) =>
    setValue(`${evento.numero} (${evento.rubrica}) - ${evento.titulo}`);

  const { data, isLoading } = useQuery({
    queryKey: ["eventos", { search: value }],
    queryFn: searchEventosQuery,
    enabled: value.length > 0,
  });

  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <AutoComplete
        openOnFocus
        isLoading={isLoading}
        emptyState={<Box textAlign="center"> Nenhum evento encontrado </Box>}
        value={value}
      >
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <AutoCompleteInput
            borderRightRadius={0}
            variant="filled"
            placeholder="Busque o evento"
            onChange={handleChange}
          />

          <SelectEvento onSelected={handleSelectedEvento} />
        </InputGroup>

        <AutoCompleteList fontSize="0.9rem" resize="both">
          {data?.map((e) => {
            const text = `${e.numero} (${e.rubrica}) - ${e.titulo}`;
            return (
              <AutoCompleteItem key={e.id} value={text}>
                {text}
              </AutoCompleteItem>
            );
          })}
        </AutoCompleteList>
      </AutoComplete>
    </Box>
  );
}

function SelectEvento({
  onSelected,
}: {
  onSelected: (evento: Evento) => void;
}) {
  const config: SelectEntityConfig<Evento> = {
    entityName: "eventos",
    queryKey: "eventos",
    queryFn: getEventosQuery,
    Entity: Eventos,
  };
  return <SelectEntity onSelected={onSelected} config={config} />;
}
