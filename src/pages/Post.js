import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import {
  Box,
  Button,
  extendTheme,
  Container,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
import Header from "../components/Header";
function Post(props) {
  return (
    <div className="App">
      <Header></Header>
      <h1 style={{ fontSize: "50px" }}>{props.match.params.slug_name}</h1>
      {props.blog.map((item) => {
        return (
          <div>
            {props.match.params.slug_name === item.fields.slug_name ? (
              <div>{item.fields.post}</div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(Post);
