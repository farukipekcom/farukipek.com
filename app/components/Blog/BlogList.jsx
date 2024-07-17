import React from "react";
import PostCard from "./PostCard";
import { createClient } from "../../utils/supabase/server";
import styles from "./BlogList.module.css";
export default async function BlogList({ limit = "1000" }) {
  const supabase = createClient();
  const { data: posts, error } = await supabase
    .from("posts")
    .select()
    .order("post_id", { ascending: false })
    .range(0, limit - 1);
  return (
    <div className={styles.blog}>
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
