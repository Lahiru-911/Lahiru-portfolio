"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Textparallax() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="mt-28"/>
      <div ref={container}>
        <Slide direction={"left"} left={"-40%"} progress={scrollYProgress} />
        <Slide direction={"right"} left={"-25%"} progress={scrollYProgress} />
        <Slide direction={"left"} left={"-75%"} progress={scrollYProgress} />
      </div>
      <div className="mb-36"/>
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[7.5vw]">Front End Developer</p>
    </div>
  );
};
