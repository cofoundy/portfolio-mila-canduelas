"use client";

import { BiLinkExternal } from "react-icons/bi";
import { FC } from "react";
import Image from "next/image";
import { PROJECTS } from "../data/projects";

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
            <div className="rounded-[20px] overflow-hidden h-[250px] lg:h-[300px] relative group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white/80 text-sm tracking-widest uppercase">
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
