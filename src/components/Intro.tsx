"use client";

import { FC } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro: FC = () => {
  return (
    <div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />

      <div className="relative z-[1]">
        {/* Outline layer */}
        <m.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.5, times: [0, 0.2, 0.6, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-transparent absolute inset-0"
          style={{
            WebkitTextStroke: '2px #C4935A',
          }}
        >
          Mila
        </m.h1>
        {/* Fill layer - blur to sharp */}
        <m.h1
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold text-white"
        >
          Mila
        </m.h1>
      </div>

      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="text-lg md:text-2xl text-center z-[1] overflow-hidden text-gray-300 px-4"
      >
        <m.span
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="inline-block overflow-hidden whitespace-nowrap"
        >
          Visual Artist · Artista Visual
        </m.span>
      </m.p>

      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className="text-sm md:text-base text-center z-[1] text-[#C4935A] tracking-widest uppercase px-4"
      >
        Cardiff, Wales · From Peru
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce text-[#C4935A]" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
