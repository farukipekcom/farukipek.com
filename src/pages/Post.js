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
const base = new Airtable({
  apiKey: `${process.env.REACT_APP_AIRTABLE_KEY}`,
}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);
function Post({ match }) {
  const [port, setPort] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    base("blog").find(`${match.params.id}`, function (err, record) {
      setPort(record);
      setLoading(true);
      console.log("2");
      console.log(match.params.id);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Container maxW="1200px" mt="40px" mb="40px">
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr" }}
            gap={5}
            ml="10px"
            mr="10px"
          >
            <Image
              src={port.fields.image[0].url}
              alt={port.fields.project_name}
              objectFit="cover"
              height="400px"
              className="Work-photo"
            />
            <Heading as="h2" fontSize="32px" fontWeight="700" mt="5">
              {port.fields.title}
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
                  {port.fields.date}
                </Text>
              </Box>
            </Box>
            <Box className="blog-post">
              <ReactMarkdown escapeHtml={false}>
                {port.fields.details}
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
    </div>
  );
}

export default Post;
