import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";

const MobileMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log("Menu toggled:", isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
      // Prevent Scrolling
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClick);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative md:hidden">
      <button onClick={toggleMenu} className="relative md:hidden focus:outline-none z-50">
        {isOpen ? (
          <FaTimes className="text-2xl hover:text-gray-400" />
        ) : (
          <FaBars className="text-2xl hover:text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-2/3 h-full bg-purple-900 text-white py-6 z-30 flex flex-col overflow-y-auto"
            >

              <div className="flex flex-col items-start px-8 gap-2">
                <div className="mt-20 text-2xl sm:text-3xl font-bold">
                  Taekwon Kim
                </div>
                <div className="text-sm sm:text-lg font-normal">
                  Full-Stack Developer
                </div>
              </div>
              <div className="border-t-4 w-full border-gray-300 my-8" />

              <ul className="flex flex-col mt-4 items-start px-8 gap-8 text-sm sm:text-lg font-sans font-medium">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="technologies"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className="hover:text-gray-400"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="flex-grow"></div>
              <div className="flex justify-start gap-6 text-2xl px-6">
                <a
                  href="https://www.linkedin.com/in/taekwon-kim-766165317/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Tae-uni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed top-0 left-0 w-1/3 h-full bg-black/20 backdrop-blur-sm z-20"
              onClick={toggleMenu}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;