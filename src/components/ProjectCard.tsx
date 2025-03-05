import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

type Props = {
  title:string;
  description:string;
  photo?:any;
  repoUrl?:string;
  liveUrl?:string;
};

const ProjectCard = ({title, description, photo, repoUrl, liveUrl}: Props) => {
  return (
    <div className="text-[#c4cfde] w-[400px] group h-[400px] hover:bg-[#191b1e] transition-all duration-700 shadow-skill-card flex flex-col gap-5 py-10 px-10 rounded-lg">
      <div className="rounded-lg overflow-hidden">
        <img
          // src="https://prakashbhattportfolio.netlify.app/static/media/project1.06ed51271540d616faa6.png"
          src={photo}
          alt=""
          className="group-hover:scale-110 transition-all duration-700"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#ff014f]">{title}</p>
        </div>
        <div className="flex gap-3 text-xl justify-center">
          <div className="rounded-full bg-black p-2 hover:text-[#ff014f] cursor-pointer">
            <a href={repoUrl}>

            <FaGithub />
            </a>
          </div>
          <div className="rounded-full bg-black p-2 hover:text-[#ff014f] cursor-pointer">
            <a href={liveUrl}>
            <TbWorld />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>
         {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
