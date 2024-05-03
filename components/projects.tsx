import React from "react";
import { SectionHeading } from "./sectionHeading";
import { Project } from "./project";
import { projectsData } from "@/lib/data";

type Props = {};

export function Projects({}: Props) {
  return (
    <section className="scroll-mt-28" id="projects">
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
