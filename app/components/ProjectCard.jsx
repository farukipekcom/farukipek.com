import React from "react";
import Link from "next/link";
export default function PostCard({ title, category }) {
  return (
    <Link href="#" className="project-card group">
      <div className="project-card-container">
        <div className="project-card-title">{title}</div>
        <div className="project-card-category">{category}</div>
      </div>
    </Link>
  );
}
