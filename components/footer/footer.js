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
                  <Link href="/" className={styles.item}>
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
      <Script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
        strategy="lazyOnload"
      ></Script>
    </>
  );
};

export default Footer;
