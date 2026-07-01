"use server";

import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isEmptyHtml(html: string) {
  return !html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/admin/login?error=Invalid email or password");
  }

  redirect("/admin");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createPost(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const title = (formData.get("title") as string).trim();
  const slugInput = (formData.get("slug") as string).trim();
  const slug = slugInput || slugify(title);
  const seoDescription = (formData.get("seo_description") as string).trim();
  const ogImage = (formData.get("og_image") as string).trim();
  const category = (formData.get("post_category") as string).trim();
  const content = (formData.get("post_content") as string).trim();

  if (!title || !seoDescription || isEmptyHtml(content)) {
    redirect("/admin/posts/new?error=Title, SEO description, and content are required");
  }

  const { error } = await supabase.from("posts").insert({
    post_title: title,
    post_slug: slug,
    seo_description: seoDescription,
    og_image: ogImage || null,
    post_category: category || null,
    post_content: content,
  });

  if (error) {
    redirect(
      `/admin/posts/new?error=${encodeURIComponent(error.message)}`,
    );
  }

  redirect(`/blog/${slug}`);
}

export async function updatePost(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const postId = formData.get("post_id") as string;
  const title = (formData.get("title") as string).trim();
  const slugInput = (formData.get("slug") as string).trim();
  const slug = slugInput || slugify(title);
  const seoDescription = (formData.get("seo_description") as string).trim();
  const ogImage = (formData.get("og_image") as string).trim();
  const category = (formData.get("post_category") as string).trim();
  const content = (formData.get("post_content") as string).trim();

  if (!postId || !title || !seoDescription || isEmptyHtml(content)) {
    redirect(
      `/admin/posts/${postId}/edit?error=Title, SEO description, and content are required`,
    );
  }

  const { error } = await supabase
    .from("posts")
    .update({
      post_title: title,
      post_slug: slug,
      seo_description: seoDescription,
      og_image: ogImage || null,
      post_category: category || null,
      post_content: content,
    })
    .eq("post_id", postId);

  if (error) {
    redirect(
      `/admin/posts/${postId}/edit?error=${encodeURIComponent(error.message)}`,
    );
  }

  redirect(`/blog/${slug}`);
}

export async function deletePost(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const postId = formData.get("post_id") as string;

  if (!postId) {
    redirect("/admin?error=Post not found");
  }

  const { error } = await supabase.from("posts").delete().eq("post_id", postId);

  if (error) {
    redirect(`/admin?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/admin");
}
