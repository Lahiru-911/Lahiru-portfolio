"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gray-300 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="hidden md:block absolute   ">
        <motion.img
          src="/lk.png"
          alt="Lahiru Kavinda"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" sha"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-5 right-10 flex space-x-6 text-white text-lg">
        <a href="#work" className="hover:underline">
          Work
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>

      {/* Text Content */}
      <div className="absolute right-10 text-center md:text-left text-black max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-9xl font-bold tracking-tight"
        >
          LAHIRU KAVINDA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-4xl font-light  mt-4"
        >
          Freelance Designer & Developer
        </motion.p>
      </div>

      {/* Floating Location */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute left-5 bottom-10 bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2"
      >
        <span>
          Located <br />
          in Sri Lanka
        </span>
        <span className="text-xl">🌍</span>
      </motion.div>
    </div>
  );
}
