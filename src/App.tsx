import Home from "./components/Home"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import {useState} from "react"

function App() {

  const [selectedPage, setSelectedPage] = useState<string>("home");
  
  return (
    <div className="bg-[#212428] overflow-x-hidden">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Resume setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />

      <p className="text-gray-500 text-center py-10">© 2024. All rights reserved by Yash Prajapati</p>

    </div>
  )
}

export default App
