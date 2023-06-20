// import Twitter from "../../components/icons/twitter";
// import Copy from "../../components/icons/copy";
import styles from "./post.module.scss";
import {format, parseISO} from "date-fns";
import Page from "../../components/page/page";
import {supabase} from "../api/supabaseClient";
import CommentForm from "../../components/comment-form/comment-form";
import Comment from "../../components/comment/comment";
import Script from "next/script";
export default function Post({post}) {
  return (
    <Page title={post.seo_title + " - Faruk Ipek"} desc={post.seo_description}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{post.post_title}</h1>
          <div className={styles.info}>
            <span className={styles.date}>
              <time dateTime={post.created_at}>{format(parseISO(post.created_at), "d LLLL yyyy")}</time>
            </span>
            <span className={styles.readingtime}>{Math.ceil(post.post_content.trim().split(/\s+/).length / 200) + 1} min read</span>
          </div>
        </div>
        <div className={styles.article} dangerouslySetInnerHTML={{__html: post.post_content}}></div>
      </div>
      {/* <CommentForm postId={post.postId} />
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
      )} */}
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
  const {data} = await supabase.from("posts").select("*").eq("post_slug", context.params.slug);
  return {
    props: {
      post: data[0],
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  const {data} = await supabase.from("posts").select("*");
  const paths = data.map((post) => ({
    params: {slug: post.post_slug},
  }));
  return {paths, fallback: "blocking"};
}
