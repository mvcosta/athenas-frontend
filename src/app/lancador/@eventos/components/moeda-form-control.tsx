import { Box, FormLabel } from "@chakra-ui/react";
import MoedaInput from "./moeda-input";

export default function MoedaFormControl({ children }: { children: string }) {
  return (
    <Box>
      <FormLabel>{children}</FormLabel>
      <MoedaInput />
    </Box>
  );
}
