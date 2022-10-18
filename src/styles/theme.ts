import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#0C0C0C",
        margin: 0,
        padding: 0,
        "box-sizing": "border-box",
      },
    }),
  },
});

export default myTheme;
