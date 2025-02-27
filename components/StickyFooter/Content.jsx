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
            className="flex items-center justify-start space-x-1 mb-8 hover:text-blue-500"
          >
            <h1 className="text-3xl md:text-5xl font-bold">Connect with me</h1>
            <RiArrowRightUpLine className="text-2xl md:text-5xl" />
          </Link>
        </div>
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 md:pt-8">
          <div>
            <h3 className="font-bold mb-4 border-b border-gray-50">
              NAVIGATION
            </h3>
            <ul className="space-y-4 md:space-y-6 font-light md:text-lg">
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
            <h3 className="font-bold mb-4 border-b border-gray-50">SOCIALS</h3>
            <ul className="space-y-4 md:space-y-6 font-light md:text-lg">
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
            <h3 className="font-bold mb-4 border-b border-gray-50">CONTACT</h3>
            <ul className="space-y-4 md:space-y-6 font-light md:text-lg">
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
        
        <div className="border-t border-gray-600 mt-8 pt-4 text-sm text-gray-100 text-center">
          © 2025 Lahiru Kavinda. All Rights Reserved.
        </div>

        <div className="">
          <h1 className="text-center font-bold text-[17vw]  leading-none bottom-0 tracking-widest">
            LAHIRU
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Content;

{
  /* <div className="border-t border-gray-700 mt-6 pt-4 flex justify-between items-center">
  <p className="text-gray-400 text-sm">
    © 2025 Lahiru Kavinda. All Rights Reserved.
  </p>
  
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="bg-gray-700 hover:bg-gray-500 text-white p-2 rounded-full transition"
  >
    ⬆
  </button>
</div> */
}
