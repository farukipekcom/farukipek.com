const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-left">
            <div class="footer-left-heading">Feeling good about a project?</div>
            <a href="contact.html" class="footer-left-link">
              Let`s talk about it!
            </a>
          </div>
          <div class="footer-right">
            <div class="footer-right-menu">
              <div class="footer-right-menu-heading">Explore</div>
              <div class="footer-right-menu-list">
                <a href="home.html" class="footer-right-menu-list-item">
                  Home
                </a>
                <a href="about.html" class="footer-right-menu-list-item">
                  About
                </a>
                <a href="blog.html" class="footer-right-menu-list-item">
                  Blog
                </a>
                <a href="projects.html" class="footer-right-menu-list-item">
                  Projects
                </a>
                <a href="contact.html" class="footer-right-menu-list-item">
                  Contact
                </a>
              </div>
            </div>
            <div class="footer-right-menu">
              <div class="footer-right-menu-heading">Social</div>
              <div class="footer-right-menu-list">
                <a
                  href="https://www.linkedin.com/in/farukipekcom/"
                  class="footer-right-menu-list-item"
                >
                  Linkedin
                </a>
                <a
                  href="https://github.com/farukipekcom"
                  class="footer-right-menu-list-item"
                >
                  Github
                </a>
                <a
                  href="https://twitter.com/farukipekcom"
                  class="footer-right-menu-list-item"
                >
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/farukipekcom/"
                  class="footer-right-menu-list-item"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div class="footer-right-menu">
              <div class="footer-right-menu-heading">Get in touch</div>
              <div class="footer-right-menu-list">
                <a
                  href="mailto:faruk@farukipek.com"
                  class="footer-right-menu-list-item"
                >
                  faruk@farukipek.com
                </a>
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
