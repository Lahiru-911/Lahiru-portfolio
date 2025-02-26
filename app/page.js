
import SocialMediaIcons from "@/components/SocialMediaIcons";
import React from "react";
import HeroSection from "@/components/HeroSection/page";
import WordsMarquee from "@/components/WordsMarquee/page";
import Textparallax from "@/components/Textparallax/page";

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SocialMediaIcons />
     
      {/* <WordsMarquee/> */}
      <Textparallax/>

    {/* Why Residue Solution */}
    <div className="grid md:grid-cols-2 m-4 md:m-6 lg:m-7 xl:m-8">
          <div>
            <h1 className="text-[#D8D8D8] text-left font-bold text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[120px] 2xl:text-[160px]">
              Why
              <br />
              Residue
              <br /> Solution
            </h1>
          </div>
          <div className="grid grid-rows-2">
            {/* First Tagline */}
            <div className="my-1 md:my-0">
              <h1 className="font-light w-full md:w-11/12 lg:w-11/12 xl:w-10/12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Our primary focus is on business
              </h1>
              <p className="text-justify my-1 md:my-3 lg:my-4 w-5/6 lg:w-10/12 xl:w-3/4 text-[#808080] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                we understand your business, we listen to you. Only then do we
                provide you technology recommendations. When we provide our
                recommendations, we pride ourselves on being superb
                communicators. We speak human! No techy complex jargon here.
              </p>
            </div>
            {/* Second Tagline */}
            <div className="my-1 md:my-3 lg:my-4">
              <h1 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                We focus on people
              </h1>
              <p className="text-justify my-1 md:my-3 lg:my-4 w-5/6 lg:w-10/12 xl:w-3/4 text-[#808080] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Your people and our own people. Technology fails when you don’t
                understand and support the people using it. And once we have all
                this in place, our focus is to become your trusted partner and
                advisor. We are in this for the long term, and your success is
                our success.
              </p>
            </div>
          </div>
        </div>



    </div>
  );
};

export default Home;
