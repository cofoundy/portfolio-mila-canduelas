"use client";

import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { PROJECTS } from "../data/projects";

const GRADIENTS = [
  'linear-gradient(135deg, #4A6B7C 0%, #1A2B3D 100%)',
  'linear-gradient(135deg, #6B7C4A 0%, #2C3A1A 100%)',
  'linear-gradient(135deg, #7C4A5D 0%, #3D1A2B 100%)',
  'linear-gradient(135deg, #4A5D7C 0%, #1A2B3D 100%)',
  'linear-gradient(135deg, #8B6B4A 0%, #3D2B1A 100%)',
  'linear-gradient(135deg, #4A7C6B 0%, #1A3D2B 100%)',
];

const MainProjects: FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-4 md:mb-10">Exhibitions</h1>
      <p className="text-center text-gray-400 mb-10 md:mb-20 px-4 max-w-[600px] mx-auto">
        Selected exhibitions across Wales, Italy, and Peru — from galleries to community festivals
      </p>
      {PROJECTS.map((project, index) => (
        <div
          key={project.id}
          className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[40vh] mb-20 md:my-10 ${
            index % 2 === 1
              ? "flex-col lg:flex-row"
              : "flex-col lg:flex-row-reverse"
          }`}
        >
          <div data-scroll data-scroll-speed="2" className="lg:flex-1">
            <div
              className="rounded-[20px] overflow-hidden h-[250px] lg:h-[300px] flex items-center justify-center relative"
              style={{ background: GRADIENTS[index % GRADIENTS.length] }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 text-[120px] font-serif leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="relative z-10 text-center px-6">
                <span className="text-white/60 text-sm tracking-widest uppercase">
                  {project.technologies.join(' · ')}
                </span>
              </div>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-2xl md:text-3xl font-serif">{project.title}</h1>
            <p className="text-[16px] md:text-[18px] text-justify my-4 text-gray-300">
              {project.description}
            </p>

            <div className="flex gap-[8px] flex-wrap my-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#C4935A]/10 border border-[#C4935A]/20 rounded-full text-sm text-[#C4935A] capitalize"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex mt-[25px] gap-[20px]">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#C4935A] hover:bg-[#D4A36A]"
              >
                <BiLinkExternal size={20} />
                <span>View</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainProjects;
