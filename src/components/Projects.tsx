import ProjectCard from "./ProjectCard";
import gymPhoto from "../assets/gym.png";
import socialPhoto from "../assets/social.png";
import shopcartPhoto from "../assets/shopcart.png";
import khattPhoto from "../assets/khat.png"
import timmerPhoto from "../assets/timmer.jpg"
import wallpaperPhoto from "../assets/wallpaper.jpeg"

const Projects = () => {
  return (
    <div className="">
      <div className="max-w-[1280px] mx-auto border-b border-black py-24 flex flex-col">
        <div>
          <p className="text-[#ff014f] text-center">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </p>
        </div>
        <div className="mb-10 mt-5">
          <h1 className="text-white text-5xl text-center">My Projects</h1>
        </div>
        <div className="flex flex-wrap gap-10">
          <ProjectCard
            title="ShopCart"
            photo={shopcartPhoto}
            repoUrl="https://github.com/yash04577/shopcart"
            liveUrl="https://shopcartv2.netlify.app/"
            description="Developed a full-stack e-commerce platform using the MERN stack with user authentication, product catalogs, shopping cart, order management. styled with Tailwind CSS for a modern UI."
          />
          <ProjectCard
            title="Social Media Clone"
            liveUrl="https://social-media-yash.netlify.app/auth"
            repoUrl="https://github.com/yash04577/social-media"
            description="social media platform using the MERN stack with features like user authentication, posting, comments, and real-time notifications. Styled with Tailwind CSS for a clean, responsive UI."
            photo={socialPhoto}
          />
          <ProjectCard
            title="Khatt"
            description="Developed a real-time chat application using React and Firebase, featuring user authentication, instant messaging, and cloud storage. Ensured a responsive UI and seamless communication with Firestore and Firebase Authentication."
            repoUrl="https://github.com/yash04577/chatapp-firebase"
            liveUrl="https://khatt.netlify.app/"
            photo={khattPhoto}
          />
          <ProjectCard
            title="Fitness Website"
            description="Developed a fitness website using React, featuring workout plans, diet tracking, and user authentication. Designed a responsive UI for an engaging experience."
            liveUrl="https://ornate-taiyaki-4a3617.netlify.app/"
            photo={gymPhoto}
          />
          <ProjectCard
            title="Wallpaper App"
            description="Developed a wallpaper app using React Native, featuring high-quality images, category-based browsing, and one-tap downloads. Integrated API for dynamic wallpaper updates and optimized performance for a smooth user experience."
            repoUrl="https://github.com/yash04577/wallpaper-app"
            liveUrl="https://drive.google.com/file/d/12sQst8PQRm5QyXsxIRWxPuSZtXhPFryq/view?usp=sharing"
            photo={wallpaperPhoto}
          />
          <ProjectCard
            title="Timmer App"
            description="Developed a timer application in React Native, allowing users to run multiple timers simultaneously. Features include start, pause, reset, and customizable durations, ensuring smooth performance and an intuitive user experience."
            liveUrl="https://drive.google.com/file/d/1GQEqTRIOshCn462yaoaQboDBeDq6GAN9/view?usp=sharing"
            repoUrl="https://github.com/yash04577/timer-app"
            photo={timmerPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
