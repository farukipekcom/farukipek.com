import React from "react";
import {
  Container,
  Grid,
  Link,
  GridItem,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import images from "../img";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Portfolio = ({ portfolio }) => {
  return (
    <>
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
          {portfolio.map((portfolio) => {
            return (
              <>
                <Box>
                  <Link
                    href={portfolio.fields.project_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LazyLoadImage
                      src={portfolio.fields.project_image[0].url}
                      alt={portfolio.fields.project_name}
                      className="Work-photo"
                    />
                  </Link>
                  <Container p="0" m="0">
                    <Box mt="20px">
                      <Text className="tag" color="#000">
                        {portfolio.fields.project_category}
                      </Text>
                      <Link
                        href={portfolio.fields.project_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Heading
                          fontSize="32px"
                          color="#000"
                          fontWeight="600"
                          mt="20px"
                        >
                          {portfolio.fields.project_name}
                        </Heading>
                      </Link>
                    </Box>
                  </Container>
                </Box>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Portfolio;
