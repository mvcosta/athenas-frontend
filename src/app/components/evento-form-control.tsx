import { SearchIcon, AddIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";

export default function EventoFormControl() {
  return (
    <Box>
      <FormLabel>Evento:</FormLabel>
      <InputGroup>
        <InputLeftAddon>
          <SearchIcon />
        </InputLeftAddon>
        <Input placeholder="Busque o evento" />
        <InputRightElement color="green">
          <Link href="/lancador">
            <AddIcon />
          </Link>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
