import React from "react";
import Arrow from "../icons/Arrow";
import styles from "./Button.module.css";
import Link from "next/link";
export default function Button({ children, link }) {
  return (
    <Link href={link} className={styles.button}>
      {children}
      <Arrow />
    </Link>
  );
}
