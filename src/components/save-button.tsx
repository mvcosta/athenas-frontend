import { Button, Spinner } from "@chakra-ui/react";
import { useFormStatus } from "react-dom";
import { useFormContext } from "react-hook-form";

export default function SaveButton(props: any) {
  const { pending } = useFormStatus();
  const { formState } = useFormContext();

  const isDisabled = pending || !formState.isValid;
  return (
    <Button
      {...props}
      colorScheme="green"
      mr={3}
      type="submit"
      isDisabled={isDisabled}
    >
      {pending ? <Spinner /> : "Salvar"}
    </Button>
  );
}
