import React from "react";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={`pageContainer ${styles.footer}`}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.heading}>Have a project in mind?</div>
          <a href="mailto:faruk@farukipek.com" className={styles.link}>
            Let's talk about it!
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.subtitle}>Explore</div>
          <div className={styles.menu}>
            <Link href="/" className={styles.item}>
              Home
            </Link>
            <Link href="/about" className={styles.item}>
              About
            </Link>
            <Link href="/blog" className={styles.item}>
              Blog
            </Link>
            <Link href="/photos" className={styles.item}>
              Photos
            </Link>
            <Link href="/projects" className={styles.item}>
              Projects
            </Link>
          </div>
          <div className={styles.contact}>
            <div className={styles.subtitle}>Get in touch</div>
            <a href="mailto:faruk@farukipek.com" className={styles.email}>
              faruk@farukipek.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copyright}>
          © 2024 Faruk Ipek. Made with ❤️️️ and ☕ in Chicago.
        </div>
        <div className={styles.socials}>
          <Link href="https://x.com/farukipekcom" target="_blank">
            <Twitter />
          </Link>
          <Link href="https://www.instagram.com/farukipekcom/" target="_blank">
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/farukipekcom/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link href="https://github.com/farukipekcom/" target="_blank">
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
}
