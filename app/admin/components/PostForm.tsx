"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { createPost, updatePost } from "../actions";

const PostEditor = dynamic(() => import("./PostEditor"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[320px] rounded-lg border border-gray bg-primary" />
  ),
});

const inputClassName =
  "w-full rounded-lg border border-gray bg-primary px-4 py-3 text-white outline-none focus:border-secondary";

function isEmptyHtml(html: string) {
  return !html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

type Post = {
  post_id: number;
  post_title: string;
  post_slug: string;
  seo_description: string;
  post_category: string | null;
  post_content: string;
};

export default function PostForm({
  error,
  post,
}: {
  error?: string;
  post?: Post;
}) {
  const isEditing = Boolean(post);
  const [content, setContent] = useState(post?.post_content ?? "");
  const [contentError, setContentError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (isEmptyHtml(content)) {
      e.preventDefault();
      setContentError("Content is required");
      return;
    }

    setContentError("");
  }

  return (
    <form
      action={isEditing ? updatePost : createPost}
      onSubmit={handleSubmit}
      className="mt-8 max-w-2xl"
    >
      {error && (
        <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}
      {isEditing && (
        <input type="hidden" name="post_id" value={post?.post_id} />
      )}
      <label className="mb-4 block">
        <span className="mb-2 block text-sm text-secondary">Title</span>
        <input
          type="text"
          name="title"
          required
          defaultValue={post?.post_title}
          className={inputClassName}
        />
      </label>
      <label className="mb-4 block">
        <span className="mb-2 block text-sm text-secondary">
          Slug{" "}
          <span className="text-secondary/70">(optional — generated from title)</span>
        </span>
        <input
          type="text"
          name="slug"
          placeholder="my-new-post"
          defaultValue={post?.post_slug}
          className={inputClassName}
        />
      </label>
      <label className="mb-4 block">
        <span className="mb-2 block text-sm text-secondary">SEO description</span>
        <textarea
          name="seo_description"
          required
          rows={2}
          defaultValue={post?.seo_description}
          className={inputClassName}
        />
      </label>
      <label className="mb-4 block">
        <span className="mb-2 block text-sm text-secondary">
          Category <span className="text-secondary/70">(optional)</span>
        </span>
        <input
          type="text"
          name="post_category"
          defaultValue={post?.post_category ?? ""}
          className={inputClassName}
        />
      </label>
      <div className="mb-6 block">
        <span className="mb-2 block text-sm text-secondary">Content</span>
        <PostEditor onUpdate={setContent} initialHtml={post?.post_content} />
        <input type="hidden" name="post_content" value={content} />
        {contentError && (
          <p className="mt-2 text-sm text-red-400">{contentError}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-lg bg-gray px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
      >
        {isEditing ? "Save changes" : "Publish post"}
      </button>
    </form>
  );
}
