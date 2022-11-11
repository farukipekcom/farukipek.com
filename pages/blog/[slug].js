// import Twitter from "../../components/icons/twitter";
// import Copy from "../../components/icons/copy";
import styles from "./post.module.scss";
import { useRouter } from "next/router";
import { format, parseISO } from "date-fns";
import Meta from "../../lib/meta";
import Page from "../../components/page/page";
export default function Post(data) {
  const router = useRouter();
  const post = data.post;
  const seo = data.post.seo;
  const text = <div dangerouslySetInnerHTML={{ __html: post.content }}></div>;
  const content = text.props.dangerouslySetInnerHTML.__html;
  return (
    <Page>
      <div className={styles.post}>
        <Meta
          title={seo.title}
          desc={seo.metaDesc}
          url={"https://farukipek.com" + router.asPath}
          image={post.featuredImage.node.mediaItemUrl}
        />
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
                {Math.ceil(content.trim().split(/\s+/).length / 200) + 1} min
                read
              </span>
            </div>
          </div>
          <div
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          {/* <div className={styles.share}>
        <button className={styles.item}>
          <Twitter size={15} />
          Twitter
        </button>
        <button className={styles.item}>
          <Copy size={15} />
          Share
        </button>
      </div> */}
        </div>
      </div>
    </Page>
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
                        seo {
                          metaDesc
                          title
                          fullHead
                        }
                        featuredImage {
                          node {
                            mediaItemUrl
                          }
                        }
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
                    seo {
                      metaDesc
                      title
                      fullHead
                    }
                    featuredImage {
                      node {
                        mediaItemUrl
                      }
                    }
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
