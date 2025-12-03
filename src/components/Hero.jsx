import { useState } from 'react'
import { Github, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react'

const Hero = () => {

  // SOCIAL LINKS (spaces removed, correct URLs)
  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://x.com/codemaster30674?t=GXfPOGH2hzxZ59LMLtiFGQ&s=08', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gopalsongara/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thegopal_rajput?igsh=cTZvNzZ6N3VidDR5', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/gopalsongara', label: 'GitHub' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left animate-fade-in space-y-6 pointer-events-auto relative z-[999]">
            
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <p className="text-white font-medium text-sm">Web Developer</p>
              <div className="w-px h-4 bg-white/30"></div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-teal-400">Hello, I'm</span>{' '}
              <span className="text-white">Gopal Songara</span>
            </h1>

            <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I convert complex ideas into smooth, fast, and modern web apps that work well and create real impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a href="#projects" className="gradient-button inline-block text-center rounded-lg">
                View My Work
              </a>

              <a
                href="#contact"
                className="inline-block text-center py-3 px-6 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                My Resume
              </a>
            </div>

            {/* ✅ FIXED SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-4 pt-6 relative z-[9999] pointer-events-auto">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-full border border-white/20 
                             hover:border-teal-400 hover:text-teal-400 
                             transition-colors duration-300 cursor-pointer 
                             inline-flex items-center justify-center"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center lg:justify-end animate-float pointer-events-none">
            <div className="relative">
              
              {/* background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-500/20 
                              rounded-full blur-3xl scale-150 -z-10 pointer-events-none" />

              {/* main card */}
              <div className="glass glass-hover relative w-80 h-80 sm:w-96 sm:h-96 
                              rounded-2xl overflow-hidden flex items-center justify-center pointer-events-none">
                <div className="text-center p-8 pointer-events-none">
                  
                  {/* image */}
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden pointer-events-none">
                    <img
                      className="rounded-full w-full h-full object-cover pointer-events-none"
                      src="/1234.jpg" 
                      alt="profile"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
