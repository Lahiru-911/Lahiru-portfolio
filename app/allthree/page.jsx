import { Skill } from "@/components/HeroSkill/Skill";
import { TimelineExp } from "@/components/Timeline/TimelineExp";
import React from "react";

const AllThree = () => {
  return (
    <div className="bg-black">
      <section>
        <Skill />
      </section>
      <section>
        <TimelineExp />
      </section>
    </div>
  );
};

export default AllThree;
