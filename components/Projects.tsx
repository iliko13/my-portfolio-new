import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectComp from "./ProjectComp";
import React from "react";

function Projects() {
  return (
    <section>
      <SectionHeading>My project</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectComp {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
