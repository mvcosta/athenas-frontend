import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-providers";
import { cookies } from "next/headers";

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
        <ThemeProvider colorMode={colorMode?.value}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
