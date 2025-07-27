import React from "react";
import img from "../assets/Monu-2.png";

function About() {
  return (
    <div className="w-full about dark:bg-gray-800">
      <div className="w-4/5 mx-auto py-10 flex flex-row">
        <div className="basis-1/2 p-10">
          <h3 className="text-5xl font-extrabold my-2 py-2 dark:text-white">
            Hi, I'm <p className="text-amber-600">Krunal Jumde</p>
          </h3>
          <h4 className="text-2xl my-2 py-2 dark:text-white">Full Stack Developer</h4>
          <p className="font-mono my-2 py-2 dark:text-white">
            I’m a passionate Full Stack Developer with expertise in Java, Spring
            Boot, MySQL, and modern frontend technologies like React,
            JavaScript, and Node.js. I build scalable, efficient web
            applications and love solving real-world problems through clean,
            maintainable code.
          </p>

          <button
            className="px-2 py-2 mx-2 rounded font-bold"
            style={{ backgroundColor: "#ffcb77" }}
          >
            Download Resume
          </button>
          <button
            className="px-2 py-2 mx-2 rounded font-bold"
            style={{ backgroundColor: "#ffcb77" }}
          >
            Contact Me
          </button>
        </div>
        <div className="basis-1/2 p-10">
          <div className="rounded-full mx-auto border-black max-w-2/3 max-h-2/3 min-w-3/5">
            <img src={img} alt="krunal-image" className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
