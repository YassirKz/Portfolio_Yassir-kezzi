import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <Router>
      <div className="App bg-[#020617] text-slate-50 min-h-screen">
        <Background />
        <CustomCursor />
        <Navbar />
        
        <main className="snap-container">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home" className="snap-section">
                  <Hero />
                </section>
                <section id="about" className="snap-section">
                  <About />
                </section>
                <section id="skills" className="snap-section">
                  <Skills />
                </section>
                <section id="projects" className="snap-section">
                  <Projects />
                </section>
                <section id="education" className="snap-section">
                  <Education />
                </section>
                <section id="contact" className="snap-section !h-auto">
                  <div className="w-full flex flex-col items-center">
                    <Contact />
                    <Footer />
                  </div>
                </section>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;