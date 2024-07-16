import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
export default function ProjectCard({ title, category, link, keywords }) {
  return (
    <Link href={link} target="_blank" className={`${styles.project} group`}>
      <div className={styles.container}>
        <div className={styles.title}>
          {title}
          <span className={styles.category}>{category}</span>
        </div>
        <div className={styles.keywords}>{keywords}</div>
      </div>
    </Link>
  );
}
