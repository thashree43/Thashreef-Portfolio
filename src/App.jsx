import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;