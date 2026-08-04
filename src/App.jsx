import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HackathonProjects from './components/HackathonProjects';
import Timeline from './components/Timeline';
import CreativeCorner from './components/CreativeCorner';
import Contact from './components/Contact';
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen text-[#23211F]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto">
        {/* About Me Story */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Featured Case Studies */}
        <Projects />

        {/* Hackathon Projects */}
        <HackathonProjects />

        {/* Experience Timeline, Hackathons, and Certifications */}
        <Timeline />

        {/* Artwork Polaroid Section */}
        <CreativeCorner />

        {/* Contact Form and Footer */}
        <Contact />
        <Chatbot />
      </main>
    </div>
  );
}

export default App;
