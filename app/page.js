/* eslint-disable react/no-unescaped-entities */
import Button from "./components/Button";
import Arrow from "./components/icons/Arrow";
import Link from "next/link";
import PostList from "./components/PostList";
export default function Home() {
  return (
    <main className="pagecontainer">
      <div className="hero">
        <div className="title">Hey! I'm Faruk 👋</div>
        <div className="text">
          I'm a front-end developer based in Chicago, USA. I've been building
          stuff on the web for the last 6 years. I've worked with clients in
          various countries and industries.
        </div>
        <Button>Get in touch</Button>
      </div>
      <div className="posts-section">
        <div className="posts-heading">
          <div className="section-title">Posts</div>
          <Link href="/blog" className="section-button group">
            View all blog posts
            <Arrow size={20} />
          </Link>
        </div>
        <PostList />
      </div>
    </main>
  );
}
