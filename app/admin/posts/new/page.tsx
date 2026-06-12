import Link from "next/link";
import Title from "../../../components/Title/Title";
import PostForm from "../../components/PostForm";

export const metadata = {
  title: "New Post",
  robots: { index: false, follow: false },
};

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main>
      <Link
        href="/admin"
        className="mb-6 inline-block text-sm text-secondary hover:text-white"
      >
        ← Back to admin
      </Link>
      <Title>New Blog Post</Title>
      <PostForm error={error} />
    </main>
  );
}
