"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export function Project({ title, description, tags, imageUrl, github, web }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[50rem] min-h-80 rounded-lg border border-black/5 overflow-hidden relative sm:pr-8 dm:h-[20rem] sm:mb-8 last:mb-0 group-even:pl-8 hover:bg-gray-200">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap mt-auto gap-2 sm:mt-4">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-primary px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex mt-6">
            <Link
              href={github}
              target="_blank"
            >
              <FaGithub className="!text-3xl mr-4 text-primary transition hover:scale-125 cursor-pointer" />
          </Link>
            <Link
              href={web}
              target="_blank"
            >
              <TbWorldWww className="!text-3xl mr-4 text-primary transition hover:scale-125 cursor-pointer" />
          </Link>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
  
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
  
          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
