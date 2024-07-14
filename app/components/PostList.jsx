/* eslint-disable @next/next/no-async-client-component */
import React from "react";
import PostCard from "./PostCard";
import { createClient } from "../utils/supabase/server";
export default async function PostList() {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select();
  return (
    <div className="posts-lists">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.post_id}
            title={post.post_title}
            date={post.created_at}
            slug={post.post_slug}
          />
        );
      })}
    </div>
  );
}
