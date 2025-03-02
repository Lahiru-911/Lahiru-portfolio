// "use client";
// import { motion } from "framer-motion";
// import MagnetButton from "../MagnetButton/page";
// import Link from "next/link";
// import WordsMarquee from "../WordsMarquee/page";
// import { FaTerminal } from "react-icons/fa";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 bg-[#999D9E] flex items-end md:items-center justify-center overflow-hidden ">
//       {/* Navbar */}
//       <nav className="absolute top-5 right-10 flex space-x-6 text-white text-lg">
//         <a href="#work" className="hover:underline">
//           Work
//         </a>
//         <a href="#about" className="hover:underline">
//           About
//         </a>
//         <a href="#contact" className="hover:underline">
//           Contact
//         </a>
//       </nav>
//       <div>
//         {/* Background */}
//         <div className="absolute bottom-0 inset-x-0 flex justify-center md:justify-end md:right-10 xl:right-28">
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <Image
//               src="/meg.webp"
//               alt="Lahiru Kavinda"
//               width={680}
//               height={800}
//               className="w-[80%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] h-auto object-contain"
//               priority
//             />
//           </motion.div>
//         </div>

//         {/* Text Content */}
//         <div className="flex flex-col justify-end items-start gap-10 absolute inset-x-0 left-5 lg:left-16 text-center md:text-left text-white bottom-16 md:bottom-1/3">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="flex flex-col justify-center items-start"
//           >
//             <FaTerminal className="text-3xl md:text-4xl" />
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//               className="text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-start md:w-11/12 lg:w-full"
//             >
//               Software <br />
//               Engineer & Web Developer
//             </motion.p>
//           </motion.div>

//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 1 }}
//             >
//               <Link href="/contact">
//                 <MagnetButton />
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute z-20 bottom-2 ">
//         <WordsMarquee />
//       </div>

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

// "use client";
// import { motion } from "framer-motion";
// import MagnetButton from "../MagnetButton/page";
// import Link from "next/link";
// import WordsMarquee from "../WordsMarquee/page";
// import { FaTerminal } from "react-icons/fa";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 bg-[#999D9E] flex items-end md:items-center justify-center overflow-hidden">
//       {/* Background & Image */}
//       <div className="absolute bottom-0 inset-x-0 flex justify-center md:justify-end md:right-10 xl:right-28">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="relative w-full h-auto"
//         >
//           <Image
//             src="/me14.webp"
//             alt="Lahiru Kavinda"
//             width={1680}
//             height={1800}
//             className="w-full h-auto object-contain rounded-full"
//             priority
//           />
//         </motion.div>
//       </div>

//       {/* Text Content */}
//       <div className="absolute inset-x-0 left-5 lg:left-16 text-white bottom-16 md:bottom-1/3 flex flex-col gap-10 text-start">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="flex flex-col items-start"
//         >
//           <FaTerminal className="text-3xl md:text-4xl" />
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 1 }}
//             className="text-2xl md:text-3xl lg:text-4xl font-normal mt-4 leading-tight"
//           >
//             Software <br />
//             Engineer & Web Developer
//           </motion.p>
//         </motion.div>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           <Link href="/contact">
//             <div>
//               <MagnetButton />
//             </div>
//           </Link>
//         </motion.div>
//       </div>

//       {/* Words Marquee */}
//       <div className="absolute z-20 bottom-5">
//         <WordsMarquee />
//       </div>
//     </div>
//   );
// }

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
        <motion.div className="absolute z-10 flex flex-col text-white mx-5 my-3 gap-4 "
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
