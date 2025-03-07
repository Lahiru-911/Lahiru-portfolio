// "use client";
// import Image from "next/image";
// import React from "react";
// import { WobbleCard } from "./wobble-card.tsx";

// export function BlogCard() {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
//       <WobbleCard
//         containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
//         className=""
//       >
//         <div className="max-w-xs">
//           <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//             Gippity AI powers the entire universe
//           </h2>
//           <p className="mt-4 text-left  text-base/6 text-neutral-200">
//             With over 100,000 mothly active bot users, Gippity AI is the most
//             popular AI platform for developers.
//           </p>
//         </div>
//         <Image
//           src="/me14.webp"
//           width={500}
//           height={500}
//           alt="linear demo image"
//           className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
//         />
//       </WobbleCard>
//       <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-700">
//         <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//           No shirt, no shoes, no weapons.
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//           If someone yells “stop!”, goes limp, or taps out, the fight is over.
//         </p>
//       </WobbleCard>
//       <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
//         <div className="max-w-sm">
//           <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//             Signup for blazing-fast cutting-edge state of the art Gippity AI
//             wrapper today!
//           </h2>
//           <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//             With over 100,000 mothly active bot users, Gippity AI is the most
//             popular AI platform for developers.
//           </p>
//         </div>
//         <Image
//           src="/me14.webp"
//           width={500}
//           height={500}
//           alt="linear demo image"
//           className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
//         />
//       </WobbleCard>
//       {/* Fourth BlogCard with Green Background */}
//       <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-800">
//         <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//           Future of AI technology and its possibilities
//         </h2>
//         <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
//           AI technology is revolutionizing the way we interact with the world,
//           and its potential is limitless.
//         </p>
//       </WobbleCard>
//       {/* Fifth BlogCard with Purple Background */}
//       <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-700 min-h-[500px] lg:min-h-[300px]">
//         <div className="max-w-xs">
//           <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//             Revolutionizing healthcare with AI solutions
//           </h2>
//           <p className="mt-4 text-left text-base/6 text-neutral-200">
//             Artificial Intelligence is playing a key role in transforming
//             healthcare, improving diagnostics, and patient care.
//           </p>
//         </div>
//         <Image
//           src="/me14.webp"
//           width={500}
//           height={500}
//           alt="linear demo image"
//           className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
//         />
//       </WobbleCard>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobble-card.tsx";

export function BlogCard() {
  const cards = [
    {
      id: 1,
      title: "Gippity AI powers the entire universe",
      description:
        "With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 2,
      title: "No shirt, no shoes, no weapons.",
      description:
        "If someone yells 'stop!', goes limp, or taps out, the fight is over.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 3,
      title: "Signup for blazing-fast AI!",
      description:
        "With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 4,
      title: "Future of AI technology",
      description:
        "AI is revolutionizing the world, and its potential is limitless.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 5,
      title: "Revolutionizing healthcare with AI",
      description:
        "AI is transforming healthcare, improving diagnostics, and patient care.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 6,
      title: "The rise of quantum computing",
      description:
        "Quantum computing is redefining computing power and AI integration.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 7,
      title: "Blockchain and its implications for finance",
      description:
        "Blockchain is revolutionizing financial systems, making transactions more secure and transparent.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 8,
      title: "Exploring the future of autonomous vehicles",
      description:
        "Self-driving cars are the next big thing in transportation.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 9,
      title: "AI in space exploration",
      description:
        "AI is analyzing data from space missions to help us understand the cosmos.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 10,
      title: "Advancements in renewable energy",
      description:
        "New technologies are leading the charge in sustainable energy.",
      imageSrc: "/me14.webp",
      imageAlt: "linear demo image",
    },
    {
      id: 11,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 12,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 13,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 14,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 15,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 16,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 17,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 18,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 19,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 20,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.webp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 21,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 22,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.wep", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 23,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.ebp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 24,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.wbp", // Update this image
      imageAlt: "AI ethics image",
    },
    {
      id: 25,
      title: "AI and ethics: a new frontier",
      description:
        "AI presents new ethical challenges that need to be addressed to ensure its responsible use.",
      imageSrc: "/me14.wep", // Update this image
      imageAlt: "AI ethics image",
    },
  ];

  // Define the repeating styles
  const cardStyles = [
    "col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]", // First style
    "col-span-1 min-h-[300px] bg-gray-700", // Second style
    "col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[400px]", // Third style
    "col-span-1 min-h-[300px] bg-green-800", // Fourth style
    "col-span-1 lg:col-span-2 h-full bg-purple-700 min-h-[500px] lg:min-h-[300px]", // Fifth style
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <WobbleCard
          key={card.id}
          containerClassName={cardStyles[index % 5]} 
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {card.title}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              {card.description}
            </p>
          </div>
          <Image
            src={card.imageSrc}
            width={500}
            height={500}
            alt={card.imageAlt}
            className="absolute -right-4 lg:-right-[40%]  -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      ))}
    </div>
  );
}
