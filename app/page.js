/* eslint-disable react/no-unescaped-entities */
import Button from "./components/Button";
import Arrow from "./components/icons/Arrow";
import Link from "next/link";
import PostList from "./components/PostList";
import ProjectList from "./components/ProjectList";
import Twitter from "./components/icons/Twitter";
import Instagram from "./components/icons/Instagram";
import Github from "./components/icons/Github";
import Linkedin from "./components/icons/Linkedin";
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
      <footer>
        <div className="footer-top">
          <div className="footer-heading">
            <div className="footer-heading-title">Have a project in mind?</div>
            <div className="footer-heading-link">Let's talk about it!</div>
          </div>
          <div className="footer-menu">
            <div className="footer-title">Explore</div>
            <div className="footer-menu-list">
              <div className="footer-menu-list-item">Home</div>
              <div className="footer-menu-list-item">About</div>
              <div className="footer-menu-list-item">Blog</div>
              <div className="footer-menu-list-item">Photos</div>
              <div className="footer-menu-list-item">Projects</div>
            </div>
            <div className="footer-contact">
              <div className="footer-title">Get in touch</div>
              <div className="footer-email">faruk@farukipek.com</div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright-text">
            © 2024 Faruk Ipek. Made with ❤️️️ and ☕ in Chicago.
          </div>
          <div className="copyright-socials">
            <Twitter />
            <Instagram />
            <Linkedin />
            <Github />
          </div>
        </div>
      </footer>
    </main>
  );
}
