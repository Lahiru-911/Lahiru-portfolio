"use client";
import Image from "next/image";
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
            "Leading test automation and performance testing for enterprise
            applications.Lorem ipsum is for people who are too lazy to write
            copy. But we are not. Here are some more example of beautiful
            designs I built."
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
          <p className="text-white text-xs md:text-base font-light italic">
            {" "}
            "Leading test automation and performance testing for enterprise
            applications.Lorem ipsum is for people who are too lazy to write
            copy. But we are not. Here are some more example of beautiful
            designs I built."
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
            "Leading test automation and performance testing for enterprise
            applications.Lorem ipsum is for people who are too lazy to write
            copy. But we are not. Here are some more example of beautiful
            designs I built."
          </p>
        </div>
      ),
    },
    {
      title: "2006 Dec - 2019 Aug",
      content: (
        <div className="">
          <h1 className="text-white text-lg md:text-3xl font-semibold mb-0 md:mb-1">
            School Student
          </h1>
          <h3 className="text-gray-400 text-sm md:text-lg font-medium mb-2 md:mb-3 uppercase">
            Kingswood College Kandy
          </h3>
          <p className="text-white text-xs md:text-base font-light italic">
            {" "}
            "Leading test automation and performance testing for enterprise
            applications.Lorem ipsum is for people who are too lazy to write
            copy. But we are not. Here are some more example of beautiful
            designs I built."
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
