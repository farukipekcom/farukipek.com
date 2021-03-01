import React from "react";

import images from "../img";
import {
  Container,
  Grid,
  GridItem,
  Box,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <>
      <Container maxW="1200px" mt="80px" mb="20px">
        <Grid templateColumns={{ sm: "1fr", md: "2fr 1fr" }} gap="20px">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            pl="10px"
          >
            <Heading
              as="h1"
              fontSize="30px"
              fontWeight="600"
              lineHeight="1.4em"
            >
              Merhaba ✋ Ben Faruk, <br />
              Freelance front-end developer olarak Konya'da yaşıyorum.
            </Heading>
            <Text fontSize="18px" lineHeight="1.5em" mt="20px">
              2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance
              front-end developer olarak çalışıyorum.
            </Text>
            <Text fontSize="18px" lineHeight="1.5em" mt="20px">
              İzlediğim dizileri{" "}
              <a
                href="https://www.pogdesign.co.uk/cat/profile/farukipekcom"
                target="_blank"
                className="underline-about-link"
              >
                PogDesign
              </a>
              ’da listeliyorum. Çektiğim fotoğraflara{" "}
              <a
                href="https://www.instagram.com/farukipekcom/"
                target="_blank"
                className="underline-about-link"
              >
                Instagram
              </a>{" "}
              profilimden bakabilirsiniz. Dinlediğim şarkılara ise{" "}
              <a
                href="https://open.spotify.com/user/11133935052"
                target="_blank"
                className="underline-about-link"
              >
                Spotify
              </a>{" "}
              profilimden erişebilirsiniz.
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            pr="10px"
            w={{ sm: "0", md: "320px" }}
          >
            <LazyLoadImage
              src={images.profile}
              borderRadius="full"
              boxSize="320px"
              alt="Faruk İpek"
            />
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default About;
