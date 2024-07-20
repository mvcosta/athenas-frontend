"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import SelectEvento from "./select-evento";
import { useState } from "react";
import { Evento } from "@/models/eventos.models";

export default function EventoFormControl() {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: any) => setValue(event.target.value);
  const handleSelectedEvento = (evento: Evento) =>
    setValue(`${evento.numero} (${evento.rubrica}) - ${evento.titulo}`);

  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <InputGroup>
        <InputLeftAddon>
          <SearchIcon />
        </InputLeftAddon>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Busque o evento"
        />
        <SelectEvento onSelected={handleSelectedEvento} />
      </InputGroup>
    </Box>
  );
}
