import React from "react";
import PostCard from "./PostCard";
import { createClient } from "../../utils/supabase/server";
import styles from "./BlogList.module.css";
export default async function BlogList() {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select();
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
