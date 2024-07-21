import {
  Box,
  ChakraComponent,
  Flex,
  FlexProps,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Menu({ ...props }: FlexProps) {
  return (
    <Flex
      {...props}
      flexFlow={"column"}
      borderRight="1px solid gray"
      paddingTop="4"
    >
      <Box paddingLeft="2" borderBottom="1px solid gray">
        Funcionalidades
      </Box>
      <Box paddingTop="2" paddingLeft="5">
        <UnorderedList>
          <ListItem>Folha de Pagamento</ListItem>
          <UnorderedList>
            <ListItem>
              <Link href="/gfp/lancador">Lançador</Link>
            </ListItem>
            <ListItem>
              <Link href="/gfp/eventos">Eventos</Link>
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </Box>
    </Flex>
  );
}
