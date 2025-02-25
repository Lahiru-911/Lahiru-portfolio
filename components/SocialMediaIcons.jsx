"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function SocialMediaIcons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-2/3 right-4 flex flex-col items-center gap-3 z-50">
      {/* Social Icons - Smooth Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col items-center gap-3"
      >
        {[
          { icon: <FaFacebookF />, color: "bg-blue-600", link: "#" },
          { icon: <FaWhatsapp />, color: "bg-green-500", link: "#" },
          { icon: <FaInstagram />, color: "bg-pink-500", link: "#" },
          { icon: <FaLinkedinIn />, color: "bg-blue-700", link: "#" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-full shadow-lg text-white ${item.color} transition-all duration-300 hover:shadow-2xl`}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Floating Action Button (FAB) */}
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Fab
          size="medium"
          color="primary"
          aria-label="toggle"
          className="shadow-xl backdrop-blur-md bg-opacity-70"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <AddIcon />}
        </Fab>
      </motion.div>
    </div>
  );
}
