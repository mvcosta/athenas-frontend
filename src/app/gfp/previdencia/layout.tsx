import { Container } from "@chakra-ui/react";
import React from "react";

export default function LancadorLayout({
  configuracoes,
  filiacoes,
}: {
  configuracoes: React.ReactNode;
  filiacoes: React.ReactNode;
}) {
  return (
    <Container maxW="1500px">
      <div>
        <div>{configuracoes}</div>
        <div>{filiacoes}</div>
      </div>
    </Container>
  );
}
