"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation"; // Use useParams from next/navigation
import { db } from "../../../utils/firebaseConfig"; // Ensure the path is correct
import { ref, get } from "../../../utils/firebaseConfig"; // Import necessary methods

const SingleProject = () => {
  const { projectID } = useParams(); // Get projectId from the URL using useParams from next/navigation
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project data based on project ID
  useEffect(() => {
    if (projectID) {
      const projectRef = ref(db, `projects/${projectID}`);
      get(projectRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProject(snapshot.val());
          } else {
            setError("Project not found");
          }
        })
        .catch((err) => {
          setError("Error fetching data");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [projectID]);

  // Show loading if data is still being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Show error message if there was an issue fetching data
  if (error) {
    return <p>{error}</p>;
  }

  // If no project data is found
  if (!project) {
    return <p>No project data found.</p>;
  }

  return (
    <>

<div className="bg-[#eff5ff] max-w-7xl mx-auto my-12 px-6 sm:px-8 lg:px-10 py-12 shadow-xl rounded-2xl border border-gray-200">
  <h1 className="text-left text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 text-gray-900 tracking-tight">
    {project.projectTitle}
  </h1>

  {/* Thumbnail */}
  <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 shadow-xl mb-10">
    <Image
      src={project.projectCoverImage}
      alt="Cover image for project"
      width={1200}
      height={800}
      className="rounded-xl object-cover transition-transform transform hover:scale-105"
    />
  </div>

  {/* Project Overview */}
  <section className="mb-14">
    <h2 className="text-3xl font-semibold text-gray-900 mb-5">Project Overview</h2>
    <p className="text-lg text-gray-700 leading-relaxed">{project.detailedProjectDescription}</p>
  </section>

  {/* Technologies Used */}
  <section className="mb-14">
    <h2 className="text-3xl font-semibold text-gray-900 mb-5">Technologies Used</h2>
    <ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 gap-2 md:gap-6 text-gray-700">
      {project.techStack.map((tech, index) => (
        <li key={index} className="bg-gray-50 border border-gray-300 rounded-3xl shadow-sm py-1 px-1 text-center hover:bg-gray-200 transition duration-300">
          {tech}
        </li>
      ))}
    </ul>
  </section>

  {/* Screenshots Section */}
  <section className="mb-14">
    <h2 className="text-3xl font-semibold text-gray-900 mb-5">Screenshots</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {project.screenshots.map((screenshot, index) => (
        <div key={index} className="overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-300">
          <Image
            src={screenshot}
            alt={`Screenshot ${index + 1}`}
            width={1200}
            height={800}
            className="rounded-xl object-cover"
          />
        </div>
      ))}
    </div>
  </section>

  {/* Features */}
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-gray-900 mb-5">Features</h2>
    <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
      {project.projectFeatures.map((feature, idx) => (
        <li key={idx} className="leading-relaxed">{feature}</li>
      ))}
    </ul>
  </section>

  {/* Links */}
  <div className="flex flex-col sm:flex-row justify-between gap-8 mt-14">
    <div className="flex flex-col gap-6 w-full sm:w-auto">
      {project.deployLink && (
        <a
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md transition duration-300"
        >
          Visit Live Project
        </a>
      )}
      <div className="flex gap-6">
        {project.repositoryLinks?.frontend && (
          <a
            href={project.repositoryLinks.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md transition duration-300"
          >
            Frontend Code
          </a>
        )}

        {project.repositoryLinks?.backend && (
          <a
            href={project.repositoryLinks.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md transition duration-300"
          >
            Backend Code
          </a>
        )}
      </div>
    </div>

    {/* Go Back Button */}
    <Link href="/projects">
      <button className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg shadow-md transition duration-300">
        Go Back
      </button>
    </Link>
  </div>
</div>


    </>
  );
};

export default SingleProject;
