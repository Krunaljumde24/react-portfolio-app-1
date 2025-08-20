import React, { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "Java",
      imgFileName: "java.png",
      type: "Programming Language",
    },
    {
      name: "Spring Boot",
      imgFileName: "springboot.png",
      type: "Backend",
    },
    {
      name: "MySQL",
      imgFileName: "mysql.png",
      type: "Database",
    },
    {
      name: "HTML",
      imgFileName: "html.png",
      type: "Frontend",
    },
    {
      name: "CSS",
      imgFileName: "css3.png",
      type: "Frontend",
    },
    {
      name: "JavaScript",
      imgFileName: "javascript.png",
      type: "frontend",
    },
    {
      name: "Bootstrap 5",
      imgFileName: "bootstrap.png",
      type: "Frontend",
    },
    {
      name: "Tailwind CSS",
      imgFileName: "tailwindcss.png",
      type: "Frontend",
    },
    {
      name: "Node.Js",
      imgFileName: "nodejs.png",
      type: "Frontend",
    },
    {
      name: "React.Js",
      imgFileName: "react.png",
      type: "Frontend",
    },
    {
      name: "Express.Js",
      imgFileName: "expressjs.png",
      type: "Frontend",
    },
    {
      name: "Git",
      imgFileName: "git.png",
      type: "other",
    },
    {
      name: "Vite",
      imgFileName: "vite.png",
      type: "other",
    },
    {
      name: "AWS",
      imgFileName: "aws.png",
      type: "frontend",
    },
  ]);

  return (
    <div className="w-full bg-orange-200 dark:bg-emerald-950">
      <div className="w-4/5 mx-auto py-10">
        <h2 className="text-3xl font-bold text-center pb-10 dark:text-white">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((item, index) => {
            let imgPath = `/tech/${item.imgFileName}`;
            return (
              <div
                key={index}
                className="w-25 h-25 rounded-lg m-2 p-2 bg-white shadow-lg transition-transform duration-200 hover:scale-120"
              >
                <img src={imgPath} alt="logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
