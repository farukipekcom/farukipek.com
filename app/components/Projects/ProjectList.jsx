import React from "react";
import ProjectCard from "./ProjectCard";
import { createClient } from "../../utils/supabase/server";
import styles from "./ProjectList.module.css";
export default async function ProjectList({ limit = "1000" }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("projects")
    .select()
    .order("id", { ascending: false })
    .range(0, limit - 1);
  return (
    <div className={styles.projects}>
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
