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
    <Container maxW="1500px">
      <Heading marginY="2rem" textAlign="center">
        {title}
      </Heading>
      <Flex justifyContent="space-between">
        <TableFilters />
        {CreateEntity}
      </Flex>
      {children}
    </Container>
  );
}

export default ListEntity;
