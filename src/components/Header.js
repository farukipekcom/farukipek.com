import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <Container maxW="1200px" mt="20px" mb="20px">
        <Grid templateColumns={{ sm: "1fr", md: "2fr 1fr" }}>
          <Box
            w="100%"
            display="flex"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            }}
            alignItems="center"
            pl="10px"
          >
            <Link to="/" className="Header-logo" title="Faruk İpek">
              <Text fontSize="48px" fontWeight="600">
                Faruk İpek
              </Text>
            </Link>
          </Box>
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent={{
              base: "center",
              sm: "center",
              md: "flex-end",
              lg: "flex-end",
            }}
            pr="10px"
          >
            <Link to="/">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Anasayfa
              </Text>
            </Link>
            <Link to="/blog">
              <Text
                fontSize="18px"
                ml="20px"
                fontWeight="500"
                className="underline-link"
              >
                Blog
              </Text>
            </Link>
            <a href="mailto:faruk@farukipek.com">
              <Text
                ml="20px"
                fontSize="18px"
                fontWeight="500"
                className="underline-link"
              >
                İletişim
              </Text>
            </a>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
