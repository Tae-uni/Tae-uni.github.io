import { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import logo from '../assets/twt.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    console.log("Menu toggled:", isOpen);
    setIsOpen(!isOpen);
  }

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
  }, [menuRef, isOpen, setIsOpen]);

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 w-full bg-purple-600/30 text-white z-10 py-4 md:py-0 px-4 sm:px-0 lg:px-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <Link to="home" smooth={true} duration={500} offset={-200} className="text-2xl font-bold hover:text-gray-400">
            <img className="mx-2 w-14" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex list-none items-center gap-6 text-lg">
          <li><Link to="home" smooth={true} duration={500} offset={-200} className="hover:text-gray-400">Home</Link></li>
          {/* <li><Link to="about" smooth={true} duration={500} offset={-100}>About</Link></li> */}
          <li><Link to="projects" smooth={true} duration={500} offset={-100} className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-200} className="hover:text-gray-400">Contact</Link></li>
        </ul>

        <div className="hidden md:flex m-8 items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/taekwon-kim-766165317/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/Tae-uni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400" />
          </a>
        </div>

        {/* Hamburger Menu Mobile */}
        <div className="md:hidden z-40 relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-2xl hover:text-gray-400" />
            ) : (
              <FaBars className="text-2xl hover:text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 right-0 w-2/3 h-full bg-black text-white py-6 px-8 z-30"
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

          <div className="flex justify-center mt-6 gap-6 text-2xl">
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
      )}

    </nav>
  );
};

export default Navbar;