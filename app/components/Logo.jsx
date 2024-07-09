import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src="/logo.png"
        width={40}
        height={40}
        alt="Faruk Ipek"
        className="logo-profile"
      />
      <div className="header-info">
        <span className="header-name">Faruk Ipek</span>
        <span className="header-role">Front-end Developer</span>
      </div>
    </Link>
  );
}
