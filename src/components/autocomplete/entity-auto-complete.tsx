"use client";

import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
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
  placeholder,
  entityNotFound,
  name,
  queryKey,
  searchEntityQuery,
  getEntitiesQuery,
  getItemText,
  Entity,
}: {
  placeholder?: string;
  entityNotFound?: string;
  name?: string;
  queryKey: string;
  searchEntityQuery: searchEntityQuery<T>;
  getEntitiesQuery: getEntitiesQuery<T>;
  getItemText: (entity: T) => string;
  Entity: React.ComponentType<EntityProps<T>>;
}) {
  const [value, setValue] = useState<string>("");
  const [entityId, setEntityId] = useState<string>("");

  const handleOnSelected = (e: T) => {
    setValue(getItemText(e));
    setEntityId(e.id.toString());
  };

  const { data, isLoading } = useQuery({
    queryKey: [queryKey, { search: value }],
    queryFn: searchEntityQuery,
  });

  return (
    <>
      <Input type="hidden" name={`${name}-id`} value={entityId} />
      <AutoComplete
        openOnFocus
        isLoading={isLoading}
        emptyState={<Box textAlign="center">{entityNotFound}</Box>}
      >
        <InputGroup>
          <InputLeftAddon>
            <SearchIcon />
          </InputLeftAddon>
          <AutoCompleteInput
            name={name}
            borderRightRadius={0}
            variant="filled"
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />

          <SelectEntity
            queryFn={getEntitiesQuery}
            queryKey={queryKey}
            Entity={Entity}
            onSelected={(e) => handleOnSelected(e)}
          />
        </InputGroup>

        <AutoCompleteList fontSize="0.9rem" resize="both">
          {data?.map((e) => {
            const text = getItemText(e);
            return (
              <AutoCompleteItem
                key={e.id}
                value={text}
                onClick={() => handleOnSelected(e)}
              >
                {text}
              </AutoCompleteItem>
            );
          })}
        </AutoCompleteList>
      </AutoComplete>
    </>
  );
}
