"use client";

import { CalendarIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Avatar,
  Divider,
  Flex,
  FlexProps,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar({ ...props }: FlexProps) {
  const [navSize, setNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      paddingRight={navSize === "small" ? 5 : 0}
      borderRight="1px solid #2D3748"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          aria-label="hamburguer"
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon />}
          onClick={() => {
            setNavSize((nav) => (nav === "small" ? "large" : "small"));
          }}
        />
        <NavItem
          navSize={navSize}
          icon={CalendarIcon}
          title={"Eventos"}
          href="/gfp/eventos"
        />
        <NavItem
          navSize={navSize}
          icon={CalendarIcon}
          title={"Lançador"}
          href="/gfp/lancador"
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Marcus Vinicius
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function NavItem({
  navSize,
  title,
  icon,
  href,
}: {
  navSize: string;
  title: string;
  icon: any;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.includes(href);
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize === "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={isActive ? "#152838" : "transparent"}
          href={href}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#152838" }}
          w={navSize === "large" ? "100%" : undefined}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={isActive ? "#82AAAD" : "gray.500"}
              />
              <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
