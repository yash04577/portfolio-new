import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full">
      <div className="sm:max-w-[1280px] mx-auto py-24 border-b border-black">
        <div>
          <p className="text-[#ff014f] text-center">CONTACT</p>
        </div>
        <div>
          <p className="text-center text-5xl text-white my-10">
            Contact With Me
          </p>
        </div>
        <div className="sm:flex justify-between">
          <div className="text-white sm:w-[35%] w-[90%] mx-auto px-10 py-10 rounded-lg flex flex-col justify-center gap-5 shadow-skill-card">
            <img
              className="rounded-lg"
              src="https://prakashbhattportfolio.netlify.app/static/media/contactImg.8ddfbfd11798f881db54.png"
              alt=""
            />

            <p className="text-3xl font-bold">Yash Prajapati</p>
            <p>Full Stack Developer</p>
            <p className="text-gray-500">
              Feel free to reach out to me if you have any questions,
              collaboration opportunities, or just want to connect.
            </p>
            <p className="text-gray-500">Phone: +91 9458134702</p>
            <p className="text-gray-500">Email: yash04577@gmail.com</p>
            <div className="">
              <div className="text-[16px] text-[#c4cfde] mb-4">
                <p>FIND ME ON</p>
              </div>
              <div className="flex gap-4 text-3xl">
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-colors duration-700">
                  <a href="https://github.com/yash04577" target="_blank">
                    <FaGithub />
                  </a>
                </div>
                <div className=" rounded-md bg-[#191b1e] text-white p-3 hover:text-[#ff014f] transition-colors duration-700">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-[60%] w-[90%] mx-auto mt-10 sm:mt-0 flex flex-col gap-7 shadow-skill-card rounded-lg p-10 text-gray-500">
            <div className="flex justify-between">
              <div className="flex-1 flex flex-col gap-3">
                <div>YOUR NAME</div>
                <input
                  type="text"
                  className="w-[90%] rounded-md py-3 bg-[#191b1e] border-b border-gray-500"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div>PHONE NUMBER</div>
                <input
                  type="text"
                  className="w-[90%] rounded-md py-3 bg-[#191b1e] border-b border-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>EMAIL</div>
              <input
                type="text"
                className="w-[95%] rounded-md py-3 bg-[#191b1e] border-b border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div>SUBJECT</div>
              <input
                type="text"
                className="w-[95%] rounded-md py-3 bg-[#191b1e] border-b border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div>MESSAGE</div>
              <textarea
                className="rounded-md w-[95%] bg-[#191b1e] border-b border-gray-500"
                name=""
                id=""
                rows={8}
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="w-[95%]  border-2 rounded-md py-3 text-xl bg-[#191b1e] border-b border-gray-500">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
