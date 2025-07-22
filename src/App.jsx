import { useSiteEffects } from './hooks/useSiteEffects';

import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievement from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useSiteEffects();

  return (
    <div className="min-h-screen text-white bg-[#050414] relative overflow-x-hidden">
      {/* Purple glowing blur background */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-800 opacity-20 blur-3xl rounded-full z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600 opacity-10 blur-[120px] rounded-full z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px] z-0 pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievement />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
