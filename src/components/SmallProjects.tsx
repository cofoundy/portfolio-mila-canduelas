"use client";

import { FC } from "react";
import { SIDE_PROJECTS } from "../data/side-projects";

const SmallProjects: FC = () => {
  return (
    <div className="small-projects px-[5vw] lg:px-[10vw] mb-20">
      <h1 className="text-center text-4xl mb-10 md:mb-16">Awards & Highlights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SIDE_PROJECTS.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            data-scroll
            data-scroll-speed="1"
            className="flex items-center gap-6 p-6 border border-gray-700 rounded-2xl hover:bg-white/5 transition duration-300"
          >
            <div 
              className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl"
              style={{
                background: index === 0 
                  ? 'linear-gradient(135deg, #C9B037 0%, #997B2C 100%)'
                  : index === 1
                  ? 'linear-gradient(135deg, #4A6B7C 0%, #2C4251 100%)'
                  : index === 2
                  ? 'linear-gradient(135deg, #6B7C4A 0%, #424A2C 100%)'
                  : 'linear-gradient(135deg, #8B6B4A 0%, #5A4230 100%)'
              }}
            >
              {index === 0 ? '🏆' : index === 1 ? '🇮🇹' : index === 2 ? '🇫🇷' : '🎨'}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
