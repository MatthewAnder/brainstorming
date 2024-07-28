"use client";

import { SettingsIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box
      width={300}
      height={"100vh"}
      borderRight={"2px solid"}
      borderColor={"border"}
    >
      <IconButton
        aria-label="Search database"
        icon={<SettingsIcon />}
        bg={"inherit"}
        color={"gray"}
        size={"lg"}
        _hover={{
          bg: "",
        }}
        _active={{
          bg: "",
        }}
      />
      <Center height={200}>
        <VStack>
          <Avatar
            name="Oshigaki Kisame"
            src="https://bit.ly/broken-link"
            size={"lg"}
            bg={"primary.main"}
          />
          <Heading fontSize={"lg"} mt={2}>
            Johnny Hopkins
          </Heading>
          <Text fontSize={"sm"} color={"gray"}>
            johnny10@gmail.com
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}
