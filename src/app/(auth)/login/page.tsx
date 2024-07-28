"use client";

import CustomToast from "@/components/customToast";
import TextInput from "@/components/textInput";
import {
  Box,
  Button,
  Center,
  Link as ChakraLink,
  Heading,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "This is required"),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { makeToast } = CustomToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async ({ email, password }: FormData) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/login`, {
        email,
        password,
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          makeToast(e.response?.data, "Hello World!");
        }
      });
  };
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
          Log In
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <TextInput
            id="email"
            placeholder="Enter your email address"
            error={errors.email}
            {...register("email")}
          >
            Email Address
          </TextInput>
          {/* Password */}
          <TextInput
            id="password"
            placeholder="Enter your password"
            error={errors.password}
            {...register("password")}
          >
            Password
          </TextInput>
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
            Log In
          </Button>
        </form>
        <ChakraLink
          as={NextLink}
          href="/signup"
          color={"gray"}
          fontWeight={"bold"}
        >
          New Here?
        </ChakraLink>
      </Box>
    </Center>
  );
}
