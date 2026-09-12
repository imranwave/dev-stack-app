
import logo from "../../assets/logo-text.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Mobile Hamburger */}
        <button className="text-xl md:hidden">
          <FaBars />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 md:order-1">
         <img src={logo} alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-7 text-sm md:order-2 md:flex font-bold">
          <li>
            <a href="#" className="text-pink-500">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-500">
              Technologies
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-500">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 md:order-3 md:gap-4">
          <button className="hidden text-sm md:block">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-4 py-2 text-sm text-white hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
