"use client";
import { useState, useEffect } from "react";

const InputField = ({ placeholder, type, icon, name, value, onChange }) => (
  <div className="flex items-center w-full h-[40px] text-white/60 bg-[#09090b] border border-white/10 rounded-lg focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 focus-within:ring-offset-[#09090b] transition-all duration-150 ease-in-out">
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="bg-transparent text-[#f4f4f5] px-3 py-1 focus:outline-none w-full"
    />
    {icon}
  </div>
);

const Contact = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    // Check if all fields are filled
    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Web3 form submission (replace with your API endpoint)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          access_key: "e86b5632-b553-48e3-9b74-f8cbe7ab19fe", // Replace with your actual Access Key
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Clear form
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form.");
    }
  };

  const icons = {
    name: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline mr-3"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline mr-3"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.34 12.34 0 0 0 .73 3.26 2 2 0 0 1-.45 2.11L8.09 10a16 16 0 0 0 6 6l1.9-1.19a2 2 0 0 1 2.11-.45 12.34 12.34 0 0 0 3.26.73A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    email: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-mail mr-3"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
        <path d="M3 7l9 6l9 -6"></path>
      </svg>
    ),
  };

  return (
    <div className="flex justify-center p-10 bg-[#121212]">
      <div className="rounded-3xl w-full h-auto p-6 shadow-lg bg-black shadow-blue-400 outline outline-1 outline-blue-600">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-white text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Hey! Tell us all the <br />
              <span className="text-[#0081FB]">things</span>
            </h1>
            <p className="text-white mb-4 text-xs font-normal sm:text-sm lg:text-base">
              Give us a few details and we’ll offer the best solution.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <InputField
                placeholder="Name"
                type="text"
                icon={icons.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <InputField
                placeholder="Contact Number"
                type="tel"
                icon={icons.phone}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <InputField
                placeholder="Email"
                type="email"
                icon={icons.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[100px] px-3 py-2 text-white bg-[#09090b] border border-white/10 rounded-lg focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] focus:outline-none transition-all duration-150 ease-in-out bg-transparent"
              ></textarea>
              {/* Hidden Access Key Field */}
              <input
                type="hidden"
                name="access_key"
                value="e86b5632-b553-48e3-9b74-f8cbe7ab19fe"
              />
              <button type="submit" className="group relative w-full">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                <span className="relative flex justify-center items-center rounded-2xl bg-black px-10 py-3 leading-none">
                  <span className="text-sm md:text-base font-medium text-white uppercase">
                    Submit
                  </span>
                </span>
              </button>
            </form>
          </div>

          {/* Right Section (Map Box) */}
          <div className="hidden sm:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15844.202952738427!2d79.858473!3d6.884526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b001c3e29e3%3A0xe6643f6b87d2e1ed!2sResidue%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1729247413914!5m2!1sen!2slk"
              className="w-full h-full rounded-[20px]"
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
