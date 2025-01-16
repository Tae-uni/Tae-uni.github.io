/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, openModal, closeModal }) => {

  if (!openModal) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal Contents */}
      <motion.div
        className="fixed top-1/2 left-1/2 z-50 w-11/12 max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-to-br from-black via-purple-800 to-[#63e] p-6 text-white shadow-lg"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <FaTimes className="hover:text-gray-400" />
        </button>
        <h2 className="mb-4 text-2xl font-bold">{project.title}</h2>
        <p className="mb-4 text-sm text-gray-300">{project.description}</p>
        <div>
          <div className="mt-1 font-sans text-sm">{project.status}</div>
          <div className="mt-1 mb-3 font-sans text-sm">{project.type}</div>
          <div className="flex flex-wrap gap-1 gap-y-1 mt-3">
            {project.technologies.map((tech, index) => (
              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectModal;