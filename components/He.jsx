"use client"; // Required for animations in Next.js App Router
import { motion } from "framer-motion";
import Image from "next/image";

const He = () => {
  return (
    <div className="min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 bg-[#999D9E] overflow-hidden relative">
      <Image
        src="/me11.webp" // Ensure the image path is correct
        alt="Image of me" // A more descriptive alt text
        fill // Replaces layout="fill" in Next.js 13+
        style={{ objectFit: "cover" }} // Ensures the image covers the container without stretching
        className="absolute inset-0" // Positions the image absolutely to fill the container
      />
    </div>
  );
};

export default He;


    // <div className="relative w-full min-h-screen flex items-center justify-center">
    //   {/* Optimized Background Image */}
    //   <Image
    //     src="/me11.webp" // Replace with your actual image path
    //     alt="Hero Background"
    //     layout="fill"
    //     objectFit="cover"
    //     quality={90} // Optimized for performance
    //     priority
    //     className="absolute inset-0"
    //   />

    //   {/* Content with animations */}
    //   {/* <motion.div
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8, ease: "easeOut" }}
    //     className="relative z-10 text-center text-white px-6"
    //   >
    //     <h1 className="text-4xl md:text-6xl font-extrabold">
    //       Welcome to My Portfolio
    //     </h1>
    //     <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
    //       Showcasing my skills, experience, and projects with a modern,
    //       professional touch.
    //     </p>
    //     <div className="mt-6">
    //       <motion.button
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //         className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition shadow-lg"
    //       >
    //         Explore More
    //       </motion.button>
    //     </div>
    //   </motion.div> */}
    // </div>
//   );
// };

// export default He;
