"use client";

import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import { projects } from "../lib/projects";
import Card from "../components/Card";
import ProjectTab from "../components/ProjectTab";
import { motion, useInView } from "framer-motion";


const variantsMotion = {
  initial: {y: 50, opacity: 0},
  animate: {y: 0, opacity: 1}
}

const Projects = () => {
  const [tabSelected, setTabSelected] = useState('All');
  const filteredProjects = projects.filter(p => p.tag.includes(tabSelected));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <h1 className="mt-8 mb-4 text-center text-white font-extrabold text-lg">My Projects</h1>
      <div className="flex space-x-2 justify-center text-[#ADB7BE]">
        <ProjectTab
          tab='All'
          isSelected={tabSelected === 'All'}
          onClick={() => setTabSelected('All')}
        />
        <ProjectTab
          tab='Web'
          isSelected={tabSelected === 'Web'}
          onClick={() => setTabSelected('Web')}
        />
        <ProjectTab
          tab='Mobile'
          isSelected={tabSelected === 'Mobile'}
          onClick={() => setTabSelected('Mobile')}
        />
      </div>
      <ul ref={ref} className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredProjects.map((p, index) => (
          <motion.li key={index} variants={variantsMotion} animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.1 }}>
            <Card key={p.id} card={p} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;