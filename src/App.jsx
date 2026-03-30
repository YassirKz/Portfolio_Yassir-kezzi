import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Yassir_kezzi_PortFolio/Navbar';
import Hero from './Yassir_kezzi_PortFolio/Hero';
import About from './Yassir_kezzi_PortFolio/About';
import Skills from './Yassir_kezzi_PortFolio/Skills';
import Projects from './Yassir_kezzi_PortFolio/Projects';
import Education from './Yassir_kezzi_PortFolio/Education';
import Contact from './Yassir_kezzi_PortFolio/Contact';
import Footer from './Yassir_kezzi_PortFolio/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;