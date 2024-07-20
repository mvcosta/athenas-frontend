"use client";

import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { setCookie } from "cookies-next";

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
