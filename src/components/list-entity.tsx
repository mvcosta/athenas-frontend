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
  Heading,
} from "@chakra-ui/react";
import TableFilters from "./table-filters";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItemProps } from "@/interfaces/breadcrumb-item-props";
import { Link } from "@chakra-ui/next-js";
import { useSearchParams } from "next/navigation";

function ListEntity({
  children,
  info,
  breadCrumbItems,
  empty,
  emptyMessage,
  notFound,
  CreateEntity,
}: {
  children: React.ReactNode;
  info: React.ReactNode;
  breadCrumbItems: BreadcrumbItemProps[];
  empty: boolean;
  emptyMessage: string;
  notFound: string;
  CreateEntity: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const isSearching = !!searchParams.get("search");

  const showSearch = isSearching || !empty;

  let content;
  if (!empty) {
    content = children;
  } else if (isSearching) {
    content = (
      <Heading as="h3" size="lg" textAlign="center">
        {notFound}
      </Heading>
    );
  } else {
    content = (
      <Heading as="h3" size="lg" textAlign="center">
        {emptyMessage}
      </Heading>
    );
  }
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
              {content}
            </CardBody>
          </Card>
        </VStack>
      </Container>
    </>
  );
}

export default ListEntity;
