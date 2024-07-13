import React from "react";
import ProjectCard from "./ProjectCard";
import { createClient } from "../utils/supabase/server";

export default async function ProjectList() {
  const supabase = createClient();
  const { data, error } = await supabase.from("projects").select();
  return (
    <div className="project-lists">
      {data.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            link={project.project_link}
            title={project.project_name}
            category={project.project_category}
            keywords={project.project_keywords}
          />
        );
      })}
    </div>
  );
}
