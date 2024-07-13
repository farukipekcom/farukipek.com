import React from "react";
import Link from "next/link";
export default function ProjectCard({ title, category, link, keywords }) {
  return (
    <Link href={link} target="_blank" className="project-card group">
      <div className="project-card-container">
        <div className="project-card-title">
          {title}
          <span className="project-card-category">{category}</span>
        </div>
        <div className="project-card-keywords">{keywords}</div>
      </div>
    </Link>
  );
}
