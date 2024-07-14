import { Container } from "@chakra-ui/react";
import classes from "./lancador.module.scss";

interface LancadorPageProps {
  contracheques: any;
  eventos: any;
}

export default function LancadorPage({
  eventos,
  contracheques,
}: LancadorPageProps) {
  return (
    <Container maxW="1320px">
      <div className={classes.lancador}>
        <div className={classes.contracheques}>{contracheques}</div>
        <div className={classes.eventos}>{eventos}</div>
      </div>
    </Container>
  );
}
