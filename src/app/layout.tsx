import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../theme/theme-providers";
import { cookies } from "next/headers";
import Menu from "./menu";
import { Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Athenas - RR",
  description: "Athenas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorMode = cookies().get("chakra-ui-color-mode");

  return (
    <html lang="en">
      <body>
        <ThemeProvider colorMode={colorMode?.value}>
          <Flex>
            <Menu width={300} />
            {children}
          </Flex>
        </ThemeProvider>
      </body>
    </html>
  );
}
