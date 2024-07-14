import React from "react";
import Link from "next/link";
import { format } from "date-fns";

export default function PostCard({ title, date, slug }) {
  return (
    <Link
      href={process.env.NEXT_PUBLIC_URL + "blog/" + slug}
      className="post-card group"
    >
      <div className="post-card-container">
        <div className="post-card-title">{title}</div>
        <div className="line"></div>
        <div className="post-card-date">{format(date, "LLLL d, yyyy")}</div>
      </div>
    </Link>
  );
}
