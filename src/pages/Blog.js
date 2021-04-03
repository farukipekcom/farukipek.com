import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Spinner, Grid, Box, Image, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

const Blog = (props) => {
  return (
    <>
      <Helmet>
        <title>Blog | Faruk İpek</title>
        <meta
          name="description"
          content="Merhaba! Ben Faruk İpek. 2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance front-end developer olarak devam etmekteyim."
        />
      </Helmet>
      <Container maxW="1200px" mb="20px" p="0px">
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
          ml={[1, 5, 5, 0]}
          mr={[1, 5, 5, 0]}
        >
          {props.blog.map((item) => {
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

                  <Box mt="20px">
                    <Text fontSize="20px" fontWeight="700" lineHeight="28px">
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
                  <Box display="flex" h="30px" alignItems="center">
                    <Box ml="auto" display="flex" justifyContent="flex-end">
                      <Text color="#6d7d8c" fontWeight="600" fontSize="14px">
                        {item.fields.date}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
