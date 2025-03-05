import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full h-24 flex justify-between px-20 items-center border-b border-gray-300 sticky top-0 z-50 bg-[#212428]">
      <div className="text-3xl text-white font-bold">YP</div>
      <div className="flex gap-6 text-[#c4cfde] text-[16px]">
        <span>Home</span>
        <span>Skills</span>
        <span>Projects</span>
        <span>Resume</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
