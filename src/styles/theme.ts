import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#0C0C0C",
      },
    }),
  },
});

export default myTheme;