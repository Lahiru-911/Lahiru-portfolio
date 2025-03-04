"use client";
import React from "react";
import Image from "next/image";

// Sample project data array
const projects = [
  {
    title: "Tailwind Card",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.",
    technologies: ["React", "TailwindCSS", "Node.js"],
    imageSrc: "/me11.webp", // Replace with the path to your image
    demoLink: "#", // Replace with the live demo link
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper.",
    technologies: ["Vue", "CSS", "Express"],
    imageSrc: "/me11.webp", // Replace with the path to your image
    demoLink: "#", // Replace with the live demo link
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper.",
    technologies: ["Vue", "CSS", "Express"],
    imageSrc: "/me11.webp", // Replace with the path to your image
    demoLink: "#", // Replace with the live demo link
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper.",
    technologies: ["Vue", "CSS", "Express"],
    imageSrc: "/me11.webp", // Replace with the path to your image
    demoLink: "#", // Replace with the live demo link
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper.",
    technologies: ["Vue", "CSS", "Express"],
    imageSrc: "/me11.webp", // Replace with the path to your image
    demoLink: "#", // Replace with the live demo link
  },
  {
    title: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper.",
    technologies: ["Vue", "CSS", "Express"],
    imageSrc: "/me11.webp", // Replace with the path to your image
    demoLink: "#", // Replace with the live demo link
  },
];

const ProjectCard = () => {
  return (
    <>
      <h1 className="mx-6 md:mx-12 mb-14 p-3 text-3xl font-semibold  md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 text-center md:text-left tracking-wider duration-500">
        Featured Projects
      </h1>

      {/* Project Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-24 md:gap-20 m-6 md:m-12">
        {/* Map over the projects array */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col w-full h-full rounded-xl bg-gray-50 text-gray-700 shadow-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            {/* Project Card Header Section */}
            <div className="relative mx-4 -mt-6 h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <Image
                src={project.imageSrc}
                alt={`Project Image for ${project.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Project Description Section */}
            <div className="p-6 flex-1">
              {/* Project Title */}
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {project.title}
              </h5>

              {/* Short Description */}
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {project.description}
              </p>

              {/* Technologies Used Section */}
              <div className="mt-4">
                <span className="inline-block text-xs text-gray-500">
                  Technologies:
                </span>
                <ul className="mt-2 flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="text-sm text-blue-500 font-medium">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Read More Button Section */}
            <div className="p-6 pt-0">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="cursor-pointer flex items-center justify-center bg-gradient-to-l from-blue-500 to-purple-600 px-3 py-2 rounded-full text-white tracking-wide shadow-lg hover:from-purple-500 hover:to-blue-600 hover:scale-105 duration-300 hover:ring-1 dm-sans-regular mt-4 w-auto sm:px-4 sm:py-2 md:px-5 md:py-2">
                  Explore More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
