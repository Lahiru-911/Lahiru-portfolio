"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/Preloader";
import HeroSection from "@/components/HeroSection/page";
import Textparallax from "@/components/Textparallax/page";
import SocialMediaIcons from "@/components/GlobeAnimation/SocialMediaIcons";
import PerspectiveText from "@/components/PerspectiveText/PerspectiveText";
import Accordion from "@/components/Accordion/Accordion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return (
    <div>
      {/* Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <div>
          {/* Hero Section */}
          <HeroSection />

          {/* Social Media Icons */}
          <SocialMediaIcons />

          {/* About Me Section */}
          <div className="grid md:grid-cols-2 ml-4">
            <div>
              <PerspectiveText />
            </div>

            <div className="md:pt-10 m-4 md:m-6 lg:m-7 xl:m-8">
              <div className="my-1 md:my-0">
                <h1 className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl dm-sans-bold font-semibold">
                  Who I Am
                </h1>
                <p className="text-justify my-1 md:my-3 lg:my-4 w-5/6 lg:w-10/12 xl:w-3/4 text-[#808080] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl dm-sans-regular">
                  Aspiring IT professional with a strong foundation in software
                  development and technology. With experience as a
                  <span className="font-semibold text-black dm-sans-regular">
                    {" "}
                    UX/UI Designer, Software Engineer, and Web Developer,
                  </span>
                  I bring a unique blend of technical expertise and creative
                  problem-solving. Passionate about design, I strive to create
                  intuitive and visually appealing user experiences.
                  Detail-oriented and skilled in identifying and documenting
                  software issues, ensuring optimal performance and user
                  satisfaction. A proactive collaborator who works closely with
                  development teams to implement efficient, innovative solutions
                  while maintaining high-quality software standards.
                </p>

                {/* Resume Download Button */}
                <a
                  href="/Lahiru-Resume.pdf"
                  download="LahiruKavinda-Resume.pdf"
                >
                  <button className="cursor-pointer flex items-center justify-between bg-gradient-to-l from-blue-500 to-purple-600 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:from-purple-500 hover:to-blue-600 hover:scale-105 duration-500 hover:ring-1 font-mono w-[120px] mt-3">
                    Resume
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-5 h-5 animate-bounce"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Text Parallax Section */}
          <Textparallax />

          {/* Accordion Section */}
          <div className="mx-5 md:mx-20 lg:mx-24 mb-16 md:mb-24">
            <Accordion />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
              <Image
                src="/me11.webp" // Replace with the path to your image
                alt="Project Image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Card Body */}
            <div className="relative flex flex-col rounded-xl bg-gray-100 p-6 shadow-md">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-800">
                Project Title
              </h5>
              <p className="text-gray-600 text-base font-light leading-relaxed">
                A brief description of the project or details.
              </p>

              {/* Read More Button */}
              <div className="mt-auto">
                <button
                  type="button"
                  className="w-full mt-4 rounded-lg bg-blue-500 py-3 text-white font-bold uppercase shadow-md transition-all hover:bg-blue-600 focus:outline-none"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
