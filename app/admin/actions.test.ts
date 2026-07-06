import { describe, it, expect, vi, beforeEach } from "vitest";
import { createPost, deletePost, updatePost } from "./actions";
import { createClient } from "../utils/supabase/server";

vi.mock("next/navigation", () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`REDIRECT:${url}`);
  }),
}));

const mockInsert = vi.fn().mockResolvedValue({ error: null });
const mockUpdate = vi.fn().mockResolvedValue({ error: null });
const mockDelete = vi.fn().mockResolvedValue({ error: null });

vi.mock("../utils/supabase/server", () => ({
  createClient: vi.fn(async () => ({
    auth: {
      getUser: async () => ({ data: { user: { id: "user-1" } } }),
    },
    from: () => ({
      insert: mockInsert,
      update: () => ({ eq: mockUpdate }),
      delete: () => ({ eq: mockDelete }),
    }),
  })),
}));

function makeFormData(fields: Record<string, string>) {
  const defaults = {
    slug: "",
    og_image: "",
    post_category: "",
    title: "",
    seo_description: "",
    post_content: "",
    created_at: "",
  };
  const fd = new FormData();
  for (const [key, value] of Object.entries({ ...defaults, ...fields })) {
    fd.set(key, value);
  }
  return fd;
}

describe("createPost", () => {
  beforeEach(() => vi.clearAllMocks());

  it("redirects with error when content is empty HTML", async () => {
    await expect(
      createPost(
        makeFormData({
          title: "My Post",
          seo_description: "A description",
          post_content: "<p></p>",
          created_at: "2026-07-03T12:00",
        }),
      ),
    ).rejects.toThrow(/Title, SEO description, and content are required/);
  });

  it("generates slug from title when slug is empty", async () => {
    await expect(
      createPost(
        makeFormData({
          title: "Hello World",
          slug: "",
          seo_description: "A description",
          post_content: "<p>Real content</p>",
          created_at: "2026-07-03T12:00",
        }),
      ),
    ).rejects.toThrow("REDIRECT:/blog/hello-world");
  });

  it("redirects to login when user is not authenticated", async () => {
    vi.mocked(createClient).mockResolvedValueOnce({
      auth: {
        getUser: async () => ({ data: { user: null } }),
      },
      from: vi.fn(),
    } as never);

    await expect(createPost(makeFormData({ title: "Test" }))).rejects.toThrow(
      "REDIRECT:/admin/login",
    );
  });

  it("redirects with error when title is missing", async () => {
    await expect(
      createPost(
        makeFormData({
          title: "",
          seo_description: "A description",
          post_content: "<p>Content</p>",
          created_at: "2026-07-03T12:00",
        }),
      ),
    ).rejects.toThrow(/Title, SEO description, and content are required/);
  });

  it("uses custom slug when provided", async () => {
    await expect(
      createPost(
        makeFormData({
          title: "Hello World",
          slug: "my-custom-slug",
          seo_description: "A description",
          post_content: "<p>Real content</p>",
          created_at: "2026-07-03T12:00",
        }),
      ),
    ).rejects.toThrow("REDIRECT:/blog/my-custom-slug");
  });

  it("redirects with error when Supabase insert fails", async () => {
    mockInsert.mockResolvedValueOnce({ error: { message: "duplicate slug" } });

    await expect(
      createPost(
        makeFormData({
          title: "Hello World",
          seo_description: "A description",
          post_content: "<p>Real content</p>",
          created_at: "2026-07-03T12:00",
        }),
      ),
    ).rejects.toThrow(/duplicate%20slug/);
  });
});

describe("updatePost", () => {
  it("redirects with error when post_id is missing", async () => {
    await expect(
      updatePost(
        makeFormData({
          title: "My Post",
          seo_description: "A description",
          post_content: "<p>Content</p>",
          created_at: "2026-07-03T12:00",
        }),
      ),
    ).rejects.toThrow(/Title, SEO description, and content are required/);
  });
});
describe("deletePost", () => {
  it("redirects with error when post_id is missing", async () => {
    await expect(deletePost(makeFormData({}))).rejects.toThrow(
      "REDIRECT:/admin?error=Post not found",
    );
  });
  it("redirects to admin after successful delete", async () => {
    await expect(deletePost(makeFormData({ post_id: "42" }))).rejects.toThrow(
      "REDIRECT:/admin",
    );
  });
});
