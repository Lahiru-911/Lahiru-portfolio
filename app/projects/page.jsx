import { ProjectParallax } from "@/components/ProjectParallax/projectparallax";
import React from "react";
import ProjectCard from "./ProjectCard";
import Head from "next/head";

const Projects = () => {
  return (
    <div className="bg-[#121212]">
      <Head>
        <title>My Projects</title>
        <meta
          name="description"
          content="Check out my latest software development projects."
        />
        <meta name="keywords" content="projects, software, React, Next.js" />
      </Head>
      <ProjectParallax />

      <ProjectCard />
      <div className="h-10" />
    </div>
  );
};

export default Projects;
