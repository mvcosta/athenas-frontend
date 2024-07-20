import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: {
    resize: "both",
  },
});

const xl = defineStyle({
  maxW: "576",
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
  sizes: {
    xl: definePartsStyle({ dialog: xl }),
  },
});
