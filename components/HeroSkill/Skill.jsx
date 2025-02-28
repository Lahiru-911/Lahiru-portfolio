"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function Skill() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black ">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover w-full max-w-[1400px] h-auto"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
