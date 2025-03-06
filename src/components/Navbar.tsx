import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

type props = {
  selectedPage:String,
  setSelectedPage: (data:string)=> void
}

const Navbar = ({selectedPage}:props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

    
    <nav className="w-full h-24 flex justify-between px-6 md:px-20 items-center border-b border-gray-300 fixed top-0 left-0 z-50 bg-[#212428]">

      {/* Logo */}
      <div className="text-3xl text-white font-bold">YP</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-[#c4cfde] text-[16px]">
        <a href="#home">
          <span className={`${selectedPage == "home" ? "text-[#ff014f]" : ""}`}>Home</span>
        </a>
        <a href="#skills">
          <span className={`${selectedPage == "skills" ? "text-[#ff014f]" : ""}`}>Skills</span>
        </a>
        <a href="#projects">
          <span className={`${selectedPage == "projects" ? "text-[#ff014f]" : ""}`}>Projects</span>
        </a>
        <a href="#resume">
          <span className={`${selectedPage == "resume" ? "text-[#ff014f]" : ""}`}>Resume</span>
        </a>
        <a href="#contact">
          <span className={`${selectedPage == "contact" ? "text-[#ff014f]" : ""}`}>Contact</span>
        </a>
      </div>

      {/* Hamburger Menu Button (Visible on Small Screens) */}
      <button
        className="md:hidden text-[#c4cfde] text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RxCross2 className="text-[#ff014f]" size={30} />
        ) : (
          <GiHamburgerMenu className="text-[#ff014f]" size={30} />
        )}
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

    <div className="mb-24 w-full">

    </div>

    </div>
  );
};

export default Navbar;
