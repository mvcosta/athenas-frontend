import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const TableFilters = () => {
  return (
    <InputGroup size="sm" maxW="12rem">
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        type="text"
        variant="filled"
        placeholder="Pesquise"
        borderRadius={5}
      />
    </InputGroup>
  );
};
export default TableFilters;
