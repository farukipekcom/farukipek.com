export function isEmptyHtml(html: string) {
  return !html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}
export function getReadingTimeMinutes(html: string) {
  const text = html.replace(/<[^>]*>/g, "").trim();
  const wordCount = text ? text.split(/\s+/).length : 0;
  return Math.ceil(wordCount / 200) + 1;
}

export function buildPostMetadata(post: {
  post_title: string;
  post_slug: string;
  seo_description: string;
  og_image: string | null;
  created_at: string;
}) {
  const ogImage = post.og_image || "/og-image.png";

  return {
    title: post.post_title,
    description: post.seo_description,
    alternates: {
      canonical: `/blog/${post.post_slug}`,
    },
    openGraph: {
      title: post.post_title,
      url: `https://farukipek.com/blog/${post.post_slug}`,
      description: post.seo_description,
      type: "article",
      publishedTime: post.created_at,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}
