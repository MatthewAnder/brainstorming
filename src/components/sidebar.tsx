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
  VStack,
} from "@chakra-ui/react";

interface Book {
  title: string;
  url: string;
}

const books: Book[] = [];

export default function Sidebar() {
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
      <InputGroup px={4}>
        <InputLeftElement pointerEvents="none" ml={4}>
          <SearchIcon color="gray" />
        </InputLeftElement>
        <Input
          type="tel"
          placeholder="Search..."
          color={"white"}
          bg={"inherit"}
          variant={"flushed"}
          borderBottomColor={"border"}
          focusBorderColor={"primary.main"}
          _placeholder={{ color: "gray" }}
        />
      </InputGroup>
      {/*  */}
      {books.length <= 0 ? (
        <Center my={5}>
          <Text color={"gray"}>No books yet!</Text>
        </Center>
      ) : (
        books.map((val) => {
          return (
            <Box
              key={val.title}
              background={"surface"}
              my={5}
              mx={4}
              p={4}
              border={"1px solid"}
              borderColor={"border"}
              rounded={"md"}
              boxShadow={
                "#0d0c0d 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
              }
            >
              <Heading fontSize={"xs"} color={"whitesmoke"}>
                {val.title}
              </Heading>
              <Text fontSize={"x-small"} color={"gray"}>
                {val.url}
              </Text>
            </Box>
          );
        })
      )}
      {/*  */}
      <Center>
        <IconButton
          aria-label="add item"
          icon={<AddIcon />}
          width={"70%"}
          background={"border"}
          color={"white"}
          transition={".3s"}
          _hover={{ filter: "brightness(1.2)" }}
        />
      </Center>
    </Box>
  );
}
