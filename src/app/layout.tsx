import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../theme/theme-providers";
import { cookies } from "next/headers";
import { Flex } from "@chakra-ui/react";
import { ReactQueryClientProvider } from "./react-query-provider";
import PageWrapper from "@/components/main-layout/page-wrapper";
import MarginWidthWrapper from "@/components/main-layout/margin-width-wrapper";
import SideNav from "@/components/main-layout/side-nav";
import Header from "@/components/main-layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Athenas Frontend - RR",
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
        <ReactQueryClientProvider>
          <ThemeProvider colorMode={colorMode?.value}>
            <SideNav />
            <Flex as="main">
              <MarginWidthWrapper>
                <Header />
                <PageWrapper>{children}</PageWrapper>
              </MarginWidthWrapper>
            </Flex>
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
