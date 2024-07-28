import { useToast } from "@chakra-ui/react";

export default function CustomToast() {
  const toast = useToast();

  const makeToast = (title: string, description: string) => {
    toast({
      title,
      description,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return { makeToast };
}
