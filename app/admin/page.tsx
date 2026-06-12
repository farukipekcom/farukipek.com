import Link from "next/link";
import Title from "../components/Title/Title";
import Text from "../components/Text/Text";
import AdminPostList from "./components/AdminPostList";
import { createClient } from "../utils/supabase/server";
import { logout } from "./actions";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function Admin({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main>
      <Title>Admin</Title>
      <Text>Signed in as {user?.email}</Text>
      {error && (
        <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/admin/posts/new"
          className="rounded-lg bg-gray px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
        >
          Create blog post
        </Link>
      </div>
      <AdminPostList />
      <form action={logout} className="mt-8">
        <button
          type="submit"
          className="rounded-lg bg-gray px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
        >
          Sign out
        </button>
      </form>
    </main>
  );
}
