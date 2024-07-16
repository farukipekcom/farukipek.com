"use client";
import React from "react";
import styles from "./Filter.module.css";
export default function Filter({ posts, category, setCategory }) {
  const Tags = posts.map((item) => {
    return item.post_category;
  });
  return (
    <div className={styles.tags}>
      <div
        className={`${styles.tag} ${"ALL" === category ? "!border-secondary bg-gray" : ""}`}
        key="id"
        onClick={() => setCategory("All")}
      >
        All
      </div>
      {Tags.map((item) => {
        return (
          <div
            className={`${styles.tag} ${item === category ? "!border-secondary bg-gray" : ""}`}
            key={item}
            onClick={() => setCategory(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}
