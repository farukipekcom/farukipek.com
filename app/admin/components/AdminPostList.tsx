import Link from "next/link";
import { format } from "date-fns";
import { createClient } from "../../utils/supabase/server";
import DeletePostButton from "./DeletePostButton";

const actionLinkClassName =
  "rounded px-3 py-1.5 text-sm text-secondary transition-colors hover:bg-gray hover:text-white";

export default async function AdminPostList() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("posts")
    .select("post_id, post_title, post_slug, post_category, created_at")
    .order("post_id", { ascending: false });

  if (!posts?.length) {
    return (
      <p className="mt-10 text-sm text-secondary">No blog posts yet.</p>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="mb-4 text-xl font-semibold text-white">Blog posts</h2>
      <div className="overflow-x-auto rounded-lg border border-gray">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-gray bg-gray/40 text-secondary">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.post_id} className="border-b border-gray last:border-0">
                <td className="px-4 py-3 text-white">{post.post_title}</td>
                <td className="px-4 py-3 text-secondary">
                  {post.post_category || "—"}
                </td>
                <td className="px-4 py-3 text-secondary">
                  {format(post.created_at, "LLLL d, yyyy")}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href={`/blog/${post.post_slug}`}
                      target="_blank"
                      className={actionLinkClassName}
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/posts/${post.post_id}/edit`}
                      className={actionLinkClassName}
                    >
                      Edit
                    </Link>
                    <DeletePostButton
                      postId={post.post_id}
                      title={post.post_title}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
