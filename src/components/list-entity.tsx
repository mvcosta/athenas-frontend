"use client";

import { Container, Heading, Flex } from "@chakra-ui/react";
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
  return (
    <Container
      maxW="1500px"
      border="1px"
      borderColor="gray.200"
      borderRadius="5px"
      backgroundColor="white"
      py="2rem"
    >
      {/* <Heading marginY="2rem" textAlign="center">
        {title}
      </Heading> */}
      <Flex justifyContent="space-between" mb="1rem">
        <TableFilters />
        {CreateEntity}
      </Flex>
      {children}
    </Container>
  );
}

export default ListEntity;
