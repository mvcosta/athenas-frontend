import { NumberInput, NumberInputField } from "@chakra-ui/react";
export default function MoedaInput() {
  return (
    <NumberInput defaultValue={0} min={0} precision={2}>
      <NumberInputField />
    </NumberInput>
  );
}
