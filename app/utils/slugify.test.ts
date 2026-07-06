import { describe, it, expect } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips special characters", () => {
    expect(slugify("What's Next.js?")).toBe("whats-nextjs");
  });

  it("trims whitespace and collapses multiple spaces", () => {
    expect(slugify("  My   Cool  Post  ")).toBe("my-cool-post");
  });

  it("removes leading and trailing dashes", () => {
    expect(slugify("--hello--")).toBe("hello");
  });
});
