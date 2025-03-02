"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagnetButton from "../MagnetButton/page";
import { FaTerminal } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 bg-[#999D9E] flex justify-start md:items-center items-end">
        {/* === Copyright Section === */}
        <div className="absolute top-4 md:top-5 md:left-10 left-3 dm-sans-regular z-10 text-white">
          © Code by Wara.
        </div>

        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/me14.webp"
            alt="Background"
            fill
            className="absolute inset-0 object-cover md:rounded-b-3xl"
            priority
            quality={100}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="absolute z-10 flex flex-col text-white mx-5 my-3 gap-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <FaTerminal className="text-2xl md:text-4xl" />
          <h1 className="text-lg md:text-2xl dm-sans-regular">
            Software <br />
            Engineer & Web Developer
          </h1>
          <Link href="/contact">
            <div>
              <MagnetButton />
            </div>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;

//       {/* Floating Location */}
//       {/* <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="absolute left-5 bottom-10 bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
//       >
//         <span>
//           Located <br />
//           in Sri Lanka
//         </span>
//         <span className="text-xl">🌍</span>
//       </motion.div> */}
//     </div>
//   );
// }

//       {/* Words Marquee */}
//       <div className="absolute z-20 bottom-5">
//         <WordsMarquee />
//       </div>
//     </div>
//   );
// }
