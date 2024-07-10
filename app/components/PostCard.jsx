import React from "react";
import Link from "next/link";
export default function PostCard({ title, date }) {
  return (
    <Link href="#" className="post-card group">
      <div className="post-card-container">
        <div className="post-card-title">{title}</div>
        <div className="post-card-date">{date}</div>
      </div>
    </Link>
  );
}
