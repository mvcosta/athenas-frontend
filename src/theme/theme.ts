import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { modalTheme } from "./modal-theme";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components: { Modal: modalTheme },
});

export default theme;
