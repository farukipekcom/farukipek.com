"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Close from "./icons/Close";
import Menu from "./icons/Menu";
import { usePathname } from "next/navigation";
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
    <>
      <nav className={isMobile === true ? "mobile-nav" : ""}>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/photos">Photos</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <div
        className="menuicon"
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        {isMobile === true ? <Close /> : <Menu />}
      </div>
    </>
  );
}
