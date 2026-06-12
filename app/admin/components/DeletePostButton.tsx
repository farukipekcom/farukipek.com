"use client";

import { deletePost } from "../actions";

const buttonClassName =
  "rounded px-3 py-1.5 text-sm text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300";

export default function DeletePostButton({
  postId,
  title,
}: {
  postId: number;
  title: string;
}) {
  return (
    <form
      action={deletePost}
      onSubmit={(e) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="post_id" value={postId} />
      <button type="submit" className={buttonClassName}>
        Delete
      </button>
    </form>
  );
}
