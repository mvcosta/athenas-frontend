import CreatePrevidencia from "@/app/gfp/previdencia/_components/create-previdencia";
import { Button, Flex } from "@chakra-ui/react";

export default function CrudControls() {
  return (
    <Flex columnGap={"2rem"}>
      <CreatePrevidencia>Novo</CreatePrevidencia>
      <CreatePrevidencia>Editar</CreatePrevidencia>
      <Button>Apagar</Button>
    </Flex>
  );
}
