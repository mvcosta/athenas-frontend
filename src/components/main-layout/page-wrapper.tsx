"use client";

import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const bg = useColorModeValue("gray.50", "gray.800");
  return (
    <Flex
      as="section"
      direction="column"
      pt={2}
      px={4}
      columnGap={2}
      flexGrow={1}
      pb={4}
      backgroundColor={bg}
    >
      {children}
    </Flex>
  );
}
