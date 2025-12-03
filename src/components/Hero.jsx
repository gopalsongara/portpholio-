import { useState } from 'react'
import { Github, Linkedin, Instagram, Twitter, Youtube, Music2, Play } from 'lucide-react'

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: ' https://x.com/codemaster30674?t=GXfPOGH2hzxZ59LMLtiFGQ&s=08 ', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gopalsongara/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thegopal_rajput?igsh=cTZvNzZ6N3VidDR5', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left animate-fade-in space-y-6">
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <p className="text-white font-medium text-sm">
                Web Developer
              </p>
              <div className="w-px h-4 bg-white/30"></div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-teal-400">Hello, I'm</span>{' '}
              <span className="text-white">Gopal Songara</span>
            </h1>
            <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I convert complex ideas into smooth, fast, and modern web apps that work well and create real impact
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="gradient-button inline-block text-center rounded-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block text-center py-3 px-6 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                My Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 pt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-teal-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Character Image */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Glowing Spotlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-500/20 rounded-full blur-3xl scale-150 -z-10" />
              
              {/* Placeholder for 3D character image */}
              <div className="glass glass-hover relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl"><img className='rounded-full w-full h-full object-cover' src="/1234.jpg" alt="" /></div>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Music Button */}
     
    </section>
  )
}

export default Hero
