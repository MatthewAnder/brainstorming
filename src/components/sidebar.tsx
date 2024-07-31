"use client";

import { AddIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Books from "./books";
import BookForm from "./bookForm";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position={"sticky"}
      top={0}
      left={0}
      width={400}
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
            src=""
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
      <InputGroup px={4}>
        <InputLeftElement pointerEvents="none" ml={4}>
          <SearchIcon color="gray" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search..."
          color={"smoke"}
          bg={"inherit"}
          variant={"flushed"}
          borderBottomColor={"border"}
          focusBorderColor={"primary.main"}
          _placeholder={{ color: "gray" }}
        />
      </InputGroup>
      <Books />
      <Center>
        <IconButton
          aria-label="add item"
          my={5}
          icon={<AddIcon />}
          width={"70%"}
          background={"border"}
          color={"smoke"}
          transition={".3s"}
          _hover={{ filter: "brightness(1.2)" }}
          onClick={onOpen}
        />
        <BookForm isOpen={isOpen} onClose={onClose}>
          <></>
        </BookForm>
      </Center>
    </Box>
  );
}
