import { Container } from "@chakra-ui/react";
import classes from "./lancador.module.scss";
import React from "react";

export default function LancadorLayout({
  eventos,
  contracheques,
}: {
  contracheques: React.ReactNode;
  eventos: React.ReactNode;
}) {
  return (
    <Container maxW="1500px">
      <div className={classes.lancador}>
        <div className={classes.contracheques}>{contracheques}</div>
        <div className={classes.eventos}>{eventos}</div>
      </div>
    </Container>
  );
}
