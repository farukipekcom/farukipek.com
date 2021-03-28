import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Spinner, Grid, Box, Image, Text } from "@chakra-ui/react";

const base = new Airtable({
  apiKey: `${process.env.REACT_APP_AIRTABLE_KEY}`,
}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);

const Blog = ({ Theme }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    base("blog")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setBlog(records);
        setLoading(true);
        fetchNextPage();
      });
  }, []);
  return (
    <>
      {loading ? (
        <Container maxW="1200px" mb="20px" p="0px">
          {blog[0] ? (
            <Grid
              templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
              ml={[1, 5, 5, 0]}
              mr={[1, 5, 5, 0]}
            >
              {blog.map((item) => {
                return (
                  <Link to={"/blog/" + item.fields.slug} key={item.fields.slug}>
                    <Box
                      w="100%"
                      p="30px 30px 20px 30px"
                      className="ustte digeri"
                      mt={{ base: "20px", sm: "40px", md: "70px" }}
                      h={{ base: "max-content", md: "540px", lg: "540px" }}
                      display="flex"
                      flexDirection="column"
                    >
                      <Box mb="20px">
                        <Image
                          src={item.fields.image[0].url}
                          objectFit="cover"
                          h={[300, 300, 220]}
                          borderRadius="8px"
                          w="100%"
                          className="Work-photo"
                        />
                      </Box>
                      <Box display="flex" h="30px" alignItems="center">
                        <Box
                          backgroundColor="#ffc33d"
                          w="max-content"
                          borderRadius="5px"
                          pl="8px"
                          pr="8px"
                        >
                          <Text
                            p="1"
                            color="white"
                            fontSize="14px"
                            fontWeight="500"
                          >
                            E-Ticaret
                          </Text>
                        </Box>
                        <Box ml="auto" display="flex" justifyContent="flex-end">
                          <Text
                            color="#6d7d8c"
                            fontWeight="600"
                            fontSize="14px"
                          >
                            {item.fields.date}
                          </Text>
                        </Box>
                      </Box>
                      <Box mt="20px">
                        <Text
                          fontSize="20px"
                          fontWeight="700"
                          lineHeight="28px"
                        >
                          {item.fields.title}
                        </Text>
                        <Text
                          mt="10px"
                          mb="10px"
                          fontSize="16px"
                          lineHeight="24px"
                          color="#6d7d8c"
                          fontWeight="500"
                        >
                          {`${`${item.fields.details}`.substring(0, 150)}..`}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                );
              })}
            </Grid>
          ) : (
            <Grid
              templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
              ml={[1, 5, 5, 0]}
              mr={[1, 5, 5, 0]}
            >
              <Box
                p="30px 30px 20px 30px"
                mt={{ base: "20px", sm: "40px", md: "70px" }}
                display="flex"
              >
                <Text>Blog yazısı yok.</Text>
              </Box>
            </Grid>
          )}
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

export default Blog;
