import React from "react";
import PageTitle from "../components/PageTitle";
import PageText from "../components/PageText";
import ProjectList from "../components/ProjectList";
export default function Projects() {
  return (
    <main>
      <div className="projects-heading">
        <PageTitle>Projects</PageTitle>
        <PageText>
          Companies I’ve worked with and some side projects I’ve done.
        </PageText>
      </div>
      <div className="projects">
        <ProjectList />
      </div>
    </main>
  );
}
