import React, { useState } from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="XtremethrillZone" className="h-10 w-10 object-contain" />
          <span className="text-xl sm:text-2xl font-bold tracking-wide">
            Xtremethrill<span className="text-purple-500">Zone</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#adventure" className="hover:text-purple-400">Adventure</a>
          <a href="#packages" className="hover:text-purple-400">Packages</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden bg-black/80 flex flex-col space-y-4 px-4 py-6">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#adventure" onClick={() => setOpen(false)}>Adventure</a>
          <a href="#packages" onClick={() => setOpen(false)}>Packages</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
