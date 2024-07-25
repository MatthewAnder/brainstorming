"use client";

import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import z from "zod";
import axios from "axios";

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

  async function onSubmit({ email, password }: FormData) {
    await axios.post(`${process.env.NEXT_PUBLIC_HOST_URL}/api/auth/login`, {
      email,
      password,
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.email)}>
        {/* Email */}
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="email"
          type="email"
          {...register("email", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message?.toString()}
        </FormErrorMessage>
        {/* Password */}
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          placeholder="password"
          type="password"
          {...register("password", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message?.toString()}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
