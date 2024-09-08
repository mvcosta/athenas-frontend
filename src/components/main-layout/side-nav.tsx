import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import LogoDPE from "@/static/logotipo-dpe-rr.png";
import Image from "next/image";
import NavItem from "./side-nav-item";
import { SIDENAV_ITEMS } from "./side-nav-config";

const SideNav = () => {
  return (
    <Box
      as="nav"
      display={{ base: "none", md: "flex" }}
      width={{ md: "60" }}
      minHeight="100vh"
      borderRightWidth="1px"
      borderColor="gray.200"
      position="fixed"
      flex="1"
      zIndex={50}
      backgroundColor="green.500"
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
          borderColor="gray.200"
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
