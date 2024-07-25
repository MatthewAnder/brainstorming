"use client";

import TextInput from "@/components/textInput";
import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  FormControl,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit({ username, email, password }: FormData) {
    await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/signup`, {
      username,
      email,
      password,
    });
  }

  return (
    <Center width={"100vw"} height={"100vh"}>
      <Box
        w={500}
        h={600}
        px={10}
        borderRadius={"lg"}
        border={"1px solid"}
        borderColor={"border"}
        background={"surface"}
      >
        <Heading fontSize={"6xl"} my={5}>
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.username)}>
            <TextInput
              id="username"
              placeholder="Enter your username"
              {...register("username", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            >
              Username
            </TextInput>
            <FormErrorMessage>
              {errors.username && errors.username.message?.toString()}
            </FormErrorMessage>
            <TextInput
              id="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            >
              Email
            </TextInput>
            <FormErrorMessage>
              {errors.username && errors.username.message?.toString()}
            </FormErrorMessage>
            <TextInput
              id="password"
              placeholder="Must have at least 8 characters"
              {...register("password", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            >
              Password
            </TextInput>
            <FormErrorMessage>
              {errors.username && errors.username.message?.toString()}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Submitting"
            size={"lg"}
            px={8}
            my={4}
            background={"primary.700"}
            color={"smoke"}
            transition={"0.2s"}
            _hover={{
              filter: "brightness(1.3)",
            }}
          >
            Submit
          </Button>
        </form>
        <ChakraLink as={NextLink} href="/login" color={"smoke"}>
          Already a user?
        </ChakraLink>
      </Box>
    </Center>
  );
}
