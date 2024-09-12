"use client";

import { ReactNode, useEffect } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import useCookieToast from "@/hooks/useCookieToast";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const bg = useColorModeValue("gray.50", "gray.800");
  const toast = useCookieToast();

  useEffect(() => {
    toast?.();
  });

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
