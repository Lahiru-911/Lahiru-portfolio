"use client";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex justify-center p-5">
      <div className="rounded-3xl bg-[#706f6f] w-full  h-auto p-6 shadow-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Hey! Tell us all the
              <br />
              <span className="text-[#0081FB]">things</span>
            </h1>
            <p className="mb-4 text-xs font-normal sm:text-sm lg:text-base">
              Give us a few details and we’ll offer the best solution.
            </p>
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
