'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion' 
import  profileImage from '@/public/sebastian-image.jpg'

type Props = {}

export function Intro({}: Props) {
  return (
    <section className='z-[2] flex flex-col items-center justify-center'>
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <Image 
                src={profileImage}
                width={300}
                height={300}
                quality={95}
                alt='Sebastian Sanchez Isame image'
                className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover'
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
    </section>
  )
}