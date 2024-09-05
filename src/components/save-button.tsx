import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export default function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <Button colorScheme="green" mr={3} type="submit">
      {pending ? <Spinner /> : "Salvar"}
    </Button>
  );
}
