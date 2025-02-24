"use client";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const WordsMarquee = () => {
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Small screens (sm)
        setSpeed(90);
      } else if (width < 768) {
        // Medium screens (md)
        setSpeed(120);
      } else if (width < 1024) {
        // Large screens (lg)
        setSpeed(150);
      } else {
        // Extra large screens (xl and up)
        setSpeed(200);
      }
    };

    updateSpeed();

    window.addEventListener("resize", updateSpeed);

    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
  }, []);

  return (
    <div className="my-2 sm:my-3 md:my-5 lg:my-6">
      <Marquee
        className="w-full overflow-hidden"
        speed={speed}
        loop={0}
        autoFill={true}
      >
        <h1 className="text-white mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6 2xl:mx-8 font-inter font-semibold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[14rem]">
          Lahiru Kavinda ~
        </h1>
      </Marquee>
    </div>
  );
};

export default WordsMarquee;

// import Marquee from "react-fast-marquee";
// import { useEffect, useState } from "react";

// const WordsMarquee = () => {
//   const [speed, setSpeed] = useState(90);

//   useEffect(() => {
//     const updateSpeed = () => {
//       const width = window.innerWidth;
//       if (width < 640) {
//         // Small screens (sm)
//         setSpeed(90);
//       } else if (width < 768) {
//         // Medium screens (md)
//         setSpeed(120);
//       } else if (width < 1024) {
//         // Large screens (lg)
//         setSpeed(150);
//       } else {
//         // Extra large screens (xl and up)
//         setSpeed(200);
//       }
//     };

//     updateSpeed();

//     window.addEventListener("resize", updateSpeed);

//     return () => {
//       window.removeEventListener("resize", updateSpeed);
//     };
//   }, []);

//   return (
//     <>
//       {/* Text-Tagline */}
//       <Marquee
//         className="my-2 sm:my-3 md:my-5 lg:my-6"
//         speed={speed}
//         loop={0}
//         autoFill={true}
//       >
//         <h1 className="text-[#0081FB] font-inter font-semibold mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-6 2xl:mx-8 text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] 2xl:text-[14rem] ">
//           Unlock your vision with us .
//         </h1>
//       </Marquee>
//     </>
//   );
// };

// export default WordsMarquee;
