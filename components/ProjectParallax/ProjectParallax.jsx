"use client";

import { useState, useEffect, useRef } from "react";
import { db, ref, get } from "../../utils/firebaseConfig";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ProjectParallax = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const dbRef = ref(db, "projectparallax");
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          const projectsData = snapshot.val();

          const projectArray = Object.keys(projectsData).map((key) => ({
            id: key,
            ...projectsData[key],
          }));

          setProjects(projectArray);
        } else {
          console.log("No project data available.");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    }

    fetchProjects();
  }, []);

  // ✅ Call all hooks before any conditional logic!
  const refContainer = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // ✅ Safe to conditionally render *after* hooks have run
  if (projects.length === 0) {
    return <div className="text-white text-center">Loading Projects...</div>;
  }

  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);

  return (
    <div
      ref={refContainer}
      className="h-[300vh] md:h-[380vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProductCard
              key={project.id}
              product={project}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((project) => (
            <ProductCard
              key={project.id}
              product={project}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((project) => (
            <ProductCard
              key={project.id}
              product={project}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white font-hedvig">
        See How <br /> I Make Ideas Real
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        I craft innovative and impactful solutions using the latest technologies
        and frameworks. As a passionate developer, I am committed to bringing
        ideas to life with precision and creativity.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.id}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        target="_blank"
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={400}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
