import Title from "../components/title/title";
import styles from "./photos.module.scss";
import Page from "../components/page/page";
import { useState } from "react";
const Photos = ({ photos }) => {
  console.log("PHOTO", photos);
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Page
      title="Photos - Faruk Ipek"
      desc="I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. I love taking pictures of the world around me, capturing moments and emotions as they happen."
    >
      <Title
        pagetitle={"Photos"}
        title={
          "I love taking photos of the world around me, capturing moments and emotions as they happen. "
        }
      />

      <div className={styles.photos}>
        {photos.map((item) => {
          return (
            <a href={item.links.html} target="_blank">
              <img src={item.urls.raw} alt="" />
            </a>
          );
        })}
      </div>
    </Page>
  );
};

export default Photos;

export async function getStaticProps() {
  const res = await fetch(
    `https://api.unsplash.com/users/farukipekcom/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=30`
  );
  const json = await res.json();
  return {
    props: {
      photos: json,
    },
    revalidate: 10,
  };
}
