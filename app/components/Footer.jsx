import React from "react";

import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

export default function Footer() {
  return (
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
  );
}
