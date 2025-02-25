"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#323235] border-b border-gray-700">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-2 text-white">
          {/* Contact Info */}
          <div className="flex items-center space-x-3 text-sm">
            <a
              href="mailto:lahiruxk@gmail.com"
              className="hover:underline hover:text-[#8075ff]"
            >
              lahiruxk@gmail.com |
            </a>
            <a
              href="tel:+94775788667"
              className="hover:underline hover:text-[#8075ff]"
            >
              +94 77 578 8667
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/94775788667" target="_blank">
              <FaWhatsapp
                size={22}
                className="hover:text-green-500 transition"
              />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <RiFacebookCircleLine
                size={22}
                className="hover:text-blue-500 transition"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <FaInstagram
                size={22}
                className="hover:text-pink-500 transition"
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <CiLinkedin
                size={22}
                className="hover:text-blue-700 transition"
              />
            </a>
            <Link href="/">
              <button className="relative px-1  rounded-full bg-white text-[#8075ff] isolation-auto z-10 border-2 border-[#8075ff] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#8075ff] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-sm font-inter font-normal">
                +Contact Info
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-2">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-gray-900">
            Lahiru Kavinda
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
            {[{ name: "About Me", path: "/about" }, { name: "Projects", path: "/projects" }, { name: "Contact", path: "/contact" }].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-blue-600 hover:underline transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Dropdown Menu */}
            <li className="relative">
              <button
                className="hover:text-blue-600 font-medium transition"
                onClick={toggleDropdown}
              >
                More ▼
              </button>
              {isDropdownOpen && (
                <ul className="absolute text-gray-900 bg-white shadow-md space-y-4 p-2 mt-2">
                  {[{ name: "Skills", path: "/skills" }, { name: "Experience", path: "/experience" }, { name: "Education", path: "/education" }, { name: "Blog", path: "/blog" }].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="block py-2 hover:text-blue-600 hover:underline transition"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col items-center space-y-4 py-10 text-white">
          {[{ name: "About Me", path: "/about" }, { name: "Projects", path: "/projects" }, { name: "Skills", path: "/skills" }, { name: "Experience", path: "/experience" }, { name: "Education", path: "/education" }, { name: "Blog", path: "/blog" }, { name: "Contact", path: "/contact" }].map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="block py-2 hover:text-blue-600 hover:underline transition"
                onClick={toggleSidebar}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
