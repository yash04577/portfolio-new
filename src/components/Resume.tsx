import { useState } from "react";
import SkillsBar from "./ProgessBar";
import Education from "./Education";

type Props = {};

const Resume = (props: Props) => {

  const [showSkill, setShowSkill] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="max-w-[1280px] mx-auto py-24 border-b border-black">
        <div>
          <p className="text-[#ff014f] text-center">SOMETHING ABOUT ME</p>
        </div>
        <div>
          <p className="text-center text-5xl text-white my-10">My Resume</p>
        </div>
        <div>
          <div>
            <div className="bg-black w-[1280px] mx-auto text-white text-2xl flex rounded-lg transition-all duration-500">
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
  );
};

export default Resume;
