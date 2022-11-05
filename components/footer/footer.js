import Link from "next/link";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-left">
            <div class="footer-left-heading">Feeling good about a project?</div>
            <Link href="contact.html" class="footer-left-link">
              Let`s talk about it!
            </Link>
          </div>
          <div class="footer-right">
            <div class="footer-right-menu">
              <div class="footer-right-menu-heading">Explore</div>
              <div class="footer-right-menu-list">
                <Link href="home.html" class="footer-right-menu-list-item">
                  Home
                </Link>
                <Link href="about.html" class="footer-right-menu-list-item">
                  About
                </Link>
                <Link href="blog.html" class="footer-right-menu-list-item">
                  Blog
                </Link>
                <Link href="projects.html" class="footer-right-menu-list-item">
                  Projects
                </Link>
                <Link href="contact.html" class="footer-right-menu-list-item">
                  Contact
                </Link>
              </div>
            </div>
            <div class="footer-right-menu">
              <div class="footer-right-menu-heading">Social</div>
              <div class="footer-right-menu-list">
                <Link
                  href="https://www.linkedin.com/in/farukipekcom/"
                  class="footer-right-menu-list-item"
                >
                  Linkedin
                </Link>
                <Link
                  href="https://github.com/farukipekcom"
                  class="footer-right-menu-list-item"
                >
                  Github
                </Link>
                <Link
                  href="https://twitter.com/farukipekcom"
                  class="footer-right-menu-list-item"
                >
                  Twitter
                </Link>
                <Link
                  href="https://www.instagram.com/farukipekcom/"
                  class="footer-right-menu-list-item"
                >
                  Instagram
                </Link>
              </div>
            </div>
            <div class="footer-right-menu">
              <div class="footer-right-menu-heading">Get in touch</div>
              <div class="footer-right-menu-list">
                <Link
                  href="mailto:faruk@farukipek.com"
                  class="footer-right-menu-list-item"
                >
                  faruk@farukipek.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-copyright">© 2022 Faruk İpek</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
