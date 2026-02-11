"use client";

import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import { PROJECTS } from "../data/projects";

const MainProjects: FC = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Exhibitions</h1>
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
              className="rounded-[20px] overflow-hidden h-[250px] lg:h-[300px] flex items-center justify-center"
              style={{
                background: index === 0 
                  ? 'linear-gradient(135deg, #4A6B7C 0%, #2C4251 100%)'
                  : index === 1
                  ? 'linear-gradient(135deg, #6B7C4A 0%, #424A2C 100%)'
                  : index === 2
                  ? 'linear-gradient(135deg, #7C4A6B 0%, #512C42 100%)'
                  : 'linear-gradient(135deg, #4A5D7C 0%, #2C3851 100%)'
              }}
            >
              <span className="text-white/30 text-6xl font-serif">{String(index + 1).padStart(2, '0')}</span>
            </div>
          </div>
          <div className="item-info lg:flex-1">
            <h1 className="text-3xl font-serif">{project.title}</h1>
            <p className="text-[18px] text-justify my-4 text-gray-300">
              {project.description}
            </p>

            <div className="flex gap-[8px] flex-wrap my-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 capitalize"
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
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#4A6B7C] hover:bg-[#5A7B8C]"
              >
                <BiLinkExternal size={25} />
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainProjects;
