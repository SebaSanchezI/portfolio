'use client'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import { useInViewSection } from '@/lib/hooks'
import { SectionName } from '@/global/models/shared.type'
import { SectionHeading } from './sectionHeading'
import { experiencesData } from '@/lib/data'

export function Experience() {
  const { ref } = useInViewSection({
    sectionName: SectionName.experience,
    threshold: 0.5,
  });
  return (
    <section className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-48' id={`${SectionName.experience}`} ref={ref}>
    <SectionHeading>My Experience</SectionHeading>
    <VerticalTimeline>
      {
        experiencesData.map((item, idx) => (
          <React.Fragment key={idx}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #9ca3af',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: 'white',
                fontSize: '1.5rem'
              }}
            >
              <h3 className='font-semibold capitalize'>{item.title}</h3>
              <p className='font-normal !mt-0 '>{item.location}</p>
              <p className=''>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))
      }
    </VerticalTimeline>
  </section>
  )
}
