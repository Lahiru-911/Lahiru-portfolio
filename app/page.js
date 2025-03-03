"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/Preloader";
import HeroSection from "@/components/HeroSection/page";
import WordsMarquee from "@/components/WordsMarquee/page";
import Textparallax from "@/components/Textparallax/page";
import SocialMediaIcons from "@/components/GlobeAnimation/SocialMediaIcons";
import PerspectiveText from "@/components/PerspectiveText/PerspectiveText";

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
              {/* <h1 className="text-[#D8D8D8] text-left font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[160px]">
                I'm,
                <br />
                Lahiru
                <br /> Kavinda
              </h1> */}
              <PerspectiveText />
            </div>
            <div className="grid grid-rows-2 m-4 md:m-6 lg:m-7 xl:m-8">
              {/* First Tagline */}
              <div className="my-1 md:my-0">
                <h1 className="font-light w-full md:w-11/12 lg:w-10/12 xl:w-9/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl dm-sans-bold">
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
              </div>

              {/* Second Tagline */}
              <div className="my-1 md:my-3 lg:my-4"></div>
            </div>
          </div>

          <Textparallax />
        </div>
      )}
    </div>
  );
};

export default Home;
