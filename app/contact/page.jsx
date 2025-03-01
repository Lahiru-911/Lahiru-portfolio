import Image from "next/image";

const Contact = () => (
  <div className="relative w-full min-h-screen flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src="/me12.webp"
        alt="Background"
        fill
        className="absolute inset-0 object-cover"
        priority
      />
      
    </div>

    {/* Content Container */}
    <div className="relative z-10 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
        Welcome to My Portfolio
      </h1>
    </div>
  </div>
);

export default Contact;
