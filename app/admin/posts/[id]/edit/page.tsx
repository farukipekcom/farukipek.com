import Link from "next/link";
import { notFound } from "next/navigation";
import Title from "../../../../components/Title/Title";
import PostForm from "../../../components/PostForm";
import { createClient } from "../../../../utils/supabase/server";

export const metadata = {
  title: "Edit Post",
  robots: { index: false, follow: false },
};

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("posts")
    .select()
    .eq("post_id", id)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Link
        href="/admin"
        className="mb-6 inline-block text-sm text-secondary hover:text-white"
      >
        ← Back to admin
      </Link>
      <Title>Edit Blog Post</Title>
      <PostForm error={error} post={post} />
    </main>
  );
}
