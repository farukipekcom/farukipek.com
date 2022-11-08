import Twitter from "../../components/icons/twitter";
import Copy from "../../components/icons/copy";
import styles from "./post.module.scss";
import { format, parseISO } from "date-fns";
export default function Post(data) {
  const post = data.post;
  const text = <div dangerouslySetInnerHTML={{ __html: post.content }}></div>;
  const content = text.props.dangerouslySetInnerHTML.__html;
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.info}>
            <span className={styles.date}>
              <time dateTime={post.date}>
                {format(parseISO(post.date), "d LLLL yyyy")}
              </time>
            </span>
            <span className={styles.readingtime}>
              {Math.ceil(content.trim().split(/\s+/).length / 200) + 1} min read
            </span>
          </div>
        </div>
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <div className={styles.share}>
          <a href="" className={styles.item}>
            <Twitter size={15} />
            Twitter
          </a>
          <a href="" className={styles.item}>
            <Copy size={15} />
            Share
          </a>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        date
                    }
                }
            `,
      variables: {
        id: context.params.slug,
        idType: "SLUG",
      },
    }),
  });
  const json = await res.json();
  return {
    props: {
      post: json.data.post,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query AllPostsQuery {
            posts {
                nodes {
                    slug
                    content
                    title
                    date
                }
            }
        }
    `,
    }),
  });
  const json = await res.json();
  const posts = json.data.posts.nodes;
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: "blocking" };
}
