import  { useEffect, useState } from "react";

const skills = [
  { name: "React / Redux", percentage: 90 },
  { name: "HTML 5", percentage: 95 },
  { name: "CSS3", percentage: 80 },
  { name: "Tailwind", percentage: 90 },
  { name: "JavaScript", percentage: 75 },
  { name: "TypeScript", percentage: 90 },
  { name: "Node JS", percentage: 80 },
  { name: "Mongo DB", percentage: 70 },
  { name: "Express JS", percentage: 95 },
  { name: "Python", percentage: 90 },
];



const SkillsBar = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    let startTime:any;
    
    const animate = (timestamp:any) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const duration = 200; // 2 seconds for smooth animation
      
      setProgress((prev) =>
        prev.map((_, i) => {
          const newVal = Math.min((elapsedTime / duration) * skills[i].percentage, skills[i].percentage);
          return newVal;
        })
      );

      if (elapsedTime < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg">
        <div className="mb-10 mt-10">
            <span className="text-[36px] text-[#c4cfde] font-bold leading-6">Frontend Skills</span>
        </div>
        <div className="mb-10 mt-10">
            <span className="text-[36px] text-[#c4cfde] font-bold leading-6">Backend Skills</span>
        </div>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex justify-between mb-4 text-gray-200">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 transition-all duration-1000 ease-out"
              style={{ width: `${progress[index]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsBar;
