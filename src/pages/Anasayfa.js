import images from "../img";
import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import Theme from "../Theme";
import {
  Box,
  Button,
  Spinner,
  extendTheme,
  Container,
  Grid,
  ChakraProvider,
  Image,
} from "@chakra-ui/react";
import Blog from "../pages/Blog";
const base = new Airtable({ apiKey: "keyh0pAZnYNujCri8" }).base(
  "appoPS45E5iQEwpMt"
);

function Anasayfa({ theme }) {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    base("about")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setAbout(records);
        fetchNextPage();
      });
    base("portfolio")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setPortfolio(records);
        fetchNextPage();
        setLoading(true);
      });
  }, []);
  {
    localStorage.setItem("aaa", "vvv");
  }
  return (
    <div className="">
      <ChakraProvider theme={Theme}>
        <Header></Header>
        <About />

        {loading ? (
          <Portfolio key={portfolio.id} portfolio={portfolio} />
        ) : (
          <Container maxW="1200px" mt="20px" mb="20px">
            <Grid templateColumns={{ sm: "1fr", md: "1fr 1fr" }}>
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                justifyContent={{ sm: "center", md: "flex-start" }}
                pl="10px"
              >
                <Spinner size="xl" />
              </Box>
            </Grid>
          </Container>
        )}

        <Footer></Footer>
      </ChakraProvider>
    </div>
  );
}

export default Anasayfa;
