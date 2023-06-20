import Title from "../components/title/title";
import Post from "../components/post/post";
import Search from "../components/search/search";
import styles from "./blog.module.scss";
import Page from "../components/page/page";
import {supabase} from "./api/supabaseClient";
import {useState} from "react";
const Blog = ({post}) => {
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Page
      title="Blog - Faruk Ipek"
      desc="I am Faruk Ipek, a freelancer front-end developer from Charlotte USA. I enjoy share about how I work, design and live.">
      <Title pagetitle={"Blog"} title={"I enjoy share about how I work, design and live."} />
      <Search length={post.length} onChange={onChange} value={query} />
      <div className={styles.list}>
        {post
          .filter((item) => item.post_title.toLowerCase().includes(query))
          .map((item, id) => {
            return <Post key={item.post_id} id={id} title={item.post_title} date={item.created_at} url={item.post_slug} />;
          })}
      </div>
    </Page>
  );
};
export default Blog;
export async function getStaticProps() {
  const {data} = await supabase.from("posts").select("*");
  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}
