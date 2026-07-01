import { createClient } from "../../utils/supabase/server";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import styles from "./Post.module.css";
export const dynamicParams = true;
export async function generateMetadata({ params }, parent) {
  const supabase = await createClient();
  const getParams = await params;
  const slug = await getParams.slug;
  const { data } = await supabase
    .from("posts")
    .select()
    .eq("post_slug", slug)
    .single();
  if (!data) {
    notFound();
  }

  const ogImage = data.og_image || "/og-image.png";

  return {
    title: data.post_title,
    description: data.seo_description,
    openGraph: {
      title: data.post_title,
      description: data.seo_description,
      type: "article",
      publishedTime: data.created_at,
      authors: ["Faruk Ipek"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.post_title,
      description: data.seo_description,
      images: [ogImage],
      creator: "@farukipekcom",
    },
  };
}
async function getPost(slug) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("posts")
    .select()
    .eq("post_slug", slug)
    .single();
  if (!data) {
    notFound();
  }
  return data;
}
export default async function Post({ params }) {
  const getParams = await params;
  const slug = await getParams.slug;
  const post = await getPost(await slug);
  return (
    <article className={`${styles.article} pageContainer`}>
      <div className={styles.heading}>
        <h1 className={styles.title}>{post.post_title}</h1>
        <div className={styles.info}>
          <div className={styles.date}>
            {format(post.created_at, "LLLL d, yyyy")}
          </div>
          <div className={styles.readingTime}>
            {Math.ceil(post.post_content.trim().split(/\s+/).length / 200) + 1}{" "}
            min read
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.post_content }} />
    </article>
  );
}
