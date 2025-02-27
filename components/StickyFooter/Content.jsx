import React from "react";

const Content = () => {
  return (
    <footer className="bg-black text-white h-screen py-10 px-6 md:px-16 lg:px-24 rounded-t-3xl">
      <div className="max-w-full mx-auto text-center md:text-left">
        <h2 className="text-lg font-semibold tracking-wider mb-6">
          INTERESTED IN LEARNING MORE?
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Connect with me{" "}
          <span className="inline-block transform rotate-45">↗</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-600 pt-8">
          <div>
            <h3 className="font-bold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              {[
                "About Me",
                "Projects",
                "Skills",
                "Experience",
                "Education",
                "Blog",
              ].map((item) => (
                <li key={item} className="hover:text-gray-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SOCIALS</h3>
            <ul className="space-y-2">
              {[
                "LinkedIn",
                "Facebook",
                "Instagram",
                "WhatsApp",
                "GitHub",
                "Behance",
                "YouTube",
              ].map((item) => (
                <li key={item} className="hover:text-gray-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              {["Email", "Phone", "Location"].map((item) => (
                <li key={item} className="hover:text-gray-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-sm text-gray-400 text-center">
          © 2025 Lahiru Kavinda. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Content;
