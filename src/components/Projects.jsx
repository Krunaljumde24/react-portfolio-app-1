import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import dukaan from "../assets/dukaan-project.png";
import ecomm from "../assets/ecomm-project.png";
import cp from "../assets/customer-portal-project.png";
import fitness from "../assets/fitness-gym-project.png";

function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Dukaan - Online Grocery Shop",
      imgUrl: dukaan,
      appUrl: "#",
    },
    {
      name: "Ecomm Application",
      imgUrl: ecomm,
      appUrl: "#",
    },
    {
      name: "Customer Portal",
      imgUrl: cp,
      appUrl: "https://customer-portal.hackerspace.co.in/",
    },
    {
      name: "Fitness Gym Application",
      imgUrl: fitness,
      appUrl: "#",
    },
  ]);
  return (
    <div id="projects" className="w-full bg-[#fff8f0]projects py-10">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="flex justify-center gap-4 flex-wrap mx-auto py-10">
        {projects.map((obj, id) => (
          <ProjectCard
            key={id}
            imgUrl={obj.imgUrl}
            projectName={obj.name}
            appUrl={obj.appUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
