"use client";

import { Button, Flex, Select } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export default function SeletorFolha({
  ano = "2024",
  mes = "1",
  folha = "1",
}: {
  ano?: string;
  mes?: string;
  folha?: string;
}) {
  const router = useRouter();

  const [inputAno, setInputAno] = useState(ano);
  const [inputMes, setInputMes] = useState(mes);
  const [inputFolha, setInputFolha] = useState(folha);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    router.push(`/lancador/${inputAno}/${inputMes}/${inputFolha}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex justify="space-evenly" align="center" flex="1" gap="5px">
        <Select
          value={inputAno}
          flex="1"
          onChange={(e) => setInputAno(e.target.value)}
        >
          <option value="2024">2024</option>
        </Select>
        <Select
          value={inputMes}
          flex="1.5"
          onChange={(e) => setInputMes(e.target.value)}
        >
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
        </Select>
        <Select
          flex="3"
          value={inputFolha}
          onChange={(e) => setInputFolha(e.target.value)}
        >
          <option value="1">Folha normal</option>
          <option value="2">Auxílio Alimentação</option>
        </Select>
        <Button type="submit" flex="1">
          Selecionar
        </Button>
      </Flex>
    </form>
  );
}
