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
import { useHistory } from "react-router-dom";

import { Helmet } from "react-helmet";

const base = new Airtable({
  apiKey: `${process.env.REACT_APP_AIRTABLE_KEY}`,
}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);
const TwitterContainer = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/HeyMarkKop");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);
};
function Post({ match }) {
  const [BlogItem, setBlogItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState([]);
  let history = useHistory();
  const redirect = () => {
    history.push("/404");
  };
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
            <title>{BlogItem.fields.title} | Faruk İpek</title>
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
              {BlogItem.fields.title}
            </Heading>
            <Box display="flex" h="30px" alignItems="center">
              <Box display="flex" justifyContent="flex-end">
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
