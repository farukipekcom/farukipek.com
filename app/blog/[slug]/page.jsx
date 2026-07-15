import { createClient } from "../../utils/supabase/server";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import styles from "./Post.module.css";
import JsonLd from "../../components/JsonLd";
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
  const url = `https://farukipek.com/blog/${data.post_slug}`;

  return {
    title: data.post_title,
    description: data.seo_description,
    alternates: {
      canonical: `/blog/${data.post_slug}`,
    },
    openGraph: {
      title: data.post_title,
      url: url,
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
  const articleUrl = `https://farukipek.com/blog/${post.post_slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: post.post_title,
    description: post.seo_description,
    image: post.og_image || "https://farukipek.com/og-image.png",
    datePublished: post.created_at,
    dateModified: post.created_at,
    author: {
      "@type": "Person",
      "@id": "https://farukipek.com/#person",
      name: "Faruk Ipek",
      url: "https://farukipek.com/about",
    },
    publisher: {
      "@id": "https://farukipek.com/#person",
    },
    inLanguage: "en-US",
  };
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className={`${styles.article} pageContainer`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{post.post_title}</h1>
          <div className={styles.info}>
            <div className={styles.date}>
              {format(post.created_at, "LLLL d, yyyy")}
            </div>
            <div className={styles.readingTime}>
              {Math.ceil(post.post_content.trim().split(/\s+/).length / 200) +
                1}{" "}
              min read
            </div>
          </div>
          <div className={styles.divider}></div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.post_content }} />
      </article>
    </>
  );
}
