
import PerspectiveText from "@/components/PerspectiveText/PerspectiveText";
import Image from "next/image";

const Contact = () => (
  <>
    <div className="relative w-full min-h-screen flex items-center justify-center rounded rounded-b-3xl">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/me14.webp"
          alt="Background"
          fill
          className="absolute inset-0 object-cover rounded rounded-b-3xl"
          priority
          quality={100}
        />
      </div>
    </div>

    <div className=" w-full h-screen"><PerspectiveText/></div>
  </>
);

export default Contact;
