import Script from "next/script";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-left">
              <div class="footer-left-heading">
                Feeling good about a project?
              </div>
              <Link href="contact" class="footer-left-link">
                Let`s talk about it!
              </Link>
            </div>
            <div class="footer-right">
              <div class="footer-right-menu">
                <div class="footer-right-menu-heading">Explore</div>
                <div class="footer-right-menu-list">
                  <Link href="home" class="footer-right-menu-list-item">
                    Home
                  </Link>
                  <Link href="about" class="footer-right-menu-list-item">
                    About
                  </Link>
                  <Link href="blog" class="footer-right-menu-list-item">
                    Blog
                  </Link>
                  <Link href="projects" class="footer-right-menu-list-item">
                    Projects
                  </Link>
                  <Link href="contact" class="footer-right-menu-list-item">
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

      <Script id="js">
        {` 
        const toggle1 = document.getElementById("toggle1");
const toggle1Box = document.getElementById("social-modal");
const isHidden = () => toggle1Box.classList.contains("social-modal--hidden");
toggle1.addEventListener("click", function () {
  if (isHidden()) {
    toggle1Box.style.removeProperty("display");
    setTimeout(() => toggle1Box.classList.remove("social-modal--hidden"), 0);
  } else {
    toggle1Box.classList.add("social-modal--hidden");
  }
});
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const toggle2Box = document.getElementById("header");
const varmi = () => toggle2Box.classList.contains("mobile-menu");
toggle2.addEventListener("click", function () {
  if (varmi()) {
    toggle2Box.classList.remove("mobile-menu");
  } else {
    toggle2Box.classList.add("mobile-menu");
  }
});
toggle3.addEventListener("click", function () {
  if (varmi()) {
    toggle2Box.classList.remove("mobile-menu");
  } else {
    toggle2Box.classList.add("mobile-menu");
  }
});
`}
      </Script>
    </>
  );
};

export default Footer;
