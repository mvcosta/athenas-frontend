import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <Flex
      direction="column"
      pt={2}
      px={4}
      columnGap={2}
      flexGrow={1}
      pb={4}
    >
      {children}
    </Flex>
  );
}
