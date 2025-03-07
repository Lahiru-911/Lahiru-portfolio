"use client";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Content = () => {
  return (
    <footer className="bg-black text-white py-6 rounded-t-3xl h-full w-full">
      <div className="px-6 md:px-16 lg:px-20">
        <div className="max-w-full mx-auto text-left">
          {/* === Header Section === */}
          <div className="hidden md:block">
            <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-widest mb-1">
              INTERESTED IN LEARNING MORE?
            </h2>
            <Link
              href="/contact"
              className="flex items-center justify-start space-x-1 mb-5 hover:text-blue-500"
            >
              <h1 className="font-radley text-3xl md:text-5xl font-bold">
                Connect with me
              </h1>
              <RiArrowRightUpLine className="text-2xl md:text-5xl" />
            </Link>
          </div>

          {/* === Links Section === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 md:pt-4 ">
            {/* Navigation Links */}
            <div>
              <h3 className="font-bold mb-3 border-b border-gray-50">
                NAVIGATION
              </h3>
              <ul className="space-y-1 md:space-y-4 font-light md:text-lg">
                {[
                  { name: "About Me", link: "/" },
                  { name: "Projects", link: "/projects" },
                  { name: "Contact", link: "/contact" },
                  { name: "Skills", link: "/allthree" },
                  { name: "Experience", link: "/allthree" },
                  { name: "Education", link: "/allthree" },
                  { name: "Blog", link: "/blog" },
                ].map((item) => (
                  <li key={item.name} className="cursor-pointer">
                    <Link
                      href={item.link}
                      className="text-white hover:text-gray-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold mb-3 border-b border-gray-50">
                SOCIALS
              </h3>
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
                    className="cursor-pointer flex items-center gap-2 group"
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

            {/* Contact Links */}
            <div>
              <h3 className="font-bold mb-3 border-b border-gray-50">
                CONTACT
              </h3>
              <ul className="space-y-1 md:space-y-4 font-light md:text-lg">
                {[
                  { name: "Email", link: "mailto:lahiruxk@gmail.com" },
                  { name: "Phone", link: "tel:+94775788667" },
                  { name: "Location", link: "https://www.google.com/maps" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="cursor-pointer hover:text-gray-400"
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

          {/* === Copyright Section === */}
          <div className="flex items-center justify-center text-white text-xs md:text-sm mt-5">
            <span className="flex-1 border-t border-white"></span>
            <span className="px-1 md:px-2">
              © 2025 Lahiru Kavinda. All Rights Reserved.
            </span>
            <span className="flex-1 border-t border-white"></span>
          </div>
        </div>
      </div>

      {/* === Footer Branding & Scroll to Top Button === */}
      <div className="grid grid-cols-12 grid-flow-row md:grid-flow-row">
        {/* Name Branding */}
        <div className="col-span-11 flex items-center justify-center">
          <h1 className="text-white font-bold text-[15vw] leading-none tracking-wide font-hedvig">
            L A H I R U
          </h1>
        </div>

        {/* Scroll to Top Button */}
        <div className="col-span-1 flex justify-center items-end pr-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 z-50 shadow-2xl ring-1 ring-gray-900/10 bg-gray-700 hover:bg-gray-500 text-white p-3 rounded-full transition"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Content;

"use client";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Content = () => {
  return (
    <div>
<footer>
  
</footer>

    </div>
  )
}

export default Content
