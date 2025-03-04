"use client";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex justify-center p-10 bg-[#121212]">
      <div className="rounded-3xl w-full h-auto p-6 shadow-lg bg-black shadow-blue-400 outline outline-1 outline-blue-600">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-white text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Hey! Tell us all the
              <br />
              <span className="text-[#0081FB]">things</span>
            </h1>
            <p className="text-white mb-4 text-xs font-normal sm:text-sm lg:text-base">
              Give us a few details and we’ll offer the best solution.
            </p>

            {/* Name Input */}
            <input
              placeholder="Name"
              type="text"
              className="w-full h-[40px] px-3 text-white bg-[#09090b] border border-white/10 rounded-lg focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
            />

            {/* Contact Number Input */}
            <input
              placeholder="Contact Number"
              type="tel"
              className="w-full h-[40px] px-3 text-white bg-[#09090b] border border-white/10 rounded-lg focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
            />

            {/* Email */}
            <div className="flex items-center w-full h-[40px] text-white/60 bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out">
              <input
                placeholder="Email"
                type="text"
                name="text"
                className="bg-transparent text-[#f4f4f5] px-3 py-1 focus:outline-none w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail mr-3"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>

            {/* Message Textarea */}
            <textarea
              placeholder="Message"
              className="w-full h-[100px] px-3 py-2 text-white bg-[#09090b] border border-white/10 rounded-lg focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
            ></textarea>
          </div>

          {/* Right Section (Map Box) */}
          <div className="hidden sm:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.202952738427!2d79.858473!3d6.884526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b001c3e29e3%3A0xe6643f6b87d2e1ed!2sResidue%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1729247413914!5m2!1sen!2slk"
              className="w-full h-[400px] rounded-[20px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
