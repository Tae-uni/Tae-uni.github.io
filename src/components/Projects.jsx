import { useState } from "react";
import { motion } from "framer-motion";

import { PROJECTS } from "../contents";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [clickProject, setClickProject] = useState(null);

  const handleProjectClick = (project) => {
    setClickProject(project);
  };

  const closeModal = () => {
    setClickProject(null);
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mr-10"
            >
              <img src={project.image} className="mb-6 rounded" width={400} height={300} alt={project.title} />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mt-4 mb-2 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mt-1 font-sans text-sm">{project.status}</div>
              <div className="mt-1 mb-3 font-sans text-sm">{project.type}</div>
              <div className="flex flex-wrap gap-1 gap-y-1 mt-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {clickProject && (
        <ProjectModal
          project={clickProject}
          openModal={Boolean(clickProject)}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Projects;