"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteList,
  AutoCompleteItem,
} from "@choc-ui/chakra-autocomplete";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import SelectEntity from "./select-entity";
import { HasId } from "@/interfaces/has-id";
import {
  searchEntityQuery,
  EntityProps,
  getEntitiesQuery,
} from "./auto-complete.type";
import { useFormContext } from "react-hook-form";

export default function EntityAutoComplete<T extends HasId>({
  placeholder,
  entityNotFound,
  errorMessage,
  name,
  label,
  queryKey,
  searchEntityQuery,
  getEntitiesQuery,
  getItemText,
  selectedEntity,
  Entity,
}: {
  placeholder?: string;
  entityNotFound?: string;
  errorMessage?: string;
  name: string;
  label?: string;
  queryKey: string;
  searchEntityQuery: searchEntityQuery<T>;
  getEntitiesQuery: getEntitiesQuery<T>;
  getItemText: (entity: T) => string;
  selectedEntity?: T;
  Entity: React.ComponentType<EntityProps<T>>;
}) {
  const [autoCompleteValue, setAutoCompleteValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const { register, setValue } = useFormContext();

  const setValueOptions = {
    shouldValidate: true,
    shouldDirty: true,
    shouldTouch: true,
  };

  const handleOnSelected = (e: T) => {
    setAutoCompleteValue(getItemText(e));
    setValue(`${name}-id`, e.id.toString(), setValueOptions);
    setError(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setValue(`${name}-id`, "", setValueOptions);
    }
    setAutoCompleteValue(value);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (!autoCompleteValue) {
      setError(true);
    }
  };

  useEffect(() => {
    if (selectedEntity) {
      handleOnSelected(selectedEntity);
    }
  }, []);

  const { data, isLoading } = useQuery({
    queryKey: [queryKey, { search: autoCompleteValue }],
    queryFn: searchEntityQuery,
  });

  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>

      <Input hidden={true} {...register?.(`${name}-id`, { required: true })} />

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
            borderRightRadius={0}
            variant="filled"
            placeholder={placeholder}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            value={autoCompleteValue}
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
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
