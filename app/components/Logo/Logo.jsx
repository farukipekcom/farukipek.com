import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/logo.png"
        width={40}
        height={40}
        alt="Faruk Ipek"
        className={styles.photo}
      />
      <div className={styles.heading}>
        <span className={styles.name}>Faruk Ipek</span>
        <span className={styles.role}>Front-end Developer</span>
      </div>
    </Link>
  );
}
