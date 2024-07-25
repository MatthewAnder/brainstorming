import { FormLabel, Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface TextInputProps extends InputProps {
  id: string;
  children: React.ReactNode;
}

export default function TextInput({ id, children, ...rest }: TextInputProps) {
  return (
    <>
      <FormLabel htmlFor={id} fontSize={"xl"}>
        {children}
      </FormLabel>
      <Input
        id={id}
        type={id}
        color={"smoke"}
        variant={"flushed"}
        mb={5}
        _placeholder={{ color: "gray" }}
        {...rest}
      />
    </>
  );
}
