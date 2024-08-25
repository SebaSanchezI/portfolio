"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import profileImage from "@/public/sebastian-image.png";
import { SectionName } from "@/global/models/shared.type";
import { useInViewSection } from "@/lib/hooks";

type Props = {};

export function Intro({}: Props) {
  const { ref } = useInViewSection({ sectionName: SectionName.home });

  return (
    <section
      className="z-[2] min-h-screen flex flex-col items-center justify-start scroll-mt-28 max-w-[45rem]"
      id={`${SectionName.home}`}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          src={profileImage}
          width={300}
          height={300}
          quality={95}
          alt="Sebastian Sanchez Isame image"
          className="h-32 w-32 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
        />
      </motion.div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Sebastián.`}</span> {`I'm a`}{" "}
        <span className="font-bold">Front-end developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col gap-2 sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-primary text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-primaryHover transition cursor-pointer"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full 
          outline-none focus:scale-110 hover:scale-105 transition cursor-pointer 
          borderBlack dark:bg-white/10 dark:hover:bg-white/20"
          href="/cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white px-4 py-4 text-gray-700 text-[1.35rem] flex items-center 
          justify-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 
          hover:scale-[1.15] borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
          href="https://www.linkedin.com/in/sebastiansanchezisame/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white px-4 py-4 text-gray-700 text-[1.65rem] flex items-center 
          justify-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 
          hover:scale-[1.15] borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
          href="https://github.com/SebaSanchezI"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
