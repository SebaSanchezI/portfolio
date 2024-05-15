'use client'
import React from 'react'

import { useInViewSection } from '@/lib/hooks'
import { SectionName } from '@/global/models/shared.type'
import { SectionHeading } from './sectionHeading'
import { experiencesData } from '@/lib/data'
import { motion } from 'framer-motion'

export function Experience() {
  const { ref } = useInViewSection({
    sectionName: SectionName.experience,
    threshold: 0.5,
  });
  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-48' id={`${SectionName.experience}`} ref={ref}>
    <SectionHeading>My Experience</SectionHeading>
    <TimelineVertical items={experiencesData} />
  </section>
  )
}

export type VerticalTimelineItem = {
  icon: React.ReactElement,
  date: string,
  title: string,
  location: string
  description: string
}

type VerticalTimelineProps = {
  items: VerticalTimelineItem[]
}

const moveLine = {
  initial: {
    height: 0
  },
  animate: {
    height: '100%',
    transition: {
      ease: 'linear', duration: 2
    }
  }
}

const moveDown = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'linear', duration: 0.4,
      delay: 0.5 * index
    }
  })
}

export default function TimelineVertical({ items }: VerticalTimelineProps) {
  return (
    <motion.div 
      id='timeline' 
      className='relative max-w-7xl my-24 mx-auto after:content-[""] after:absolute after:w-1 after:h-full after:bg-gray-300 after:top-0 after:left-1/2 after:-ml-1 after:-z-10'
      variants={moveLine}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true
      }} 
    >
      {items.map((item, idx) => (
        <motion.div 
          id='container' 
          key={item.title} 
          className='relative'
          variants={moveDown}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true
          }}
          custom={idx}
        >
          <div
            className={`relative py-1 w-1/2 text-left ${idx % 2 === 0 ? '-left-1 pr-10' : 'left-1/2 pl-10'}`}>
            {React.cloneElement(item.icon, { className: `bg-white !text-5xl absolute border border-black/[0.1] ${idx % 2 === 0 ? '-right-[25px]' : '-left-[25px]'} top-8 z-10 rounded-full p-1` })}
            <div id='textBox' className='realtive p-5 bg-white rounded-lg border border-black/[0.1]'>
              <h2 className='font-semibold capitalized'>{item.title}</h2>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='font-normal !mt-0'>{item.description}</p>
              <span 
                className={`h-0 w-0 absolute top-10 z-0 ${idx % 2 === 0 ? 'right-[26px]' : 'left-[26px]'} 
                border-t-[15px] border-b-[15px] border-y-transparent border-solid
                ${idx % 2 === 0 ? 'border-l-[15px]' : 'border-r-[15px]'} border-white `}></span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}