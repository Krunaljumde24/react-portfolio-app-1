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
    <div className="w-full experience">
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
              <div
                className="h-fit rounded-sm p-3 shadow-lg"
                style={{ backgroundColor: "#ffe4ba" }}
              >
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
                    Led development of 3 major web applications serving 10k+
                    users
                  </li>
                  <li>
                    Implemented microservices architecture reducing load time by
                    40%
                  </li>
                  <li>
                    Mentored 5 junior developers and conducted code reviews
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
              <div
                className="h-fit rounded-sm p-3 shadow-lg text-right"
                style={{ backgroundColor: "#ffe4ba" }}
              >
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
