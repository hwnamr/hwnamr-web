import { extendTheme } from "@chakra-ui/react";
import "@fontsource/iosevka/700.css";

const theme = extendTheme({
  fonts: {
    heading: `'iosevka', sans-serif`,
    body: `'iosevka', sans-serif`,
  },
});

export default theme;
