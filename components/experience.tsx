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
    threshold: 0.75,
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
    y: -90,
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
      className='relative mx-auto my-10 mt-10 left-8
        after:-left-8 max-w-7xl sm:my-24 after:content-[""] 
        after:absolute after:w-1 after:h-full after:bg-gray-300 after:top-0 
        sm:after:left-1/2 after:-ml-1 after:-z-10'
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
          className='relative w-full pl-8 sm:pl-0 sm:pr-0'
          variants={moveDown}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true
          }}
          custom={idx}
        >
          {React.cloneElement(item.icon, 
              { className: `bg-primary !text-5xl absolute border border-black/[0.1] text-white
              top-8 z-10 rounded-full p-1 -left-[3.6rem] -translate-x-0 sm:left-1/2 sm:-translate-x-1/2` 
              })}
          <div
            className={`relative py-1 w-full sm:w-1/2 text-left left-0  ${idx % 2 === 0 ? 'sm:-left-1 sm:pr-10' : 'sm:left-1/2 sm:pl-10'}`}>
            <div id='textBox' className='realtive p-5 bg-white rounded-lg border border-black/[0.1]'>
              <h2 className='font-bold capitalized'>{item.title}</h2>
              <p className='font-semibold !mt-0 italic'>{item.date}</p>
              <p className='font-normal !mt-0'>{item.location}</p>
              <p className='font-normal !mt-0'>{item.description}</p>
              <span 
                className={`h-0 w-0 absolute top-10 z-30 border-white 
                ${idx % 2 === 0 ? 'right-full sm:right-[26px]' : '-left-[15px] sm:left-[26px]'} 
                border-t-[15px] border-b-[15px] border-y-transparent border-solid
                ${idx % 2 === 0 ? 'border-l-0 border-r-[15px] sm:border-l-[15px] sm:border-r-0' : 'border-r-[15px]'} `}></span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}