import React from "react";
import PageTitle from "../components/PageTitle";
import PageText from "../components/PageText";
import Filter from "../components/Filter";
import PostList from "../components/PostList";
export default function Blog() {
  return (
    <main>
      <PageTitle>Blog</PageTitle>
      <PageText>I enjoy share about how I work, design and live.</PageText>
      <Filter />
      <PostList />
    </main>
  );
}
