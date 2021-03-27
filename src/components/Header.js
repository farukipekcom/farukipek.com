import React from "react";
import { Container, Grid, Link, Box, Text } from "@chakra-ui/react";
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
            <a href="/" className="Header-logo" title="Faruk İpek">
              <Text fontSize="48px" fontWeight="600">
                Faruk İpek
              </Text>
            </a>
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
            <Link href="/">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Anasayfa
              </Text>
            </Link>
            <Link href="/blog" ml="20px">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                Blog
              </Text>
            </Link>
            <Link href="mailto:faruk@farukipek.com" ml="20px">
              <Text fontSize="18px" fontWeight="500" className="underline-link">
                İletişim
              </Text>
            </Link>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Header;
