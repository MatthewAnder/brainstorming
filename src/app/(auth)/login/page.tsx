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
  email: z.string(),
  password: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async ({ email, password }: FormData) => {
    await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/login`, {
      email,
      password,
    });
  };
  return (
    <Center width={"100vw"} height={"100vh"}>
      <Box
        w={500}
        h={500}
        px={10}
        borderRadius={"lg"}
        border={"1px solid"}
        borderColor={"border"}
        background={"surface"}
      >
        <Heading fontSize={"6xl"} my={5}>
          Log In
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={Boolean(errors.email)}>
            {/* Email */}
            <TextInput
              id="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
            >
              Email Address
            </TextInput>
            <FormErrorMessage>
              {errors.email && errors.email.message?.toString()}
            </FormErrorMessage>
            {/* Password */}
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
              {errors.email && errors.email.message?.toString()}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            mt={4}
            background={"primary.main"}
            color={"smoke"}
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </form>
        <ChakraLink as={NextLink} href="/signup" color={"smoke"}>
          New here?
        </ChakraLink>
      </Box>
    </Center>
  );
}