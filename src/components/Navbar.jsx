import { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { AnimatePresence, motion } from 'framer-motion';

import logo from '../assets/twt.png';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  // const [isOpen, setIsOpen] = useState(false);
  // const menuRef = useRef(null);

  // const toggleMenu = () => {
  //   console.log("Menu toggled:", isOpen);
  //   setIsOpen(!isOpen);
  // }

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClick);
  //   } else {
  //     document.removeEventListener("mousedown", handleClick);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, [menuRef, isOpen, setIsOpen]);

  return (
    <nav
      // ref={menuRef}
      className="fixed top-0 left-0 w-full bg-black text-white z-10 py-4 md:py-0 px-4"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <Link to="home" smooth={true} duration={500} offset={-200} className="text-2xl font-bold hover:text-gray-400">
            <img className="mx-2 w-14" src={logo} alt="logo" />
          </Link>
        </div>

        <DesktopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;