import Title from "../components/title/title";
import Post from "../components/post/post";
import Search from "../components/search/search";
import styles from "./blog.module.scss";
import Page from "../components/page/page";
import { useState } from "react";
const Blog = ({ post }) => {
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Page
      title="Blog - Faruk Ipek"
      desc="I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. I enjoy share about how I work, design and live."
    >
      <Title
        pagetitle={"Blog"}
        title={"I enjoy share about how I work, design and live."}
      />
      <Search length={post.nodes.length} onChange={onChange} value={query} />
      <div className={styles.list}>
        {post.nodes
          .filter((item) => item.title.toLowerCase().includes(query))
          .map((item, id) => {
            return (
              <Post
                key={item.postId}
                id={id}
                title={item.title}
                date={item.date}
                url={item.slug}
              />
            );
          })}
      </div>
    </Page>
  );
};

export default Blog;

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query NewQuery {
        posts {
          nodes {
            postId
            slug
            title
            date
          }
        }
      }`,
    }),
  });
  const json = await res.json();
  return {
    props: {
      post: json.data.posts,
    },
    revalidate: 10,
  };
}
