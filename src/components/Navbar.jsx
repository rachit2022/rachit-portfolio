import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo.png" className="w-10 mx-2" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          className="hover:bg-white hover:text-purple-950"
          href="https://www.linkedin.com/in/rachit-gupta-54047a236/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="hover:bg-white hover:text-purple-950"
          href="https://github.com/rachit2022"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="hover:bg-white hover:text-purple-950"
          href="https://x.com/g_rachitraj"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
        <a
          className="hover:bg-white hover:text-purple-950"
          href="https://www.instagram.com/rachit_raj_gupta/"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default navbar;
