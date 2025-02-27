"use client";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

const Content = () => {
  return (
    <footer className="bg-black text-white min-h-screen py-6 px-6 md:px-16 lg:px-20 rounded-t-3xl">
      <div className="max-w-full mx-auto text-left">
        {/* First Text Section */}
        <div className=" hidden md:block">
          <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-widest mb-1">
            INTERESTED IN LEARNING MORE?
          </h2>
          <Link
            href={"/contact"}
            className="flex items-center justify-start space-x-1 mb-5 hover:text-blue-500"
          >
            <h1 className="text-3xl md:text-5xl font-bold">Connect with me</h1>
            <RiArrowRightUpLine className="text-2xl md:text-5xl" />
          </Link>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 md:pt-4">
          <div>
            <h3 className="font-bold mb-3 border-b border-gray-50">
              NAVIGATION
            </h3>
            <ul className="space-y-1 md:space-y-4 font-light md:text-lg">
              {[
                { name: "About Me", link: "/" },
                { name: "Projects", link: "/projects" },
                { name: "Contact", link: "/contact" },
                { name: "Skills", link: "/skills" },
                { name: "Experience", link: "/experience" },
                { name: "Education", link: "/education" },
                { name: "Blog", link: "/blog" },
              ].map((item) => (
                <li key={item.name} className="cursor-pointer">
                  <a
                    href={item.link}
                    className="text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 border-b border-gray-50">SOCIALS</h3>
            <ul className="space-y-1 md:space-y-4 font-light md:text-lg">
              {[
                { name: "LinkedIn", link: "https://www.linkedin.com" },
                { name: "Facebook", link: "https://www.facebook.com" },
                { name: "Instagram", link: "https://www.instagram.com" },
                { name: "WhatsApp", link: "https://wa.me/" },
                { name: "GitHub", link: "https://github.com" },
                { name: "Behance", link: "https://www.behance.net" },
                { name: "YouTube", link: "https://www.youtube.com" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:text-gray-400 cursor-pointer flex items-center gap-2 group"
                >
                  <a
                    href={item.link}
                    className="text-white flex items-center gap-1 hover:text-blue-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                    <RiArrowRightUpLine className="hidden group-hover:inline-block transition-all text-lg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 border-b border-gray-50">CONTACT</h3>
            <ul className="space-y-1 md:space-y-4 font-light md:text-lg">
              {[
                { name: "Email", link: "mailto:lahiruxk@gmail.com" },
                { name: "Phone", link: "tel:+94775788667" },
                { name: "Location", link: "https://www.google.com/maps" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="hover:text-gray-400 cursor-pointer"
                >
                  <a
                    href={item.link}
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center text-white text-xs md:text-sm mt-5">
          <span className="flex-1 border-t border-white"></span>
          <span className=" px-1 md:px-2">
            © 2025 Lahiru Kavinda. All Rights Reserved.
          </span>
          <span className="flex-1 border-t border-white"></span>
        </div>

        <div className="w-full bg-black py-4 relative flex justify-center items-center">
          <h1 className="text-white font-bold text-[15vw] leading-none tracking-widest">
            LAHIRU
          </h1>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-4 bottom-4 bg-gray-700 hover:bg-gray-500 text-white p-2 rounded-full transition"
          >
            ⬆
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Content;

