"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function SocialMediaIcons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/3 right-0 flex flex-col items-center gap-2 p-2 z-50">
      {/* Social Icons Container */}
      <div
        className={`flex flex-col items-center transition-all duration-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <a
          href="#"
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-500 transition-all"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="#"
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-green-500 transition-all"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="#"
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-pink-500 transition-all"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="bg-gray-900 text-white p-2 rounded-full hover:bg-blue-700 transition-all"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      {/* Toggle Button */}
      <button
        className="bg-gray-700 text-white p-2 rounded-l-lg shadow-lg hover:bg-gray-900 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "❌" : "📢"}
      </button>
    </div>
  );
}
