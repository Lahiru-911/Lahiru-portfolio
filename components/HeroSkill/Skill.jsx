"use client";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

export function Skill() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-5">
              My Technological Expertise <br />
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
                Scroll Through My Expertise
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
          className="mx-auto hidden md:block rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          quality={100}
          priority
          
          
        />
        <Image
          src="/me14.webp"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          quality={100}
          priority
          
          
        />
      </ContainerScroll>
    </div>
  );
}
