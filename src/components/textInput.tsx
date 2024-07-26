import {
  FormLabel,
  Input,
  InputProps,
  FormErrorMessage,
  forwardRef,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { FieldError } from "react-hook-form";

interface TextInputProps extends InputProps {
  id: string;
  children: React.ReactNode;
  error?: FieldError;
}

const TextInput = forwardRef<TextInputProps, "input">(
  ({ id, children, error, ...rest }, ref) => {
    return (
      <FormControl isInvalid={Boolean(error)}>
        <FormLabel htmlFor={id} fontSize={"xl"}>
          {children}
        </FormLabel>
        <Input
          ref={ref}
          id={id}
          type={id === "confirmPassword" ? "password" : id}
          color={"smoke"}
          variant={"flushed"}
          _placeholder={{ color: "gray" }}
          mb={error ? 0 : 3}
          {...rest}
        />
        <FormErrorMessage mb={error && 2}>
          {error && error.message?.toString()}
        </FormErrorMessage>
      </FormControl>
    );
  }
);

export default TextInput;
