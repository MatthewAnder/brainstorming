import Sidebar from "@/components/sidebar";
import { HStack } from "@chakra-ui/react";
import React from "react";

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HStack>
      <Sidebar />
      {children}
    </HStack>
  );
}
