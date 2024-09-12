"use client";

import {
  Container,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  Card,
  CardBody,
  VStack,
} from "@chakra-ui/react";
import TableFilters from "./table-filters";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItemProps } from "@/interfaces/breadcrumb-item-props";
import { Link } from "@chakra-ui/next-js";

function ListEntity({
  children,
  info,
  breadCrumbItems,
  showSearch,
  CreateEntity,
}: {
  children: React.ReactNode;
  info: React.ReactNode;
  breadCrumbItems: BreadcrumbItemProps[];
  showSearch: boolean;
  CreateEntity: React.ReactNode;
}) {
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
        <VStack>
          {info}
          <Card w="100%">
            <CardBody>
              {showSearch ? (
                <Flex justifyContent="space-between" mb="1rem">
                  <TableFilters />
                  {CreateEntity}
                </Flex>
              ) : (
                <Flex justifyContent="end" mb="1rem">
                  {CreateEntity}
                </Flex>
              )}
              {children}
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </>
  );
}

export default ListEntity;
