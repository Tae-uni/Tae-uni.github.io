import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

import logo from '../assets/twt.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-10">
      {/* // <nav className="mb-20 flex items-center justify-between py-4"> */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-14" src={logo} alt="logo" />
        </div>
        <ul className="list-none flex items-center gap-6 text-base">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;