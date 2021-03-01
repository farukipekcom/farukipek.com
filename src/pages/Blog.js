import React from "react";
import {
  Container,
  Grid,
  Link,
  GridItem,
  Box,
  Heading,
  ChakraProvider,
  Text,
  Image,
} from "@chakra-ui/react";
import images from "../img";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Theme from "../Theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = ({ blog }) => {
  return (
    <>
      <div className="">
        <ChakraProvider theme={Theme}>
          <Header></Header>

          <Container maxW="1200px" mt="20px" mb="20px">
            <Grid templateColumns={{ sm: "1fr", md: "1fr" }}>
              <Box w="100%" display="flex" flexDirection="column" pl="10px">
                {blog.map((item) => {
                  return (
                    <div>
                      {item.fields.post}
                      <Link href={"/post/" + item.fields.slug_name} ml="20px">
                        <Text
                          fontSize="18px"
                          fontWeight="500"
                          className="underline-link"
                        >
                          {item.fields.title}
                        </Text>
                      </Link>
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
};

export default Blog;
