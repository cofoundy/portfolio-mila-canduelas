"use client";

import { FC } from "react";
import { SIDE_PROJECTS } from "../data/side-projects";

const SmallProjects: FC = () => {
  return (
    <div className="small-projects px-[5vw] lg:px-[10vw] mb-20">
      <h1 className="text-center text-4xl mb-10 md:mb-16">Awards & Highlights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SIDE_PROJECTS.map((item) => (
          <div
            key={item.id}
            data-scroll
            data-scroll-speed="1"
            className="flex items-center gap-6 p-6 border border-gray-700 rounded-2xl hover:bg-white/5 hover:border-[#C4935A]/30 transition duration-300"
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: item.gradient }}
            >
              {item.emoji}
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
