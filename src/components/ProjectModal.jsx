/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaGithub, FaTimes } from "react-icons/fa";

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
        className="fixed top-10 bottom-10 left-1/2 z-50 w-11/12 max-w-lg -translate-x-1/2 overflow-y-auto rounded-lg bg-gradient-to-br from-black via-purple-800 to-[#63e] p-12 text-white shadow-lg md:max-w-2xl lg:max-w-4xl"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <FaTimes className="hover:text-gray-400" />
        </button>

        <h2 className="mb-6 text-2xl md:text-3xl font-bold">{project.title}</h2>
        <p className="mb-6 text-base text-gray-300 leading-relaxed">{project.detail}</p>
        <div className="mb-6 font-sans font-semibold text-sm md:text-lg">
          {project.status} | {project.type}
        </div>

        <h3 className="mb-4 text-lg md:text-xl font-semibold">Features</h3>
        <ul className="mb-6 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="flex items-center mb-1 gap-2 text-sm text-gray-200">
              <span>🔹</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div>
          <h3 className="mb-4 text-lg md:text-xl font-semibold">Technologies</h3>
          <div className="flex flex-wrap gap-y-1 mt-3 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="relative mb-6">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Screenshots</h3>
            <div className="relative flex items-center">
              {/* Left Arrow Button */}
              <button
                onClick={() => {
                  const container = document.getElementById("screenshot-container");
                  container.scrollLeft -= 300;
                }}
                className="absolute left-0 z-10 text-lg text-white rounded-full p-2 hover:bg-black/70"
              >
                <FaChevronLeft />
              </button>

              <div
                id="screenshot-container"
                className="flex gap-4 mt-2 ml-10 mr-10 overflow-x-auto scroll-smooth"
              >
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={project.title}
                    className="w-3/4 md:w-1/3 rounded-lg shadow-lg object-cover"
                  />
                ))}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() => {
                  const container = document.getElementById("screenshot-container");
                  container.scrollLeft += 300;
                }}
                className="absolute right-0 z-10 text-lg text-white rounded-full p-2 hover:bg-black/70"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        )}

        {project.github && (
          <div className="flex items-center gap-2 mt-6">
            <FaGithub className="text-2xl" />
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-blue-400 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default ProjectModal;