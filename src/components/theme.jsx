import { extendTheme } from "@chakra-ui/react";
import "@fontsource/iosevka";

const theme = extendTheme({
  fonts: {
    heading: `'iosevka', sans-serif`,
    body: `'iosevka', sans-serif`,
  },
  global: props =>({
    body: {
      bg: mode('green.200', 'green.700')
    }
  })
});

export default theme;
