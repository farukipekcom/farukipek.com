import Title from "../../components/Title/Title";
import { login } from "../actions";

export const metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <main>
      <Title>Admin Login</Title>
      <form action={login} className="mt-8 max-w-sm">
        {error && (
          <p className="mb-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </p>
        )}
        <label className="mb-4 block">
          <span className="mb-2 block text-sm text-secondary">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-gray bg-primary px-4 py-3 text-white outline-none focus:border-secondary"
          />
        </label>
        <label className="mb-6 block">
          <span className="mb-2 block text-sm text-secondary">Password</span>
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="w-full rounded-lg border border-gray bg-primary px-4 py-3 text-white outline-none focus:border-secondary"
          />
        </label>
        <button
          type="submit"
          className="rounded-lg bg-gray px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
