import Airtable from "airtable";
import React, { useEffect, useState } from "react";
import {
  Box,
  Spinner,
  Container,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";

const base = new Airtable({
  apiKey: `${process.env.REACT_APP_AIRTABLE_KEY}`,
}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);

function Post({ match }) {
  const [BlogItem, setBlogItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  let [id, setId] = useState("");
  useEffect(() => {
    base("blog")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setBlog(records);
        fetchNextPage();
      });
  }, []);
  useEffect(() => {
    blog.map((item) => {
      if (item.fields.slug == match.params.slug) {
        setId(item.id);
      }
    });
  });
  useEffect(() => {
    if (id.length > 0) {
      base("blog").find(`${id}`, function (err, record) {
        setBlogItem(record);
        setLoading(true);
      });
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <Container maxW="1200px" mt="40px" mb="40px">
          <Helmet>
            <title>Faruk İpek | {BlogItem.fields.title}</title>
            <meta
              name="description"
              content="Merhaba! Ben Faruk İpek. 2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance front-end developer olarak devam etmekteyim."
            />
          </Helmet>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr" }}
            gap={5}
            ml="10px"
            mr="10px"
          >
            {BlogItem.fields.image > 0 ? (
              <Image
                src={BlogItem.fields.image[0].url}
                objectFit="cover"
                height="400px"
                className="Work-photo"
              />
            ) : (
              ""
            )}

            <Heading as="h2" fontSize="32px" fontWeight="700" mt="5">
              {BlogItem.fields.title}
            </Heading>
            <Box display="flex" h="30px" alignItems="center">
              <Box
                backgroundColor="#ffc33d"
                borderRadius="5px"
                pl="8px"
                pr="8px"
              >
                <Text p="1" color="white" fontSize="14px" fontWeight="500">
                  E-Ticaret
                </Text>
              </Box>
              <Box ml="20px" display="flex" justifyContent="flex-end">
                <Text color="#6d7d8c" fontWeight="600" fontSize="14px">
                  {BlogItem.fields.date}
                </Text>
              </Box>
            </Box>
            <Box className="blog-post">
              <ReactMarkdown escapeHtml={false}>
                {BlogItem.fields.details}
              </ReactMarkdown>
            </Box>
          </Grid>
        </Container>
      ) : (
        <Container maxW="1200px" mt="20px" mb="20px">
          <Grid>
            <Box
              display="flex"
              h="30px"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <Spinner size="xl" />
            </Box>
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Post;
