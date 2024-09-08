"use client";

import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Collapse,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { Link } from "@chakra-ui/next-js";
import { SideNavItem } from "@/interfaces/side-nav-item";

const NavItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const { isOpen, onOpen, onToggle } = useDisclosure();

  useEffect(() => {
    if (item.submenu && `/v2${pathname}/`.includes(item.path)) {
      onOpen();
    }
  });

  return (
    <Box>
      {item.submenu ? (
        <>
          <Button
            onClick={onToggle}
            aria-label="Toggle Submenu"
            variant="ghost"
            justifyContent="space-between"
            alignItems="center"
            width="full"
            py={2}
            px={4}
            borderRadius="lg"
            bg={
              `/v2${pathname}/`.includes(item.path) ? "gray.100" : "transparent"
            }
            _hover={{ bg: "gray.100" }}
            rightIcon={
              <Icon icon="lucide:chevron-down" width={24} height={24} />
            }
          >
            <Flex alignItems="center">
              {item.icon}
              <Text fontWeight="semibold" fontSize="xl" ml={4}>
                {item.title}
              </Text>
            </Flex>
          </Button>

          <Collapse in={isOpen} animateOpacity>
            <Flex direction="column" ml={6} mt={2}>
              {item.subMenuItems?.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.path}
                  fontWeight={
                    `${pathname}/`.includes(subItem.path) ? "bold" : "normal"
                  }
                  mb={2}
                >
                  {subItem.title}
                </Link>
              ))}
            </Flex>
          </Collapse>
        </>
      ) : (
        <Link
          href={item.path}
          display="flex"
          alignItems="center"
          py={2}
          px={4}
          borderRadius="lg"
          bg={`${pathname}` === item.path ? "gray.100" : "transparent"}
          _hover={{ bg: "gray.100" }}
        >
          {item.icon}
          <Text fontWeight="semibold" fontSize="xl" ml={4}>
            {item.title}
          </Text>
        </Link>
      )}
    </Box>
  );
};

export default NavItem;
