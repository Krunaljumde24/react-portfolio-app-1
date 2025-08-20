import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

import tcsLogo from "../assets/tcs-logo.png";
import education from "../assets/education.png";

function Experience() {
  return (
    <div className="w-full bg-white dark:bg-[#ffe4ba] experience">
      <div className="w-4/5 mx-auto py-10 ">
        <h2 className="text-3xl font-bold text-center pb-10">
          Work Experience & Education
        </h2>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="h-fit rounded-sm p-3 shadow-lg bg-[#ffe4ba] dark:bg-white">
                <div className="flex flex-row">
                  <div className="basis mr-2">
                    <img src={tcsLogo} alt="tcs-logo" className="w-10 flex" />
                  </div>
                  <div className="">
                    <h5 className="font-extrabold">System Engineer</h5>
                    <p className="text-xs font-black text-blue-600 align-middle">
                      Tata Consultancy Services, Nagpur
                    </p>
                    <p className="text-xs">2021 - Present</p>
                  </div>
                </div>

                <ul className="text-[14px] ml-10 list-disc ">
                  <li>
                    Designed and developed RESTful APIs and backend services
                    using Spring Boot for enterprise applications.
                  </li>
                  <li>
                    Led the development and integration of orchestration
                    services.
                  </li>
                  <li>
                    Developed integration services for seamless data exchange
                    between internal and external systems.
                  </li>
                  <li>
                    Built batch applications for bulk data processing, achieving
                    improvement in system performance and reducing processing
                    time by several hours per cycle for high-volume tasks.
                  </li>
                  <li>
                    Collaborated with cross-functional teams including frontend,
                    database, middleware, DevOps, UNIX, and networking groups to
                    deliver complex projects.
                  </li>
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="h-fit rounded-sm p-3 shadow-lg text-right bg-[#ffe4ba] dark:bg-white">
                <div className="">
                  <div className="basis">
                    <h5 className="font-extrabold">
                      Bachelors of Computer Application (BCA)
                    </h5>
                    <p className="text-xs font-black text-amber-900 align-middle">
                      Kamla Nehru College, RTMNU, Nagpur
                    </p>
                    <p className="text-xs">2018 - 2021</p>
                  </div>
                  <div className="basis ml-2">
                    <img
                      src={education}
                      alt="education-logo"
                      className="w-10 flex"
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default Experience;
