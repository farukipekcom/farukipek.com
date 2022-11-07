import Script from "next/script";
import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.heading}>
                Feeling good about a project?
              </div>
              <Link href="/contact" className={styles.link}>
                Let`s talk about it!
              </Link>
            </div>
            <div className={styles.right}>
              <div className={styles.menu}>
                <div className={styles.heading}>Explore</div>
                <div className={styles.list}>
                  <Link href="/home" className={styles.item}>
                    Home
                  </Link>
                  <Link href="/about" className={styles.item}>
                    About
                  </Link>
                  <Link href="/blog" className={styles.item}>
                    Blog
                  </Link>
                  <Link href="/projects" className={styles.item}>
                    Projects
                  </Link>
                  <Link href="/contact" className={styles.item}>
                    Contact
                  </Link>
                </div>
              </div>
              <div className={styles.menu}>
                <div className={styles.heading}>Social</div>
                <div className={styles.list}>
                  <Link
                    href="https://www.linkedin.com/in/farukipekcom/"
                    className={styles.item}
                  >
                    Linkedin
                  </Link>
                  <Link
                    href="https://github.com/farukipekcom"
                    className={styles.item}
                  >
                    Github
                  </Link>
                  <Link
                    href="https://twitter.com/farukipekcom"
                    className={styles.item}
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://www.instagram.com/farukipekcom/"
                    className={styles.item}
                  >
                    Instagram
                  </Link>
                </div>
              </div>
              <div className={styles.menu}>
                <div className={styles.heading}>Get in touch</div>
                <div className={styles.list}>
                  <Link
                    href="mailto:faruk@farukipek.com"
                    className={styles.item}
                  >
                    faruk@farukipek.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.copyright}>© 2022 Faruk İpek</div>
          </div>
        </div>
      </footer>

      <Script id="js">
        {` 
        const toggle1 = document.getElementById("toggle1");
const toggle1Box = document.getElementById("socialModal");
const isHidden = () => toggle1Box.classList.contains("socialModal--hidden");
toggle1.addEventListener("click", function () {
  if (isHidden()) {
    toggle1Box.style.removeProperty("display");
    setTimeout(() => toggle1Box.classList.remove("socialModal--hidden"), 0);
  } else {
    toggle1Box.classList.add("socialModal--hidden");
  }
});
const toggle2 = document.getElementById("toggle2");
const toggle3 = document.getElementById("toggle3");
const toggle2Box = document.getElementById("header");
const varmi = () => toggle2Box.classList.contains("mobileMenu");
toggle2.addEventListener("click", function () {
  if (varmi()) {
    toggle2Box.classList.remove("mobileMenu");
  } else {
    toggle2Box.classList.add("mobileMenu");
  }
});
toggle3.addEventListener("click", function () {
  if (varmi()) {
    toggle2Box.classList.remove("mobileMenu");
  } else {
    toggle2Box.classList.add("mobileMenu");
  }
});
`}
      </Script>
    </>
  );
};

export default Footer;
