"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/Preloader";
import HeroSection from "@/components/HeroSection/page";
import WordsMarquee from "@/components/WordsMarquee/page";
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
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <div>
          <HeroSection />

          <SocialMediaIcons />
          {/* <WordsMarquee /> */}

          {/* Why Residue Solution */}
          <div className="grid md:grid-cols-2 ml-4">
            <div>
              
              <PerspectiveText />
            </div>
            <div className="md:pt-10 m-4 md:m-6 lg:m-7 xl:m-8">
              {/* First Tagline */}
              <div className="my-1 md:my-0">
                <h1 className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-aeonik font-semibold">
                  Who I Am
                </h1>
                <p className="text-justify my-1 md:my-3 lg:my-4 w-5/6 lg:w-10/12 xl:w-3/4 text-[#808080] text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-aeonik">
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
              </div>
            </div>
          </div>

          <Textparallax />
          <div className="mx-5 md:mx-20 lg:mx-24 mb-16 md:mb-24 "  >
            <Accordion />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
