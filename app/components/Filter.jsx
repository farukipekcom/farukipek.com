"use client";
import React, { useState } from "react";

export default function Filter({ posts, category, setCategory }) {
  const Tags = posts.map((item) => {
    return item.post_category;
  });
  return (
    <div className="tags">
      <div
        className={`tag ${"ALL" === category ? "!border-secondary bg-gray" : ""}`}
        key="id"
        onClick={() => setCategory("All")}
      >
        All
      </div>
      {Tags.map((item) => {
        return (
          <div
            className={`tag ${item === category ? "!border-secondary bg-gray" : ""}`}
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
