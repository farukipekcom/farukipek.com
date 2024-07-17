import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
export default function ProjectCard({ title, category, link, keywords }) {
  return (
    <Link href={link} target="_blank" className={`${styles.project} group`}>
      <div className={styles.container}>
        <div className={`${styles.title} group-hover:text-white`}>
          {title}
          <span
            className={`${styles.category} group-hover:inline-block group-hover:opacity-100`}
          >
            {category}
          </span>
        </div>
        <div
          className={`${styles.keywords} group-hover:border-white group-hover:text-white`}
        >
          {keywords}
        </div>
      </div>
    </Link>
  );
}
