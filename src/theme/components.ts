import { defineStyleConfig } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  baseStyle: {
    color: "smoke",
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    color: "smoke",
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
