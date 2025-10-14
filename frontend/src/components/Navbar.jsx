import React from 'react';
import { navbar } from './constants';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="py-5 flex justify-between items-center px-8">
      <div className="text-xl font-bold">MyLogo</div>

      <div className="flex gap-6">
        {navbar.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `hover:text-blue-500 ${
                isActive ? 'text-blue-400 font-bold' : 'text-gray-300 font-semibold'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <button className="btn">
        Play the Game
      </button>
    </div>
  );
};

export default Navbar;
