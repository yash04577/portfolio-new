import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-24 flex justify-between px-6 md:px-20 items-center border-b border-gray-300 sticky top-0 z-50 bg-[#212428]">
      {/* Logo */}
      <div className="text-3xl text-white font-bold">YP</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-[#c4cfde] text-[16px]">
        <span>Home</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Resume</span>
        <span>Contact</span>
      </div>

      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <button 
        className="md:hidden text-[#c4cfde] text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? < RxCross2 className="text-[#ff014f]" size={30} /> : <GiHamburgerMenu className="text-[#ff014f]" size={30} />}
      </button>

      {/* Mobile Menu (Visible when Open) */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#212428] flex flex-col gap-4 text-center text-[#c4cfde] text-[16px] py-6 shadow-lg md:hidden">
          <span onClick={() => setIsOpen(false)}>Home</span>
          <span onClick={() => setIsOpen(false)}>Skills</span>
          <span onClick={() => setIsOpen(false)}>Projects</span>
          <span onClick={() => setIsOpen(false)}>Resume</span>
          <span onClick={() => setIsOpen(false)}>Contact</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
