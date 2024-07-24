import { extendTheme, Heading } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
  colors,
  styles: {
    global: {
      "html, body": {
        background: "background.main",
      },
      h2: {
        color: "whitesmoke",
      },
      p: {
        color: "whitesmoke",
      },
    },
  },
});

export default theme;
