"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { Box, FormLabel, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import SelectEvento from "./select-evento";
import { useState } from "react";
import { Evento } from "@/models/eventos.models";
import { useQuery } from "@tanstack/react-query";
import { searchEventosQuery } from "../eventos/lib/eventos";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

export default function EventoFormControl() {
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

  const options = [
    "AUXÍLIO ALIMENTAÇÃO",
    "AUXÍLIO ALIMENTAÇÃO DE DEFENSOR",
    "AUXÍLIO ALIMENTAÇÃO SERVIDOR FEDERAL",
    "AUXÍLIO NATALIDADE",
  ];

  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <AutoComplete
        openOnFocus
        isLoading={isLoading}
        emptyState={<Box textAlign="center"> Nenhum evento encontrado </Box>}
      >
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <AutoCompleteInput
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
