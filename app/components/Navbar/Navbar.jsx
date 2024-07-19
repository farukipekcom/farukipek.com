"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Close from "../icons/Close";
import Menu from "../icons/Menu";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState();
  const pathname = usePathname();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (width > 640) {
      setIsMobile(false);
    }
    setIsMobile(false);
  }, [width, pathname]);
  return (
    <div className={styles.navbar}>
      <nav className={isMobile === true ? styles.mobile : styles.desktop}>
        {isMobile === true ? <Logo /> : ""}
        <Link
          href="/about"
          className={styles.item}
          onClick={() => setIsMobile(false)}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={styles.item}
          onClick={() => setIsMobile(false)}
        >
          Blog
        </Link>
        <Link
          href="/photos"
          className={styles.item}
          onClick={() => setIsMobile(false)}
        >
          Photos
        </Link>
        <Link
          href="/projects"
          className={styles.item}
          onClick={() => setIsMobile(false)}
        >
          Projects
        </Link>
      </nav>
      <div
        className={`${isMobile === true ? styles.icon + " " + styles.fix : styles.icon}`}
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        {isMobile === true ? <Close /> : <Menu />}
      </div>
    </div>
  );
}
