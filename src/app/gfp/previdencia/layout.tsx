import { Box, Container, Heading } from "@chakra-ui/react";
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
      <Box>
        <Box mb="2rem">{configuracoes}</Box>

        <Box>{filiacoes}</Box>
      </Box>
    </Container>
  );
}
