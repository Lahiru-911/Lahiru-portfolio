import { Skill } from "@/components/HeroSkill/Skill";
import { TimelineExp } from "@/components/Timeline/TimelineExp";
import React from "react";

const AllThree = () => {
  return (
    <div className="bg-black">
      <Skill />
      <TimelineExp />
      <div className="h-screen bg-black"></div>
    </div>
  );
};

export default AllThree;
