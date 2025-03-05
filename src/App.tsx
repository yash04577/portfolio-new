import Home from "./components/Home"
import Skills from "./components/Skills"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

function App() {
  
  return (
    <div className="bg-[#212428]">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Contact />

      <p className="text-gray-500 text-center py-10">© 2024. All rights reserved by Yash Prajapati</p>

    </div>
  )
}

export default App
