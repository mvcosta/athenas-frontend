import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { modalTheme } from "./modal-theme";
import styles from "./styles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  components: { Modal: modalTheme },
});

export default theme;
