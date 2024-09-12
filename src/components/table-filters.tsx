"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TableFilters = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function onSearch(search: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(`search`, search.toString());
    const newQuery = current.toString();
    const query = newQuery ? `?${newQuery}` : "";

    router.push(`${pathName}${query}`);
  }

  return (
    <InputGroup size="sm" maxW="30rem">
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="text"
        variant="filled"
        placeholder="Pesquise"
        borderRadius={5}
        onChange={(e) => onSearch(e.currentTarget.value)}
      />
    </InputGroup>
  );
};
export default TableFilters;
