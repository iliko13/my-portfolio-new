"use client";

import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ProjectComp from "./ProjectComp";
import React from "react";
import { useActiveSectionContext } from "@/context/ContextSection";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Projects() {
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
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
