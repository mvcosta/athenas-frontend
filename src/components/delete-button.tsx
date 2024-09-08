import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";

export default function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button colorScheme="red" mr={3} type="submit">
      {pending ? <Spinner /> : "Excluir"}
    </Button>
  );
}
