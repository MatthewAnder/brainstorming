import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    color: "whitesmoke",
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    color: "whitesmoke",
  },
  variants: {
    subtle: {
      color: "gray",
    },
  },
});

const components = {
  Heading,
  Text,
};

export default components;
