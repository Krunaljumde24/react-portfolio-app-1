import React from "react";

function ProjectCard({ imgUrl, projectName, appUrl }) {
  return (
    <div
      className="max-w-xs bg-[white] border border-gray-200 rounded-lg shadow-sm
     dark:bg-gray-700 dark:border-gray-700
     transform transition-all duration-200 ease-out hover:scale-105 hover:shadow-xl
     "
    >
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
          href={appUrl}
          target={appUrl === "#" ? "" : "_blank"}
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
        {/* {console.log(appUrl === "Customer Portal")} */}
        {appUrl != "#" ? (
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">Live</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="text-sm font-medium">Not Live</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
