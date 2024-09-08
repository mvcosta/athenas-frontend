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
      height="100vh"
      borderRightWidth="1px"
      borderColor="gray.200"
      position="fixed"
      flex="1"
    >
      <Flex direction="column" width="full">
        <Link
          href="/"
          display="flex"
          alignItems="center"
          justifyContent={{ base: "center", md: "flex-start" }}
          borderBottomWidth="1px"
          borderColor="gray.200"
          height="12"
          width="full"
          mb={6}
          ms={2}
        >
          <Image src={LogoDPE} alt="Logo da Defensoria" width={40} />
          <Text
            lineHeight={"18px"}
            fontWeight="bold"
            display={{ base: "none", md: "flex" }}
            ml={3}
          >
            Defensoria Pública do Estado de Roraima
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
