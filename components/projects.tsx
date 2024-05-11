"use client";
import React from "react";
import { projectsData } from "@/lib/data";
import { SectionName } from "@/global/models/shared.type";

import { SectionHeading } from "./sectionHeading";
import { Project } from "./project";
import { useInViewSection } from "@/lib/hooks";

type Props = {};

export function Projects({}: Props) {
  const { ref } = useInViewSection({
    sectionName: SectionName.projects,
    threshold: 0.5,
  });

  return (
    <section className="scroll-mt-28" id={`${SectionName.projects}`} ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
