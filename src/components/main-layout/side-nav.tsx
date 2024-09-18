"use client";

import React from "react";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import LogoDPE from "@/static/logotipo-dpe-rr.png";
import Image from "next/image";
import NavItem from "./side-nav-item";
import { SIDENAV_ITEMS } from "./side-nav-config";
import { Link } from "@chakra-ui/next-js";

const SideNav = () => {
  const bg = useColorModeValue("green.500", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      as="nav"
      display={{ base: "none", md: "flex" }}
      width={{ md: "60" }}
      minHeight="100vh"
      borderRightWidth="1px"
      borderColor={borderColor}
      position="fixed"
      flex="1"
      zIndex={50}
      backgroundColor={bg}
      color="white"
      px="1rem"
    >
      <Flex direction="column" width="full">
        <Link
          href="/"
          display="flex"
          alignItems="center"
          columnGap="0.5rem"
          justifyContent={{ base: "center", md: "center" }}
          borderBottomWidth="1px"
          borderColor={borderColor}
          height="5rem"
          width="full"
          mb={6}
        >
          <Image src={LogoDPE} alt="Logo da Defensoria" width={40} />
          <Text
            fontSize={"x-large"}
            fontWeight="bold"
            display={{ base: "none", md: "flex" }}
          >
            Athenas
          </Text>
        </Link>

        <Flex direction="column" rowGap={2}>
          {SIDENAV_ITEMS.map((item, idx) => (
            <NavItem key={idx} item={item} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default SideNav;
