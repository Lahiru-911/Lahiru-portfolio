"use client";

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
            {/* Project Card */}
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              {/* Card Header */}
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-gray-500/40"></div>

              {/* Card Content */}
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Tailwind Card
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Add more cards as needed */}
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              {/* Card Header */}
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-gray-500/40"></div>

              {/* Card Content */}
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Tailwind Card
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
