import React from 'react';
import { navbar } from './constants';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white border-b-1
    border-gray-400 backdrop-blur-md shadow-md">
      <div className="py-5 flex justify-between items-center px-8">
        {/* Logo */}
        <div className="text-xl font-bold text-black">MyLogo</div>

        {/* Nav Links */}
        <div className="flex gap-6">
          {navbar.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-blue-500 ${
                  isActive
                    ? 'text-blue-400 font-bold'
                    : 'text-gray-600'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Play the Game
        </button>
      </div>
    </div>
  );
};

export default Navbar;
