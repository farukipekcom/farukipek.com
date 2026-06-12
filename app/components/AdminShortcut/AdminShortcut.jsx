import Link from "next/link";
import { createClient } from "../../utils/supabase/server";

export default async function AdminShortcut() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return (
    <Link
      href="/admin"
      className="fixed bottom-6 right-6 z-50 rounded-lg bg-gray px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-secondary hover:text-primary"
    >
      Admin
    </Link>
  );
}
