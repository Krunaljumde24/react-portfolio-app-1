import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="w-full projects">
      <div className="w-4/5 mx-auto py-10">
        <h2 className="text-3xl font-bold text-center pb-10">Projects</h2>

        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
