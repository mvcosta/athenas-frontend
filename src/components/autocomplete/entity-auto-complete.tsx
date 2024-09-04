"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { Box, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
} from "@choc-ui/chakra-autocomplete";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SelectEntity from "./select-entity";
import { HasId } from "@/interfaces/has-id";
import {
  searchEntityQuery,
  EntityProps,
  getEntitiesQuery,
} from "./auto-complete.type";

export default function EntityAutoComplete<T extends HasId>({
  handleSelectedEntity,
  placeholder,
  entityNotFound,
  queryKey,
  searchEntityQuery,
  getEntitiesQuery,
  getItemText,
  Entity,
}: {
  handleSelectedEntity: any;
  placeholder?: string;
  entityNotFound?: string;
  queryKey: string;
  searchEntityQuery: searchEntityQuery<T>;
  getEntitiesQuery: getEntitiesQuery<T>;
  getItemText: (entity: T) => string;
  Entity: React.ComponentType<EntityProps<T>>;
}) {
  const [value, setValue] = useState<string>(" ");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const { data, isLoading } = useQuery({
    queryKey: [queryKey, { search: value }],
    queryFn: searchEntityQuery,
    enabled: value.length > 0,
  });

  return (
    <AutoComplete
      openOnFocus
      isLoading={isLoading}
      emptyState={<Box textAlign="center">{entityNotFound}</Box>}
      value={value}
    >
      <InputGroup>
        <InputLeftAddon>
          <SearchIcon />
        </InputLeftAddon>
        <AutoCompleteInput
          borderRightRadius={0}
          variant="filled"
          placeholder={placeholder}
          onChange={handleChange}
        />

        <SelectEntity
          queryFn={getEntitiesQuery}
          queryKey={queryKey}
          Entity={Entity}
          onSelected={(evento) => handleSelectedEntity(evento, setValue)}
        />
      </InputGroup>

      <AutoCompleteList fontSize="0.9rem" resize="both">
        {data?.map((e) => {
          const text = getItemText(e);
          return (
            <AutoCompleteItem key={e.id} value={text}>
              {text}
            </AutoCompleteItem>
          );
        })}
      </AutoCompleteList>
    </AutoComplete>
  );
}
