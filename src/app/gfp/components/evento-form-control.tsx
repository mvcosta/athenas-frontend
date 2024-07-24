"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import SelectEvento from "./select-evento";
import { useRef, useState } from "react";
import { Evento } from "@/models/eventos.models";
import { useQuery } from "@tanstack/react-query";
import { searchEventosQuery } from "../eventos/lib/eventos";

export default function EventoFormControl() {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: any) => setValue(event.target.value);
  const handleSelectedEvento = (evento: Evento) =>
    setValue(`${evento.numero} (${evento.rubrica}) - ${evento.titulo}`);

  const initialFocusRef = useRef<any>();

  return (
    <Box>
      <Popover initialFocusRef={initialFocusRef} placement="bottom-start">
        <FormLabel>Evento:</FormLabel>
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <PopoverTrigger>
            <Input
              ref={initialFocusRef}
              value={value}
              onChange={handleChange}
              placeholder="Busque o evento"
            />
          </PopoverTrigger>
          <SelectEvento onSelected={handleSelectedEvento} />
        </InputGroup>
        {value ? (
          <SearchBox search={value} onClick={handleSelectedEvento} />
        ) : null}
      </Popover>
    </Box>
  );
}

function SearchBox({
  search,
  onClick,
}: {
  search: string;
  onClick: (evento: Evento) => void;
}) {
  const { data } = useQuery({
    queryKey: ["eventos", { search: search }],
    queryFn: searchEventosQuery,
  });

  const showContent = data ? data.length > 0 : false;

  return (
    <>
      {showContent ? (
        <PopoverContent width="auto">
          <PopoverBody>
            {data?.map((e) => (
              <Box
                key={e.id}
                cursor="pointer"
                padding="1"
                _hover={{ bg: "#152838" }}
                onClick={() => onClick(e)}
              >
                {e.numero} ({e.rubrica}) - {e.titulo}
              </Box>
            ))}
          </PopoverBody>
        </PopoverContent>
      ) : null}
    </>
  );
}
