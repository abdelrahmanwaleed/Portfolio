import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left  max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#00ff00] text-2xl">
        Projects
      </h3>
      <div className="mt-14 ">
        <ProjectList />
      </div>
    </motion.div>
  );
};

export default Projects;
