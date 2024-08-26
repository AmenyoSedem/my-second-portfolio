import logo from '../assets/logo1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      <nav className="bg-transparent mb-20 flex items-center justify-between py-6">
        <div className="flex-shrink-0">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
          <FaInstagram />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
