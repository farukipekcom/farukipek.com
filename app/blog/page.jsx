import React from "react";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import BlogList from "../components/Blog/BlogList";
import styles from "./blog.module.css";

export const metadata = {
  title: "Blog",
  description:
    "I am Faruk Ipek, a freelancer front-end developer from Chicago, USA. I enjoy share about how I work, design and live.",
};

export default async function Blog() {
  return (
    <main>
      <Title>Blog</Title>
      <Text>I enjoy share about how I work, design and live.</Text>
      <div className={styles.list}>
        <BlogList />
      </div>
    </main>
  );
}
