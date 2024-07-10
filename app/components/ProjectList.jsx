import React from "react";
import ProjectCard from "./ProjectCard";
export default function PostList() {
  return (
    <div className="project-lists">
      <ProjectCard title="Lorem ipsum" category="Side Project" />
      <ProjectCard title="Lorem ipsum" category="Wordpress" />
      <ProjectCard title="Lorem ipsum" category="Development" />
      <ProjectCard title="Lorem ipsum" category="Side Project" />
      <ProjectCard title="Lorem ipsum" category="Wordpress" />
      <ProjectCard title="Lorem ipsum" category="Development" />
      <ProjectCard title="Lorem ipsum" category="Side Project" />
      <ProjectCard title="Lorem ipsum" category="Wordpress" />
    </div>
  );
}
