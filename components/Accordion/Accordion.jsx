import React, { useState } from "react";

const AccordionItem = ({
  index,
  title,
  content,
  activeIndex,
  toggleAccordion,
}) => {
  return (
    <div className="font-poppins">
      <h2 id={`accordion-flush-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-gray-600 border-b border-gray-200 gap-3"
          onClick={() => toggleAccordion(index)}
          aria-expanded={activeIndex === index ? "true" : "false"}
          aria-controls={`accordion-flush-body-${index}`}
        >
          {/* Adjusted font size with responsive behavior */}
          <span className="text-lg sm:text-xl md:text-2xl font-medium">{title}</span>
          <svg
            className={`w-3 h-3 transform ${
              activeIndex === index ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-flush-body-${index}`}
        className={`${
          activeIndex === index ? "block" : "hidden"
        } overflow-hidden transition-all duration-500 ease-in-out max-h-0 py-0 border-b border-gray-200`}
        style={{
          maxHeight: activeIndex === index ? "1000px" : "0px",
          paddingTop: activeIndex === index ? "20px" : "0px",
          paddingBottom: activeIndex === index ? "20px" : "0px",
        }}
        aria-labelledby={`accordion-flush-heading-${index}`}
      >
        {/* Adjusted font size with responsive behavior */}
        <p className="text-gray-500 italic text-base sm:text-lg md:text-xl">
          {content}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "What Inspires Me?",
      content:
        "I find inspiration in creativity, innovation, and the drive to make a meaningful impact. Whether it’s technology, problem-solving, or everyday experiences, I love exploring new ideas and learning from them.",
    },
    {
      title: "My Work Philosophy",
      content:
        "I believe in consistency, adaptability, and always striving for excellence. I enjoy working on projects that challenge me, push my boundaries, and allow me to improve continuously.",
    },
    {
      title: "Beyond Work – My Interests",
      content:
        "Outside of my professional life, I enjoy exploring new hobbies, reading, and staying active. I believe in maintaining a good balance between work and personal growth to stay motivated and inspired.",
    },
  ];

  return (
    <div id="accordion-flush">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index + 1}
          title={item.title}
          content={item.content}
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordion;
