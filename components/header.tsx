"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useActiveSectionContext } from "@/context"
import { links } from "@/lib/data"
import { SectionName } from "@/global/models/shared.type"

type Props = {}

export function Header({}: Props) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext()
  const handleClic = (linkName: SectionName) => {
    setActiveSection(linkName)
    setTimeOfLastClick(Date.now())
  }
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-32 w-full 
        rounded-none border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg 
        shadow-black/[0.0] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
        sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed flex items-center top-[0.15rem] left-1/2 h-32 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={`flex w-full items-center justify-center px-3 py-3 
                hover:text-gray-950 transition capitalize
                dark:text-gray-500 dark:hover:text-gray-300
                ${link.name === activeSection ? "text-gray-950 dark:text-white" : ""}`}
                onClick={() => handleClic(link.name)}
              >
                {link.name}
                {link.name.toLowerCase() === activeSection && (
                  <motion.span
                    className="bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
