import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import {
  Container,
  Grid,
  Spinner,
  Link,
  Image,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

const base = new Airtable({
  apiKey: `${process.env.REACT_APP_AIRTABLE_KEY}`,
}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);
const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    base("portfolio")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setPortfolio(records);
        setLoading(true);
        fetchNextPage();
      });
  }, []);
  return (
    <>
      {loading ? (
        <Container maxW="1200px" mt="40px" mb="40px">
          <Heading as="h2" fontSize="36px" fontWeight="600">
            Çalışmalar
          </Heading>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
            gap={20}
            mt="40px"
            p="0px"
          >
            {portfolio.map((item) => {
              return (
                <Box key={item.id}>
                  <Link
                    href={item.fields.project_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={item.fields.project_image[0].url}
                      alt={item.fields.project_name}
                      className="Work-photo"
                    />
                  </Link>
                  <Container p="0" m="0">
                    <Box mt="20px">
                      <Text className="tag" color="#000">
                        {item.fields.project_category}
                      </Text>
                      <Link to={`/${item.id}`} target="_blank" rel="noreferrer">
                        <Heading
                          fontSize="32px"
                          color="#000"
                          fontWeight="600"
                          mt="20px"
                        >
                          {item.fields.project_name}
                        </Heading>
                      </Link>
                    </Box>
                  </Container>
                </Box>
              );
            })}
          </Grid>
        </Container>
      ) : (
        <Container maxW="1200px" mt="20px" mb="20px">
          <Grid>
            <Box display="flex" h="30px" justifyContent="center" height="100vh">
              <Spinner size="xl" />
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default Portfolio;
