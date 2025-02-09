
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Opensource from './components/Opensource'
import AboutMe from './components/AboutMe'
import Cp from './components/Cp'


function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="open-source">
        <Opensource />
      </section>
      <section id="cp-profiles">
        <Cp />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
    </div>
  );
}

export default App
