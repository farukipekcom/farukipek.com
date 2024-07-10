import Button from "./components/Button";
import Arrow from "./components/icons/Arrow";
import Link from "next/link";
import PostList from "./components/PostList";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";
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
      <div className="section">
        <div className="section-heading">
          <div className="section-title">Posts</div>
          <Link href="/blog" className="section-button group">
            View all blog posts
            <Arrow size={20} />
          </Link>
        </div>
        <PostList />
      </div>
      <div className="section">
        <div className="section-heading">
          <div className="section-title">Projects</div>
          <Link href="/projects" className="section-button group">
            View all projects
            <Arrow size={20} />
          </Link>
        </div>
        <ProjectList />
      </div>
      <Footer />
    </main>
  );
}
