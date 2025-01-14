import { Link } from 'react-scroll';

import logo from '../assets/twt.png';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-black text-white z-10"
    >
      <div className="container mx-auto flex items-center justify-between py-6 px-8">
        <div className="flex flex-shrink-0">
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