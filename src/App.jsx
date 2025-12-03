import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-teal-950/50 to-black">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
