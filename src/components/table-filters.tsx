"use client";
import { updateSearchParam } from "@/lib/search-params-utils";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const TableFilters = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function onSearch(search: string) {
    const newSearchParams = updateSearchParam(
      searchParams,
      "search",
      search.toString()
    );
    router.push(pathName + newSearchParams);
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
