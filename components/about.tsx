"use client";
import React from "react";
import { motion } from "framer-motion";

import { SectionName } from "@/global/models/shared.type";
import { SectionHeading } from "./sectionHeading";
import { useInViewSection } from "@/lib/hooks";

type Props = {};

export function About({}: Props) {
  const { ref } = useInViewSection({ sectionName: SectionName.about });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id={`${SectionName.about}`}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        As a <span className="font-bold">Front-end developer</span>🧑🏾‍💻, I have
        developed interfaces from scratch from designs and I have also worked
        with existing interfaces modifying styles, adding new features or fixing
        bugs. I also have{" "}
        <span className="font-medium">
          knowledge of the backend Javascript stack
        </span>{" "}
        and experience developing full stack web applications. My core stack is{" "}
        <span className="font-bold">React JS, Node JS, </span>
        <span className="font-medium">Express, Sequelize and Postgres</span>. I
        am also familiar with <span className="font-bold">TypeScript</span>. I
        am always looking to learn new technologies.
      </p>
      <p>
        I consider myself a <span className="font-bold">team player 🤜🏾🤛🏽</span>,
        I firmly believe that good things are done together. Always looking for
        excellence in everything I do, proactive, willing to help, from my
        experience and knowledge, and to learn.
      </p>
      <p>
        I am currently looking for a{" "}
        <span className="font-bold">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
