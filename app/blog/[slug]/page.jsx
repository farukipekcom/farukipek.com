import React from "react";
import { createClient } from "../../utils/supabase/server";
import { notFound } from "next/navigation";
export const dynamicParams = true; // default val = true
async function getPost(slug) {
  const supabase = createClient();
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
  const post = await getPost(params.slug);
  const slug = params.slug;
  return (
    <article>
      <div className="post-heading">
        <h1 className="post-title">{post.post_title}</h1>
        <div className="post-info">
          <div className="post-published-date">Jun 19, 2023</div>
          <div className="post-reading-time">
            {Math.ceil(post.post_content.trim().split(/\s+/).length / 200) + 1}{" "}
            min read
          </div>
        </div>
        <div className="divider"></div>
      </div>
      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: post.post_content }}
      />
    </article>
  );
}
