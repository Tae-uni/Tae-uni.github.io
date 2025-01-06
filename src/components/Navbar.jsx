import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-scroll';

import logo from '../assets/twt.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-600/30 text-white z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <Link to="home" smooth={true} duration={500} offset={-200} className="text-2xl font-bold hover:text-gray-400">
            <img className="mx-2 w-14" src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="list-none flex items-center gap-6 text-lg">
          <li><Link to="home" smooth={true} duration={500} offset={-200} className="hover:text-gray-400">Home</Link></li>
          {/* <li><Link to="about" smooth={true} duration={500} offset={-100}>About</Link></li> */}
          <li><Link to="projects" smooth={true} duration={500} offset={-100} className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-200} className="hover:text-gray-400">Contact</Link></li>
        </ul>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
      </div>
    </nav>
  )
}

export default Navbar;