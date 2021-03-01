import { extendTheme } from "@chakra-ui/react";
const Theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  components: {
    Link: {
      baseStyle: {
        _focus: { boxShadow: "none" },
        _hover: { textDecoration: "none" },
      },
    },
  },
});

export default Theme;
