import React from "react";

function ProjectCard({ imgUrl, projectName }) {
  return (
    <div className="max-w-xs bg-[white] border border-gray-200 rounded-lg shadow-sm
     dark:bg-gray-700 dark:border-gray-700">
      <div className="p-4">
        <a href="#" className="">
          <img className="rounded-sm" src={imgUrl} alt="dukaan-project-img" />
        </a>
      </div>
      <div className="p-4">
        <a href="#">
          <h4 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {projectName}
          </h4>
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visit App
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
