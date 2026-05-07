import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="relative min-h-screen bg-primary overflow-x-hidden selection:bg-accent selection:text-primary">
      <Background />
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
