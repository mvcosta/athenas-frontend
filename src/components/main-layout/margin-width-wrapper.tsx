import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Flex
      direction="column"
      ml={{ base: 0, md: "60" }}
      borderRight={{ base: "none", sm: "1px solid" }}
      borderColor={{ sm: "gray.700" }}
      minHeight="100vh"
      width="100%"
    >
      {children}
    </Flex>
  );
}
