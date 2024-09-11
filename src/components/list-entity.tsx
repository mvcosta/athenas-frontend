"use client";

import {
  Container,
  Heading,
  Flex,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  Text,
} from "@chakra-ui/react";
import TableFilters from "./table-filters";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItemProps } from "@/interfaces/breadcrumb-item-props";
import { Link } from "@chakra-ui/next-js";

function ListEntity({
  children,
  title,
  breadCrumbItems,
  CreateEntity,
}: {
  children: React.ReactNode;
  title: string;
  breadCrumbItems: BreadcrumbItemProps[];
  CreateEntity: React.ReactNode;
}) {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  return (
    <>
      <Container maxW="1500px">
        <Breadcrumb separator={<ChevronRightIcon color="gray.500" />}>
          {breadCrumbItems.map((item: BreadcrumbItemProps, index) => (
            <BreadcrumbItem key={index}>
              {item.link ? (
                <Link href={item.link}>{item.name}</Link>
              ) : (
                <Text>{item.name}</Text>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <Heading marginY="1rem" as="h3" size="lg">
          {title}
        </Heading>
        <Container
          maxW="1500px"
          border="1px"
          borderColor={borderColor}
          borderRadius="5px"
          backgroundColor={bg}
          py="2rem"
        >
          <Flex justifyContent="space-between" mb="1rem">
            <TableFilters />
            {CreateEntity}
          </Flex>
          {children}
        </Container>
      </Container>
    </>
  );
}

export default ListEntity;
