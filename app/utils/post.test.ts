import { describe, it, expect } from "vitest";
import { buildPostMetadata, isEmptyHtml } from "./post";
import { getReadingTimeMinutes } from "./post";

describe("isEmptyHtml", () => {
  it("treats empty tags as empty", () => {
    expect(isEmptyHtml("<p></p>")).toBe(true);
    expect(isEmptyHtml("<p>&nbsp;</p>")).toBe(true);
  });

  it("accepts real content", () => {
    expect(isEmptyHtml("<p>Hello</p>")).toBe(false);
  });
});

describe("getReadingTimeMinutes", () => {
  it("returns 1 min for short content", () => {
    expect(getReadingTimeMinutes("<p>Hello World!</p>")).toBe(2);
  });

  it("returns higher minutes for long content", () => {
    const longText = "<p>" + "word ".repeat(400) + "</p>";
    expect(getReadingTimeMinutes(longText)).toBe(3);
  });
});

describe("buildPostMetadata", () => {
  it("uses default og image when none provided", () => {
    const metadata = buildPostMetadata({
      post_title: "My Post",
      post_slug: "my-post",
      seo_description: "A description",
      og_image: null,
      created_at: "2026-07-03T12:00:00Z",
    });
    expect(metadata.openGraph.images[0].url).toBe("/og-image.png");
    expect(metadata.alternates.canonical).toBe("/blog/my-post");
  });
  it("uses custom og image when provided", () => {
    const metadata = buildPostMetadata({
      post_title: "My Post",
      post_slug: "my-post",
      seo_description: "A description",
      og_image: "https://farukipek.com/custom.png",
      created_at: "2026-07-03T12:00:00Z",
    });
    expect(metadata.openGraph.images[0].url).toBe(
      "https://farukipek.com/custom.png",
    );
  });
});
