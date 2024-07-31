import {
  Box,
  Heading,
  Text,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Book } from "@prisma/client";
import axios from "axios";
import useSWR from "swr";
import NextLink from "next/link";

const fetcher = async (url: string) => {
  return await axios.get(url).then((res) => res.data);
};
export default function Books() {
  const { data: books } = useSWR<Book[]>(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/book/fetch`,
    fetcher
  );

  if (!books) return <></>;

  if (books.length <= 0)
    return (
      <Center my={5}>
        <Text color={"gray"}>No books yet!</Text>
      </Center>
    );

  return (
    <>
      {books.map((book) => {
        return (
          <LinkBox
            key={book.id}
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
            <Heading fontSize={"xs"} color={"smoke"}>
              <LinkOverlay
                as={NextLink}
                href={`${process.env.NEXT_PUBLIC_HOST_URL}/book/${book.title}`}
              >
                {book.title}
              </LinkOverlay>
            </Heading>
            <Text fontSize={"x-small"} color={"gray"}>
              {book.url}
            </Text>
          </LinkBox>
        );
      })}
    </>
  );
}
