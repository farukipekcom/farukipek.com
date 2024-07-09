"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import OpenMenuIcon from "./open-menu-icon.svg";
import CloseMenuIcon from "./close-menu-icon.svg";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState();
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
  }, [width]);
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
        {isMobile === true ? (
          <Image
            src={CloseMenuIcon}
            width={24}
            height={24}
            alt="Close Menu Icon"
          />
        ) : (
          <Image
            src={OpenMenuIcon}
            width={24}
            height={24}
            alt="Open Menu Icon"
          />
        )}
      </div>
    </>
  );
}
