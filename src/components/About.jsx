import { useRef, useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const infoCards = [
    { title: 'Experience', value: 'Fresher' },
    { title: 'Specialty', value: 'Full Stack' },
    { title: 'Focus', value: 'Accessibility & Performance' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Left Side - Portrait */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-40 h-35 mx-auto mb-4 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 rounded-full flex items-center justify-center">
                      <div className="text-5xl"><img className='rounded-full w-full h-full object-cover' src="/123.jpg" alt="" /></div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                <span className="gradient-text">Gopal Songara</span>
              </h2>
              <p className="text-xl text-teal-400 font-semibold mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm passionate about building scalable, user-friendly web
                applications. With expertise in modern technologies, I create
                solutions that are not just functional but also delightful to
                use. I focus on performance, accessibility, and creating smooth
                user experiences.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {infoCards.map((card, index) => (
                <div
                  key={card.title}
                  className="glass glass-hover p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <p className="text-2xl font-bold gradient-text mb-1">
                    {card.value}
                  </p>
                  <p className="text-sm text-gray-400">{card.title}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="bg-white text-black inline-block text-center py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-black/50 border border-white/20 inline-block text-center py-3 px-6 rounded-lg font-semibold text-white hover:bg-black/70 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div
          className={`mt-20 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-4xl">
            <p>
              I'm a Software Developer, Content Creator, and Web Developer — passionate about building fast, resilient applications and sharing coding insights on Instagram and YouTube.
            </p>
            <p>
              I love turning ideas into scalable, user-friendly products that make an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
