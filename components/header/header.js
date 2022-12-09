import Link from "next/link";
import Menu from "../icons/menu";
import Close from "../icons/close";
import Copy from "../icons/copy";
import ArrowRight from "../icons/arrow-right";
import ArrowDown from "../icons/arrow-down";
import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [active, setActive] = useState(false);
  const [toolkit, setToolkit] = useState(false);
  const router = useRouter();
  const MobileMenu = () => {
    setActive(!active);
  };
  const copy = () => {
    navigator.clipboard.writeText("faruk@farukipek.com");
    setToolkit(true);
    setTimeout(() => {
      setToolkit(false);
    }, 2000);
  };
  useEffect(() => {
    setActive(false);
  }, [router.pathname]);
  return (
    <header
      className={`${
        active === false ? styles.header : styles.header + " mobileMenu"
      }`}
      id="header"
    >
      <div className={styles.background}></div>
      <div className={styles.containers}>
        <Link href="/" className={styles.logo}>
          Faruk İpek
        </Link>
        {active === false ? (
          <div onClick={MobileMenu} className={styles.switch}>
            <Menu size={15} />
          </div>
        ) : (
          <div
            onClick={MobileMenu}
            className={`${styles.switch} ${styles.switch2}`}
          >
            <Close size={15} />
          </div>
        )}

        <nav className={styles.menu} id="myTopnav">
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
          <span className={`${styles.item} ${styles.divider}`}></span>
          <div className={styles.social}>
            <ArrowDown size={15} />
            <div className={styles.socialModal}>
              <div
                href=""
                className={`${styles.socialModalItem} ${styles.copy}`}
              >
                <Copy size={15} />
                <div onClick={copy} className={styles.copy}>
                  faruk@farukipek.com
                </div>
              </div>
              <div className={styles.divider2}></div>
              <a
                href="https://twitter.com/farukipekcom"
                target="_blank"
                rel="noreferrer"
                className={styles.socialModalItem}
              >
                Twitter <ArrowRight size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/farukipekcom/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialModalItem}
              >
                Linkedin <ArrowRight size={15} />
              </a>
              <a
                href="https://github.com/farukipekcom"
                target="_blank"
                rel="noreferrer"
                className={styles.socialModalItem}
              >
                Github <ArrowRight size={15} />
              </a>
              <a
                href="https://www.instagram.com/farukipekcom/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialModalItem}
              >
                Instagram <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </nav>
      </div>{" "}
      {toolkit === true ? (
        <div className={styles.copied}>Copied to clipboard!</div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
