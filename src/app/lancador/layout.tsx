import { Container, Flex } from "@chakra-ui/react";
import styles from "./lancador.module.css";

interface LancadorPageProps {
  servidores: any;
  contracheque: any;
}

export default function LancadorPage({
  servidores,
  contracheque,
}: LancadorPageProps) {
  return (
    <Container maxW="1320px">
      <Flex
        className={styles.mainh}
        flexDirection="column"
        justifyContent="space-around"
      >
        <div>{servidores}</div>
        <div>{contracheque}</div>
      </Flex>
    </Container>
  );
}
