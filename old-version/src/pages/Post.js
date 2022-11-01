import React from "react";
import { Box, Container, Grid, Heading, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
function Post(blog, { match }) {
  return (
    <>
      {blog.post.map((item) => {
        return item.fields.slug == blog.match.params.slug ? (
          <Container maxW="1200px" mt="40px" mb="40px" key={item.fields.slug}>
            <Helmet>
              <title>{item.fields.title} | Faruk İpek</title>
              <meta
                name="description"
                content="Merhaba! Ben Faruk İpek. 2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance front-end developer olarak devam etmekteyim."
              />
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </Helmet>
            <Grid
              templateColumns={{ sm: "1fr", md: "1fr" }}
              gap={5}
              ml="10px"
              mr="10px"
            >
              <Heading as="h2" fontSize="32px" fontWeight="700" mt="5">
                {item.fields.title}
              </Heading>
              <Box display="flex" h="30px" alignItems="center">
                <Box display="flex" justifyContent="flex-end">
                  <Text color="#6d7d8c" fontWeight="600" fontSize="14px">
                    {item.fields.date}
                  </Text>
                </Box>
              </Box>
              <Box className="blog-post">
                <ReactMarkdown escapeHtml={false}>
                  {item.fields.details}
                </ReactMarkdown>
              </Box>
            </Grid>
          </Container>
        ) : (
          ""
        );
      })}
    </>
  );
}
export default Post;
