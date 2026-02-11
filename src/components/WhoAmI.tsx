"use client";

import { FC } from "react";
import Image from "next/image";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row py-20"
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          data-scroll
          data-scroll-speed="2"
          className="w-[200px] h-[200px] md:w-[225px] md:h-[225px] rounded-full object-cover border-2 border-[#C4935A]/30"
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/profile.jpg`}
          alt="Mila Canduelas - Visual Artist"
          width={225}
          height={225}
          priority
        />
        <span className="text-sm text-[#C4935A] tracking-widest uppercase">
          BA (Hons) Fine Art — First Class
        </span>
      </div>
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[36px] md:text-[40px]">
          Who am I?
        </h1>

        <p data-scroll className="text-base md:text-lg text-gray-200 mb-6" id="story">
          I am <strong>Milagros &ldquo;Mila&rdquo; Canduelas Rios</strong>, a Peruvian visual artist
          based in Cardiff, Wales. I hold a BA (Hons) in Fine Art with First Class Honours from
          Cardiff Metropolitan University (2023) and continue my practice at Llanover Hall Art Centre.
          <br /><br />
          Mother Nature and the ancestral knowledge of ancient Peruvian civilisations inspire my work.
          The more I connect with my roots, the more I interpret them through a deeply personal lens —
          across painting, sculpture, weaving, engraving, encaustic, and cyanotype.
        </p>

        <blockquote
          data-scroll
          className="border-l-2 border-[#C4935A] pl-4 py-2 text-gray-400 italic text-sm md:text-base mb-6"
        >
          &ldquo;La Madre Naturaleza, el conocimiento ancestral de las civilizaciones antiguas que
          habitaron el Perú, mi país natal, y la cosmovisión de estas civilizaciones inspiran mi
          trabajo. Mientras más conozco sobre mi cultura ancestral, me siento más conectada con ella
          y la interpreto en mis obras desde una perspectiva muy particular.&rdquo;
        </blockquote>

        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 border border-[#C4935A]/30 rounded-full text-xs text-[#C4935A]">
            Art Life Society Group · 2023–present
          </span>
          <span className="px-3 py-1 border border-[#4A6B7C]/30 rounded-full text-xs text-[#7B9AAD]">
            20+ Exhibitions · UK, Italy, Peru
          </span>
          <span className="px-3 py-1 border border-[#4A6B7C]/30 rounded-full text-xs text-[#7B9AAD]">
            30+ Years · Artistic Journey
          </span>
        </div>
      </div>
    </div>
  );
};

export default Who;
