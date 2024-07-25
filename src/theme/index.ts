import { extendTheme } from "@chakra-ui/react";
import { Open_Sans, PT_Sans } from "next/font/google";
import colors from "./colors";
import components from "./components";

const headingFont = Open_Sans({
  subsets: ["latin"],
});
const bodyFont = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

const theme = extendTheme({
  components,
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
      label: {
        color: "whitesmoke",
      },
    },
  },
});

export default theme;
