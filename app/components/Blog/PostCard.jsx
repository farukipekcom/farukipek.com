import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import styles from "./PostCard.module.css";
export default function PostCard({ title, date, slug }) {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_URL + "blog/" + slug}
      className={`${styles.post} group`}
    >
      <div className={styles.container}>
        <div
          className={`${styles.title} group-hover:text-white sm:group-hover:mr-4 sm:group-hover:translate-x-4`}
        >
          {title}
        </div>
        <div className={`${styles.line} group w-[calc(100%)]`}></div>
        <div
          className={`${styles.date} group-hover:text-white sm:group-hover:ml-4 sm:group-hover:-translate-x-4`}
        >
          {format(date, "LLLL d, yyyy")}
        </div>
      </div>
    </Link>
  );
}
