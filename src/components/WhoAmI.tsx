"use client";

import { FC } from "react";
import Image from "next/image";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <Image
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full object-cover"
        src="/profile.jpg"
        alt="Mila Canduelas - Visual Artist"
        width={225}
        height={225}
        priority
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        <p data-scroll className="text-lg text-gray-200" id="story">
          I am <strong>Milagros "Mila" Canduelas Rios</strong>, a Peruvian visual artist 
          based in Cardiff, Wales. I hold a BA (Hons) in Fine Art from Cardiff Metropolitan 
          University (2023) and continue my practice at Llanover Hall Art Centre.
          <br /><br />
          Mother Nature and the ancestral knowledge of ancient Peruvian civilisations 
          inspire my work. The more I connect with my roots, the more I interpret them 
          through a deeply personal lens—across painting, sculpture, weaving, engraving, 
          encaustic, and cyanotype.
          <br /><br />
          Member of the Art Life Society Group since 2023.
        </p>
      </div>
    </div>
  );
};

export default Who;
