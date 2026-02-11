"use client";

import { FC } from "react";

const EDUCATION = [
  {
    degree: "BA (Hons) Fine Art",
    institution: "Cardiff Metropolitan University",
    location: "Wales, UK",
    year: "2020 – 2023",
    distinction: "First Class Honours",
    description: "Painting, sculpture, installation, encaustic, cyanotype. Degree show addressing Peru political crisis.",
  },
  {
    degree: "Interior Design",
    institution: "The Interior Design Institute",
    location: "UK",
    year: "2013",
    distinction: null,
    description: "Visual language of design, spatial composition, and colour theory.",
  },
  {
    degree: "Pottery & Ceramics",
    institution: "CETPRO Carlos Cueto Fernandini",
    location: "Lima, Peru",
    year: "2003",
    distinction: null,
    description: "Casting, firing, clay modelling, and glaze techniques.",
  },
  {
    degree: "Fashion Design",
    institution: "Madeleine Vionnet Fashion School",
    location: "Lima, Peru",
    year: "1988 – 1991",
    distinction: null,
    description: "Fashion, pattern design, and haute couture. 6th place in 1st National Fashion Design Contest (1991).",
  },
];

const Education: FC = () => {
  return (
    <div className="px-[5vw] lg:px-[10vw] mb-20 py-10">
      <h1 className="text-center text-4xl mb-4">Education</h1>
      <p className="text-center text-gray-400 mb-10 md:mb-16 max-w-[500px] mx-auto">
        A lifelong learner across art, design, and craft traditions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {EDUCATION.map((edu) => (
          <div
            key={edu.degree}
            data-scroll
            data-scroll-speed="1"
            className="p-6 border border-gray-700 rounded-2xl hover:bg-white/5 hover:border-[#C4935A]/30 transition duration-300"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl font-semibold">{edu.degree}</h2>
              {edu.distinction && (
                <span className="px-2 py-0.5 bg-[#C4935A]/20 text-[#C4935A] text-xs rounded-full whitespace-nowrap ml-2">
                  {edu.distinction}
                </span>
              )}
            </div>
            <p className="text-[#7B9AAD] text-sm mb-1">{edu.institution}</p>
            <p className="text-gray-500 text-xs mb-3">{edu.location} · {edu.year}</p>
            <p className="text-gray-400 text-sm">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
