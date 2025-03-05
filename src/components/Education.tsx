import EducationCard from "./EducationCard";
import JobExperienceCard from "./JobExperienceCard";

function Education() {
  return (
    <div className="flex">
      <div className="flex w-[40%] flex-col py-10 gap-10 group">
        <div className="mb-10 mt-5">

            <span className="text-[32px] text-[#c4cfde] font-bold leading-6">Education</span>
        </div>
        <div className="border-l-8 border-[#191b1e] relative flex flex-col gap-10 px-10">
          <div className="border-l-8 border-[#191b1e] absolute w-[40px] h-[50px] top-[60px] rotate-90 left-0">
            <div className="w-[30px] h-[30px] bg-[#191b1e] rounded-full flex justify-center items-center absolute top-8 left-[-20px]">
              <div className="w-[80%] h-[80%] bg-[#212428] rounded-full"></div>
            </div>
          </div>
          <div className="border-l-8 border-[#191b1e] absolute w-[40px] h-[50px] top-[400px] rotate-90 left-0">
            <div className="w-[30px] h-[30px] bg-[#191b1e] rounded-full flex justify-center items-center absolute top-8 left-[-20px]">
              <div className="w-[80%] h-[80%] bg-[#212428] rounded-full"></div>
            </div>
          </div>
          <div className="border-l-8 border-[#191b1e] absolute w-[40px] h-[50px] top-[730px] rotate-90 left-0">
            <div className="w-[30px] h-[30px] bg-[#191b1e] rounded-full flex justify-center items-center absolute top-8 left-[-20px]">
              <div className="w-[80%] h-[80%] bg-[#212428] rounded-full"></div>
            </div>
          </div>
          <EducationCard
            primaryTitle="Full Stack Developer Certication"
            secondaryTitle="CodeHelp"
            place="Online"
            date="2024"
          />
          <EducationCard
            primaryTitle="B.C.A"
            secondaryTitle="Kumaun University"
            place="Uttarakhand"
            date="2021-2024"
          />
          <EducationCard
            primaryTitle="Intermediate"
            secondaryTitle="Janta Inter College"
            place="Uttarakhand"
            date="2020"
          />
        </div>
      </div>
      <div className="w-[60%] py-10">
        <div className="mb-10 mt-5">
            <span className="text-[32px] text-[#c4cfde] font-bold leading-6">Job Experience</span>
        </div>
        <div className="flex py-10 justify-end relative">
          <div className="border-l-8 border-[#191b1e] z-20 absolute w-[40px] h-[50px] top-[100px] rotate-90 left-[25px]">
            <div className="w-[30px] h-[30px] bg-[#191b1e] rounded-full flex justify-center items-center absolute top-8 left-[-20px]">
              <div className="w-[80%] h-[80%] bg-[#212428] rounded-full"></div>
            </div>
          </div>
          <JobExperienceCard
            primaryTitle="Web Developer"
            secondaryTitle="TechStar"
            place="Uttarakhand"
            date="Feb - 2023"
            description="Developed and maintained responsive web pages using HTML, CSS, and JavaScript, ensuring a seamless user experience. Collaborated with the design team to implement modern UI/UX features, enhancing website aesthetics and usability. Optimized website performance by reducing page load times and improving responsiveness across devices. Additionally, fixed bugs and enhanced site functionality by debugging JavaScript and refining CSS styles."
          />
        </div>
        <div className="flex py-10 justify-end relative">
          <div className="border-l-8 border-[#191b1e] z-20 absolute w-[40px] h-[50px] top-[100px] rotate-90 left-[25px]">
            <div className="w-[30px] h-[30px] bg-[#191b1e] rounded-full flex justify-center items-center absolute top-8 left-[-20px]">
              <div className="w-[80%] h-[80%] bg-[#212428] rounded-full"></div>
            </div>
          </div>
          <JobExperienceCard
            primaryTitle="Full Stack Developer"
            secondaryTitle="Chawla Ispat"
            place="Uttarakhand"
            date="Sep 2023 - Present"
            description="Designed and implemented an auto pre-close feature in the sales process, significantly reducing manual input and improving sales order efficiency. Streamlined the sales order process, cutting order creation time by 30%, leading to faster processing and increased efficiency. Built and deployed a React Native app for efficient bill generation and order processing, enabling quick and reliable handling of sales and purchase orders. Optimized app performance, reducing order and bill processing times by 25%, enhancing overall efficiency. Additionally, managed the AWS deployment and implementation team, overseeing cloud infrastructure setup, scaling, and ensuring the smooth deployment of both the Lohawall and Godown Management applications."
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
