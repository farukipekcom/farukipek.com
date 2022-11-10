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
  const router = useRouter();
  const MobileMenu = () => {
    setActive(!active);
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
          Faruk Ipek
        </Link>
        {active === false ? (
          <button onClick={MobileMenu} className={styles.switch}>
            <Menu size={15} />
          </button>
        ) : (
          <button
            onClick={MobileMenu}
            className={`${styles.switch} ${styles.switch2}`}
          >
            <Close size={15} />
          </button>
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
          <button id="toggle1" className={styles.social}>
            <ArrowDown size={15} />
          </button>
          <div className={styles.socialModal} id="socialModal">
            <a href="" className={`${styles.socialModalItem} ${styles.copy}`}>
              <Copy size={15} />
              <span>faruk@farukipek.com</span>
            </a>
            <div className={styles.divider2}></div>
            <a
              href="https://twitter.com/farukipekcom"
              className={styles.socialModalItem}
            >
              Twitter <ArrowRight size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/farukipekcom/"
              className={styles.socialModalItem}
            >
              Linkedin <ArrowRight size={15} />
            </a>
            <a
              href="https://github.com/farukipekcom"
              className={styles.socialModalItem}
            >
              Github <ArrowRight size={15} />
            </a>
            <a
              href="https://www.instagram.com/farukipekcom/"
              className={styles.socialModalItem}
            >
              Instagram <ArrowRight size={15} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
