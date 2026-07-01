// app/sitemap.ts
import { createClient } from "./utils/supabase/server";

export default async function sitemap() {
  const base = "https://farukipek.com";
  const staticRoutes = ["", "/about", "/blog", "/projects", "/photos"].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date() }),
  );

  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("post_slug, created_at");

  const postRoutes = (posts ?? []).map((post) => ({
    url: `${base}/blog/${post.post_slug}`,
    lastModified: post.created_at,
  }));

  return [...staticRoutes, ...postRoutes];
}
