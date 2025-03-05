import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import YashImage from "../assets/yash.png";
import Typewriter from "typewriter-effect";
import { FaNodeJs } from "react-icons/fa";

const Home = () => {

  return (
    <div className="w-full">
      <div className="sm:max-w-[1280px] mx-auto sm:flex-row flex flex-col-reverse pb-5 sm:pb-0 border-b border-black">
        <div className="sm:mt-24 w-[90%] sm:w-full mx-auto flex-1">
          <p className="text-[18px] text-[#c4cfde]">WELCOME TO MY WORLD</p>
          <div>
            <span className="text-[60px] text-white font-bold">Hi, I'm </span>
            <span className="text-[60px] text-[#ff014f] font-bold">Yash</span>
          </div>
          
          <p className="text-[40px] text-white font-bold">{
          
         
          <Typewriter
            options={{
              strings: [
                "I am a Full Stack Developer",
                "Android developer",
                "AWS Learner",
              ],
              autoStart: true,
              loop: true,
              delay: 10,
              deleteSpeed: 10
            }}
          />
        }
        </p>
          {/* <p className="text-[60px] text-white font-bold">Hi, I'm Yash</p> */}
          {/* <p className="text-[36px] text-white">{()=>TypingEffectFun()}</p> */}
          {/* <p className="text-[36px] text-white">a Full Stack Developer</p> */}
          <p className="text-[16px] text-[#c4cfde] mb-24 mt-10">
            Welcome to my portfolio! I'm Yash Prajapati, a passionate full stack
            developer with a drive to excel in web development. I bring forth a
            dynamic blend of technical proficiency and creative flair to craft
            seamless digital experiences. With a solid foundation in both
            front-end and back-end technologies, I've contributed to a range of
            projects that highlight my commitment to innovation and
            user-centered design.
          </p>

          <div className="flex justify-between">
            <div className="">
              <div className="text-[16px] text-[#c4cfde] mb-4">
                <p>FIND ME ON</p>
              </div>
              <div className="flex gap-4 text-3xl">
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-all duration-500">
                  <a href="https://github.com/yash04577">
                    <FaGithub />
                    </a> 
                </div>
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-all duration-500">
                  <a href="https://www.linkedin.com/in/yash04577/">
                  <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-[16px] text-[#c4cfde] mb-4">
                <p>BEST SKILLS ON</p>
              </div>
              <div className="flex gap-4 text-3xl">
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-all duration-500">
                  <FaReact />
                </div>
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-all duration-500">
                  <FaNodeJs />
                </div>
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-all duration-500">
                  <SiTailwindcss />
                </div>
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-all duration-500">
                  <SiTypescript />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-[100px] sm:mt-0">
          <div className="relative sm:w-[300px] w-full h-[400px] sm:h-[760px]  rounded-full">
            <div className="absolute rounded-full bottom-20 w-full sm:lg:w-[500px] sm:lg:h-[500px] h-[700px] shadow-skill-card overflow-hidden">
              <img
                className="absolute bottom-0 z-20"
                // src="https://prakashbhattportfolio.netlify.app/static/media/bannerImg.76dd8f0606912b6dd802.png"
                src={YashImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
