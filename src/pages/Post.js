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

import Theme from "../Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  extendTheme,
  Grid,
  Container,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
function Post(props) {
  return (
    <>
      <div className="">
        <ChakraProvider theme={Theme}>
          <Header></Header>
          <Container maxW="1200px" mt="20px" mb="20px">
            <Grid templateColumns={{ sm: "1fr", md: "1fr" }}>
              <Box w="100%" display="flex" flexDirection="column" pl="10px">
                <h1 style={{ fontSize: "50px" }}>
                  {props.match.params.slug_name}
                </h1>
                {props.blog.map((item) => {
                  return (
                    <div>
                      {props.match.params.slug_name ===
                      item.fields.slug_name ? (
                        <div>{item.fields.post}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </Box>
            </Grid>
          </Container>
          <Footer></Footer>
        </ChakraProvider>
      </div>
    </>
  );
}

export default withRouter(Post);
