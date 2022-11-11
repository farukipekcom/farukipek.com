import Title from "../components/title/title";
import Post from "../components/post/post";
import Search from "../components/search/search";
import styles from "./blog.module.scss";
import Page from "../components/page/page";
const Blog = ({ post }) => {
  return (
    <Page
      title="Blog - Faruk Ipek"
      desc="I'm Faruk Ipek, a freelancer front-end developer from Charlotte USA. I enjoy share about how I work, design and live."
    >
      <div className={styles.blog}>
        <div className={styles.container}>
          <Title
            pagetitle={"Blog"}
            title={"I enjoy share about how I work, design and live."}
          />
          <Search length={post.nodes.length} />
          <div className={styles.list}>
            {post.nodes.map((item) => {
              return (
                <div key={item.postId}>
                  <Post title={item.title} date={item.date} url={item.slug} />
                </div>
              );
            })}
          </div>
        </div>
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
