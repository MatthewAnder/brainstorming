import {
  FormLabel,
  Input,
  InputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

interface TextInputProps extends InputProps {
  id: string;
  children: React.ReactNode;
  errors?: FieldError;
}

export default function TextInput({
  id,
  children,
  errors,
  ...rest
}: TextInputProps) {
  return (
    <>
      <FormLabel htmlFor={id} fontSize={"xl"}>
        {children}
      </FormLabel>
      <Input
        id={id}
        type={id === "confirmPassword" ? "password" : id}
        color={"smoke"}
        variant={"flushed"}
        _placeholder={{ color: "gray" }}
        mb={errors ? 0 : 3}
        {...rest}
      />
      <FormErrorMessage mb={errors && 2}>
        {errors && errors.message?.toString()}
      </FormErrorMessage>
    </>
  );
}
