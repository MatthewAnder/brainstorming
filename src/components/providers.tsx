"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
