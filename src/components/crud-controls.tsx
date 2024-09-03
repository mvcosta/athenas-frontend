import {
  getRegimesPrevidenciaEnum,
  getRegimesPrevidenciaSicapEnum,
  getPlanosSegregacaoMassa,
} from "@/app/gfp/_lib/previdencia";
import CreatePrevidencia from "@/app/gfp/previdencia/_components/create-previdencia";
import { Button, Flex } from "@chakra-ui/react";

export default async function CrudControls() {
  const regimesPrevidenciaEnum = await getRegimesPrevidenciaEnum();
  const regimesPrevidenciaSicapEnum = await getRegimesPrevidenciaSicapEnum();
  const planosSegregacaoMassa = await getPlanosSegregacaoMassa();

  const options = {
    regimesPrevidenciaEnum,
    regimesPrevidenciaSicapEnum,
    planosSegregacaoMassa,
  };
  return (
    <Flex columnGap={"2rem"}>
      <CreatePrevidencia options={options}>Novo</CreatePrevidencia>
      <CreatePrevidencia options={options}>Editar</CreatePrevidencia>
      <Button>Apagar</Button>
    </Flex>
  );
}
