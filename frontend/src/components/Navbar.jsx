import { useState } from "react";
import { mainlogo } from "./constants";
import { navbar } from "./constants";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white border-b border-gray-200 backdrop-blur-md shadow-md">
      
      <div className="py-5 flex justify-between items-center px-8">
        {/* Logo */}
        <img src={mainlogo} alt="logo" className="w-28" />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {navbar.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-blue-500 ${
                  isActive ? "text-blue-600 font-bold" : "text-gray-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition hover:cursor-pointer">
          Play the Game
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md border-t border-gray-200">
          {navbar.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `py-3 w-full text-center transition-colors duration-200 hover:text-blue-500 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <button className="my-4 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
            Play the Game
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
