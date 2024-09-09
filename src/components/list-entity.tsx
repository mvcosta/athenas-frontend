"use client";

import { Container, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import TableFilters from "./table-filters";

function ListEntity({
  children,
  title,
  CreateEntity,
}: {
  children: React.ReactNode;
  title: string;
  CreateEntity: React.ReactNode;
}) {
  const bg = useColorModeValue("white", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  return (
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
  );
}

export default ListEntity;
