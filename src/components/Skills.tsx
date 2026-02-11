"use client";

import { FC } from "react";
import { SKILLS } from "../data/skills";

const Skills: FC = () => {
  return (
    <div className="lg:min-h-[60vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-0.6"
        className="text-center text-3xl lg:text-4xl font-serif"
      >
        Artistic Practice
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="0.6"
        className="description text-lg text-center my-[30px] max-w-[600px] text-gray-300"
      >
        Versatile across multiple media, from traditional to experimental techniques
      </p>
      <div className="flex flex-wrap justify-center gap-3 max-w-[800px]">
        {SKILLS.map((skill, index) => (
          <div
            key={skill}
            data-scroll
            data-scroll-speed={index % 2 === 0 ? "0.5" : "-0.5"}
            className="px-5 py-3 border border-gray-600 rounded-full text-gray-200 hover:bg-white/10 hover:border-[#4A6B7C] transition duration-300 cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
