import { useState } from "react";
import SkillsBar from "./ProgessBar";
import Education from "./Education";
import { motion } from "framer-motion";

type props = {
  setSelectedPage: (data:string)=> void
}

const Resume = ({setSelectedPage}:props) => {

  const [showSkill, setShowSkill] = useState<boolean>(false);

  return (
    <motion.div onViewportEnter={()=>setSelectedPage("resume")}>

    <div className="w-full" id="resume">
      <div className="max-w-[1280px] mx-auto py-24 border-b border-black">
        <div>
          <p className="text-[#ff014f] text-center">SOMETHING ABOUT ME</p>
        </div>
        <div>
          <p className="text-center text-5xl text-white my-10">My Resume</p>
        </div>
        <div>
          <div>
            <div className="bg-black sm:w-[1280px] w-[90%] mx-auto text-white text-2xl flex flex-col sm:flex sm:flex-row rounded-lg transition-all duration-500">
              <button onClick={()=>setShowSkill(false)} className={`py-5 text-center flex-1 ${!showSkill ? "border border-red-400 rounded-lg" : "" } rounded-lg`}>
                Education
              </button>
              <button onClick={()=>setShowSkill(true)} className={`py-5 text-center flex-1 ${showSkill ? "border border-red-400 rounded-lg" : "" }`}>
                Professional Skills
              </button>
            </div>
          </div>
          {
            showSkill ? <SkillsBar /> : <Education />
          }
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Resume;
