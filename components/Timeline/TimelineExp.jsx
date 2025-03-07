"use client";

import React from "react";
import { Timeline } from "./Timeline";

export function TimelineExp() {
  const data = [
    {
      title: "2024 Aug - Present",
      content: (
        <div className="mb-28">
          <h1 className="text-white text-lg md:text-3xl font-semibold mb-0 md:mb-1">
            Intern Software Engineer
          </h1>
          <h3 className="text-gray-400 text-sm md:text-lg font-medium mb-2 md:mb-3">
            Residue Solutions (Pvt) Ltd
          </h3>
          <p className="text-white text-xs md:text-base font-light italic text-justify">
            {" "}
            "Currently serving as an Intern Software Engineer at Residue
            Solutions (Pvt) Ltd, where I am gaining hands-on experience in
            software development and system design. Contributing to the
            development, testing, and maintenance of software applications,
            while collaborating with senior engineers to solve complex technical
            problems. Gaining practical exposure to coding languages, debugging,
            and project management in a fast-paced, real-world environment."
          </p>
        </div>
      ),
    },
    {
      title: "2021 May - 2025 Feb",
      content: (
        <div className="mb-28">
          <h1 className="text-white text-lg md:text-3xl font-semibold mb-0 md:mb-1">
            Undergraduate Student
          </h1>
          <h3 className="text-gray-400 text-sm md:text-lg font-medium mb-2 md:mb-3 uppercase">
            Rajarata University of Sri Lanka
          </h3>
          <p className="text-white text-xs md:text-base font-light italic text-justify">
            {" "}
            "Pursued a Bachelor's degree in Information Systems at Rajarata
            University of Sri Lanka, gaining comprehensive knowledge in
            information technology and business systems. Actively involved in
            projects and coursework focused on data management, software
            development, and system analysis. Developed strong analytical,
            technical, and problem-solving skills to contribute effectively to
            the rapidly evolving field of information systems."
          </p>
        </div>
      ),
    },
    {
      title: "2020 Nov - 2021 May",
      content: (
        <div className="mb-28">
          <h1 className="text-white text-lg md:text-3xl font-semibold mb-0 md:mb-1">
            Junior Industrial Engineer
          </h1>
          <h3 className="text-gray-400 text-sm md:text-lg font-medium mb-2 md:mb-3 uppercase">
            SUMITHRA GARMENTS (PVT) LTD
          </h3>
          <p className="text-white text-xs md:text-base font-light italic">
            {" "}
            "Worked as a Junior Industrial Engineer at Sumithra Garments (PVT)
            Ltd, contributing to process optimization, efficiency improvements,
            and cost reduction in garment manufacturing operations. Assisted in
            analyzing production workflows, implementing lean manufacturing
            techniques, and ensuring quality control standards were met.
            Collaborated with cross-functional teams to enhance operational
            performance and support continuous improvement initiatives"
          </p>
        </div>
      ),
    },
    {
      title: "2006 Dec - 2019 Aug",
      content: (
        <div className="mb-28">
          <h1 className="text-white text-lg md:text-3xl font-semibold mb-0 md:mb-1">
            School Student
          </h1>
          <h3 className="text-gray-400 text-sm md:text-lg font-medium mb-2 md:mb-3 uppercase">
            Kingswood College Kandy
          </h3>
          <p className="text-white text-xs md:text-base font-light italic text-justify">
            {" "}
            "Completed Ordinary Level (O/L) and Advanced Level (A/L) studies at
            Kingswood College Kandy, balancing academic excellence with active
            participation in extracurricular activities. As a member of the
            Prefect Court, took on leadership responsibilities, fostering
            discipline, teamwork, and event management skills while contributing
            to the school’s vibrant community."
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
