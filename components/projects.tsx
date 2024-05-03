import React from "react";
import { SectionHeading } from "./sectionHeading";
import { Project } from "./project";
import { projectsData } from "@/lib/data";
import { SectionName } from "@/global/models/shared.type";

type Props = {};

export function Projects({}: Props) {
  return (
    <section className="scroll-mt-28" id={`${SectionName.projects}`}>
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
