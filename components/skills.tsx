'use client'
import React from 'react'
import { delay, motion } from 'framer-motion'

import { skillsData } from '@/lib/data'
import { SectionHeading } from './sectionHeading'
import { useInViewSection } from '@/lib/hooks'
import { SectionName } from '@/global/models/shared.type'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
    delay: 0.05 * index
    }
  })
}

export function Skills() {
  const { ref } = useInViewSection({
    sectionName: SectionName.skills,
    threshold: 0.5,
  });
  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-48' id={`${SectionName.skills}`} ref={ref}>
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {
          skillsData.map((skill, idx) => (
            <motion.li 
              key={skill} 
              className='bg-white border border-black/[0.1] rounded-xl px-5 py-3'
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true
              }}
              custom={idx}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}