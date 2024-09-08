"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { setCookie } from "cookies-next";
import theme from "./theme";
import { CacheProvider } from "@chakra-ui/next-js";

export const ThemeProvider = ({
  colorMode,
  children,
}: {
  colorMode?: any;
  children: React.ReactNode;
}) => {
  return (
    <CacheProvider>
      <ChakraProvider
        colorModeManager={{
          type: "cookie",
          ssr: true,
          get: (init) => colorMode ?? init,
          set: (value) => {
            setCookie("chakra-ui-color-mode", value);
          },
        }}
        theme={theme}
        toastOptions={{
          defaultOptions: {
            duration: 9000,
            isClosable: true,
          },
        }}
      >
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
          type="cookie"
        />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
};
