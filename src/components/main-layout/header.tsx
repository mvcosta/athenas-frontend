"use client";

import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/useScroll";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const scrolled = useScroll(5);

  const { colorMode, toggleColorMode } = useColorMode();
  const selectedLayout = useSelectedLayoutSegment();

  const bg = useColorModeValue(
    scrolled ? "whiteAlpha.800" : "white",
    scrolled ? "gray.800" : "gray.900"
  );
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={30}
      width="100%"
      transition="all 0.3s"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      bg={bg}
      backdropFilter="blur(10px)"
    >
      <Flex
        height="47px"
        alignItems="center"
        justifyContent="space-between"
        px={4}
      >
        <Flex alignItems="center" rowGap={4}></Flex>

        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}
