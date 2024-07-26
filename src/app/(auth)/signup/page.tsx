"use client";

import TextInput from "@/components/textInput";
import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z
  .object({
    username: z.string({ message: "lol" }),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function SignupForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
        h={700}
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
          <FormControl>
            <TextInput
              id="username"
              placeholder="Enter your username"
              error={errors.username}
              {...register("username")}
            >
              Username
            </TextInput>
            <TextInput
              id="email"
              placeholder="name@example.com"
              error={errors.email}
              {...register("email")}
            >
              Email
            </TextInput>
            <TextInput
              id="password"
              placeholder="Must have at least 8 characters"
              error={errors.password}
              {...register("password")}
            >
              Password
            </TextInput>
            <TextInput
              id="confirmPassword"
              placeholder="Retype your password"
              error={errors.confirmPassword}
              {...register("confirmPassword")}
            >
              Confirm Password
            </TextInput>
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
        <ChakraLink
          as={NextLink}
          href="/login"
          color={"gray"}
          fontWeight={"bold"}
        >
          Already a user?
        </ChakraLink>
      </Box>
    </Center>
  );
}
