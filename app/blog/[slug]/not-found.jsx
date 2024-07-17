import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <p>
        Go back to all <Link href="/blog">blog posts</Link>.
      </p>
    </main>
  );
}
