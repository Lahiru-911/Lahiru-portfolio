"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-[#2b2a2a] border-b border-gray-700">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-2 text-white">
          {/* Contact Info */}
          <div className="flex items-center space-x-3 text-sm">
            <a
              href="mailto:lahiruxk@gmail.com"
              className="hover:underline hover:text-blue-500"
            >
              lahiruxk@gmail.com |
            </a>
            <a
              href="tel:+94775788667"
              className="hover:underline hover:text-blue-500"
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
              <button className="relative p-1 rounded-full bg-white text-[#0081FB] isolation-auto z-10 border-2 border-[#0081FB] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-[#0081FB] before:transition-all before:duration-700 before:hover:w-full before:z-[-1] hover:text-white before:hover:rounded-full before:rounded-full overflow-hidden transition-all duration-500 ease-in-out text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg 2xl:text-base font-inter font-normal">
                Contact Info
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
            {[
              { name: "Home", path: "/" },
              { name: "Company", path: "/company" },
              { name: "Team", path: "/team" },
              { name: "Features", path: "/features" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-blue-600 hover:underline transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (Slide Down) */}
        <div
          className={`md:hidden transition-transform transform ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-gray-100 shadow-md`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-900 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Company", path: "/company" },
              { name: "Team", path: "/team" },
              { name: "Features", path: "/features" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block py-2 hover:text-blue-600 hover:underline transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
