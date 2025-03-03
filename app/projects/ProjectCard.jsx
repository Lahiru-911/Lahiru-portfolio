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
  // Add more projects as needed
];

const ProjectCard = () => {
  return (
    <>
      {/* Project Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 m-6 md:m-16">
        {/* Map over the projects array */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col w-full h-full rounded-xl bg-gray-50 text-gray-700 shadow-md transition-all duration-300 ease-in-out hover:scale-105"
          >
            {/* Project Card Header Section */}
            <div className="relative mx-4 -mt-6 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
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
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Explore More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectCard;
