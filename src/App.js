
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Avatar from '../src/assets/heroImage.png'
import Resume from './components/Resume'



function App() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
      {/* header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      {/* <section id="experience" className='snap-center'>
        <WorkExperience />
      </section> */}

      {/* Resume */}
      <section id="skills" className='snap-start'>
      {/* pdfURL={pdfURL} */}
        <Resume />
      </section>
      
      {/* skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <a href="#hero">
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
          src={Avatar}
          alt="AzyzHssin Avatar"
          />
          </div>
      </footer>
      </a>
    </div>
  )
}

export default App;
