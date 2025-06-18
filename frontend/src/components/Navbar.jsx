import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUserPlus,
  FaSignInAlt,
  FaBuilding, // Added icon for Property
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0D0F20] text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
          
          <span className="text-blue-400">homo</span>deal
        
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-blue-400 flex items-center gap-2">
            <FaHome className="text-blue-400" />
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-400 flex items-center gap-2">
            <FaBuilding className="text-blue-400" />
            <Link to="/property">Property</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-400 flex items-center gap-2">
            <FaInfoCircle className="text-blue-400" />
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-400 flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/signup">
            <button className="px-5 py-2 border border-blue-400 text-white rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all flex items-center gap-2">
              <FaUserPlus />
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="px-5 py-2 border border-blue-400 text-white rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all flex items-center gap-2">
              <FaSignInAlt />
              Login
            </button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium animate-fade-in">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2">
            <FaHome className="text-blue-400" />
            Home
          </Link>
          <Link to="/property" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2">
            <FaBuilding className="text-blue-400" />
            Property
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2">
            <FaInfoCircle className="text-blue-400" />
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400 flex items-center gap-2">
            <FaEnvelope className="text-blue-400" />
            Contact
          </Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>
            <button className="w-full px-5 py-2 border border-blue-400 text-white rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all flex items-center justify-center gap-2">
              <FaUserPlus />
              Register
            </button>
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full px-5 py-2 border border-blue-400 text-white rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all flex items-center justify-center gap-2">
              <FaSignInAlt />
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
