
import Card from './Card'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { IoGitPullRequest } from "react-icons/io5";
import { FaCircleNodes } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className='mt-10 sm:mt-0'>
        <div className='sm:py-24 sm:max-w-[1280px] mx-auto border-b px-10 sm:px-0 border-black pb-10'>
            <div>
                <p className='text-[#ff014f]'>SKILLS</p>
            </div>
            <div>
                <h1 className='text-5xl text-white mb-8 mt-4'>WHAT I DO</h1>
            </div>
            <div className='flex flex-wrap gap-10'>
                <Card icon={FaReact} title="Front-End Development" description="Mastery of HTML5, CSS3, and JavaScript to create captivating web interfaces. Proficiency in responsive design for seamless user experiences. ." />
                <Card icon={FaNodeJs} title="Back-End Development" description="Proficient in Node.js, and Express.js to build robust back-end components. Strong database management skills, particularly with MongoDB." />
                <Card icon={FaAws} title="Server Deployment" description="Proficient in AWS server deployment, leveraging EC2 and S3 for efficient, scalable, and secure cloud infrastructure. Experienced in static site hosting using S3 and CloudFront for high-performance content delivery." />
                <Card icon={IoGitPullRequest} title="Version Control and Collaboration" description="Adept in Git and GitHub for version control and collaborative development. Facilitating efficient teamwork while maintaining code integrity." />
                <Card icon={FaCircleNodes} title="Design and Project Management" description="Proficient in team leadership and project management, ensuring efficient workflow, clear communication. Skilled in agile methodologies to drive team success." />
            </div>
        </div>
    </div>
  )
}

export default Skills