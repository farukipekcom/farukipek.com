// import Twitter from "../../components/icons/twitter";
// import Copy from "../../components/icons/copy";
import styles from "./post.module.scss";
import { format, parseISO } from "date-fns";
import Page from "../../components/page/page";
import CommentForm from "../../components/comment-form/comment-form";
import Comment from "../../components/comment/comment";
import Script from "next/script";
export default function Post(data) {
  const post = data.post;
  const comments = post.comments.nodes;
  const seo = data.post.seo;
  const text = <div dangerouslySetInnerHTML={{ __html: post.content }}></div>;
  const content = text.props.dangerouslySetInnerHTML.__html;
  return (
    <Page
      title={seo.title}
      desc={seo.metaDesc}
      image={post.featuredImage?.node.mediaItemUrl}
    >
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
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
      <CommentForm postId={post.postId} />
      {comments.length > 0 ? (
        <div className={styles.comment}>
          {comments.map((item) => {
            return (
              <>
                <Comment comment={item} />
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}

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
                        postId
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
                        comments(first: 100) {
                          nodes {
                            content
                            author {
                              node {
                                name
                              }
                            }
                            date
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
                    postId
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
                    comments(first: 100) {
                      nodes {
                        content
                        author {
                          node {
                            name
                          }
                        }
                        date
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
