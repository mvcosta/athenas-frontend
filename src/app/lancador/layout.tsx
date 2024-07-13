import { Container } from "@chakra-ui/react";
import classes from "./lancador.module.scss";

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
      <div className={classes.lancador}>
        <div className={classes.servidores}>{servidores}</div>
        <div className={classes.contracheques}>{contracheque}</div>
      </div>
    </Container>
  );
}
