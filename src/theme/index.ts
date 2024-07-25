import { extendTheme, Heading } from "@chakra-ui/react";
import colors from "./colors";
import { Open_Sans, PT_Sans } from "next/font/google";

const headingFont = Open_Sans({
  subsets: ["latin"],
});
const bodyFont = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const theme = extendTheme({
  colors,
  fonts: {
    heading: headingFont.style.fontFamily,
    body: bodyFont.style.fontFamily,  
  },
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
