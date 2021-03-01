import React from "react";
import { Container, Grid, GridItem, Link, Box, Text } from "@chakra-ui/react";
import App from "../App";
import Blog from "../pages/Blog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Anasayfa from "../pages/Anasayfa";
const Footer = () => {
  return (
    <>
      <hr />
      <Container maxW="1200px" mt="40px" mb="20px">
        <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }}>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent={{ sm: "center", md: "flex-start" }}
            pl="10px"
          >
            <a href="/" className="Header-logo" title="Faruk İpek">
              <Text fontSize="18px" fontWeight="600">
                © 2021 Faruk İpek
              </Text>
            </a>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent={{ sm: "flex-end", md: 'flex-end"' }}
            pr="10px"
          >
            <Link href="https://www.facebook.com/farukipekcom">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Facebook
              </Text>
            </Link>
            <Link href="https://twitter.com/farukipekcom" ml="20px">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Twitter
              </Text>
            </Link>
            <Link href="https://www.instagram.com/farukipekcom/" ml="20px">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Instagram
              </Text>
            </Link>
            <Link href="https://www.linkedin.com/in/farukipekcom/" ml="20px">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Linkedin
              </Text>
            </Link>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
