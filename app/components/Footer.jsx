import React from "react";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-heading">
          <div className="footer-heading-title">Have a project in mind?</div>
          <a href="mailto:faruk@farukipek.com" className="footer-heading-link">
            Let's talk about it!
          </a>
        </div>
        <div className="footer-menu">
          <div className="footer-title">Explore</div>
          <div className="footer-menu-list">
            <Link href="/" className="footer-menu-list-item">
              Home
            </Link>
            <Link href="/about" className="footer-menu-list-item">
              About
            </Link>
            <Link href="/blog" className="footer-menu-list-item">
              Blog
            </Link>
            <Link href="/photos" className="footer-menu-list-item">
              Photos
            </Link>
            <Link href="/projects" className="footer-menu-list-item">
              Projects
            </Link>
          </div>
          <div className="footer-contact">
            <div className="footer-title">Get in touch</div>
            <a href="mailto:faruk@farukipek.com" className="footer-email">
              faruk@farukipek.com
            </a>
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
  );
}
