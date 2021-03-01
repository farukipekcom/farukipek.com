import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
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

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App theme={theme} />
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
