import { Container } from "@chakra-ui/react";
import classes from "./lancador.module.scss";
import React from "react";

interface LancadorPageProps {
  contracheques: React.ReactNode;
  eventos: React.ReactNode;
}

export default function LancadorPage({
  eventos,
  contracheques,
}: LancadorPageProps) {
  return (
    <Container maxW="1500px">
      <div className={classes.lancador}>
        <div className={classes.contracheques}>{contracheques}</div>
        <div className={classes.eventos}>{eventos}</div>
      </div>
    </Container>
  );
}
