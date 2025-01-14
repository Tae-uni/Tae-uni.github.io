import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center justify-between w-full mx-auto ml-64 lg:ml-96">
      <ul className="flex items-center gap-8 text-lg">
        <li><Link to="home" smooth={true} duration={500} offset={-200} className="hover:text-gray-400">Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500} offset={-100} className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-200} className="hover:text-gray-400">Contact</Link></li>
      </ul>

      <div className="flex items-center gap-4 text-2xl">
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
  );
};

export default DesktopMenu;