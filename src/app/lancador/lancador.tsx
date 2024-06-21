"use client";

import { useState } from "react";
import Contracheque from "./components/contracheque/contracheque";
import { Container, Flex } from "@chakra-ui/react";
import styles from "./lancador.module.css";
import Servidores from "./components/servidores/servidores";

export default function Lancador() {
  const [servidor, setServidor] = useState({ id: 3 });

  function changeContracheque(servidor_id: number) {
    setServidor({ id: servidor_id });
  }
  return (
    <Container maxW="1320px">
      <Flex
        className={styles.mainh}
        flexDirection="column"
        justifyContent="space-around"
      >
        <div>
          <Servidores
            selectedServidor={servidor}
            servidorClicked={changeContracheque}
          />
        </div>
        <div>
          <Contracheque servidor={servidor} />
        </div>
      </Flex>
    </Container>
  );
}
