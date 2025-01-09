import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

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
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative md:hidden">
      <button onClick={toggleMenu} className="md:hidden focus:outline-none z-100">
        {isOpen ? (
          <FaTimes className="text-2xl hover:text-gray-400" />
        ) : (
          <FaBars className="text-2xl hover:text-gray-400" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-2/3 h-full bg-purple backdrop-blur-sm text-white py-6 px-8 z-100"
          >

            <ul className="flex flex-col mt-16 items-center gap-4 text-lg font-sans font-medium">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;