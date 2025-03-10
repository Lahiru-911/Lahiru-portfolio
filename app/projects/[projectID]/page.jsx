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
      {/* <Head>
        <title>{project.projectTitle} - Portfolio</title>
        <meta name="description" content={project.shortSummary} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yourwebsite.com/project/${projectId}`} />
        <meta property="og:title" content={project.projectTitle} />
        <meta property="og:description" content={project.shortSummary} />
        <meta property="og:image" content={project.projectCoverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.projectTitle} />
        <meta name="twitter:description" content={project.shortSummary} />
        <meta name="twitter:image" content={project.projectCoverImage} />
      </Head> */}

      <div className="bg-[#eff5ff] max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8 py-8 shadow-xl rounded-xl">
        <h1 className="text-left text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-800 leading-10">
          {project.projectTitle}
          <br />
          <span className="text-lg sm:text-xl md:text-2xl font-normal text-gray-600">{project.shortSummary}</span>
        </h1>

        {/* Thumbnail */}
        <div className="relative w-full overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 mb-6">
          <Image
            src={project.projectCoverImage}
            alt="Cover image for project"
            width={1200}
            height={800}
            className="rounded-xl object-contain"
          />
        </div>

        {/* Project Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">{project.detailedProjectDescription}</p>
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
            {project.techStack.map((tech, index) => (
              <li key={index} className="bg-white rounded-lg shadow p-3 text-center">{tech}</li>
            ))}
          </ul>
        </div>

        {/* Screenshots Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
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
        </div>

        {/* Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {project.projectFeatures.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-12">
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {project.deployLink && (
              <a
                href={project.deployLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-center text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-300"
              >
                Visit Live Project
              </a>
            )}
            <div className="flex gap-4">
              {project.repositoryLinks?.frontend && (
                <a
                  href={project.repositoryLinks.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition duration-300"
                >
                  Frontend Code
                </a>
              )}

              {project.repositoryLinks?.backend && (
                <a
                  href={project.repositoryLinks.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-center text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition duration-300"
                >
                  Backend Code
                </a>
              )}
            </div>
          </div>

          {/* Go Back Button */}
          <Link href="/projects">
            <button className="px-6 py-3 border border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition duration-300">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
