import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const xxl = defineStyle({
  maxW: "600",
});

export const modalTheme = defineMultiStyleConfig({
  sizes: {
    xxl: definePartsStyle({ dialog: xxl }),
  },
});
