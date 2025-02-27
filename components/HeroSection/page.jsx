"use client";
import { motion } from "framer-motion";
import MagnetButton from "../MagnetButton/page";
import Link from "next/link";
import WordsMarquee from "../WordsMarquee/page";
import { FaTerminal } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen md:rounded-b-3xl shadow-2xl ring-1 ring-gray-900/10 bg-[#999D9E] flex items-end md:items-center justify-center overflow-hidden ">
      {/* Background */}
      <div className="absolute bottom-0 inset-x-0 flex justify-center md:justify-end md:right-10">
        <motion.img
          src="/meg.webp"
          alt="Lahiru Kavinda"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" max-w-[550px] xl:max-w-[680px]"
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
      <div className="flex flex-col justify-end items-start gap-10 absolute inset-x-0 left-5 lg:left-16 text-center md:text-left text-white bottom-16 md:bottom-1/3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col justify-center items-start"
        >
          <FaTerminal className="text-3xl md:text-4xl" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-normal mt-4 text-start md:w-11/12 lg:w-full"
          >
            Software <br/>Engineer & Web Developer
          </motion.p>
        </motion.div>
        <div>
          <Link href="/contact">
            <MagnetButton />
          </Link>
        </div>
      </div>

      <div className="absolute z-20 bottom-2 ">
        <WordsMarquee />
      </div>

      {/* Floating Location */}
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
}
