import { useRef, useEffect, useState } from 'react'
import { ExternalLink, Code, Github } from 'lucide-react'

const Projects = () => {
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

  const featuredProject = {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built for scalability and performance.',
    tech: ['React', 'Node.js', 'MongoDB', 'Nextjs', 'Tailwind CSS'],
    image: '🛒',
    live: '#',
    code: '#',
  }

  const projects = [
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features.',
      tech: ['React', 'nodejs', 'Tailwind CSS','MongoDB','Express',],
      live: '#',
      code: '#',
    },
    {
      title: 'Garbage Management System',
      description: 'A system for managing garbage collection and disposal.',
      tech: ['React', 'API', 'Tailwind CSS','nodejs','MongoDB','Express',],
      live: 'https://hackthon-main.netlify.app/login',
      code: 'https://github.com/gopalsongara/hackthon-main.git',
    },
    {
      title: 'Spotify Clone',
      description: 'Spotify-style mini music player with play/pause, next/previous, and responsive UI',
      tech: ['javascript', 'API', 'Tailwind CSS',],
      live: '',
      code: '',
    }
    
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My Work
          </h2>
        </div>

        {/* Featured Project */}
        <div
          className={`mb-16 ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl aurora-bg p-8 lg:p-12 min-h-[500px] flex flex-col justify-center">
            <div className="relative z-10 w-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-4">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    We empower brands to inspire people
                  </h3>
                  <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                    EXPLORE OUR UNIVERSE
                  </p>
                </div>
                <div className="flex items-center justify-center relative">
                  <div className="w-48 h-48 bg-gradient-to-br from-teal-400/40 to-emerald-500/40 rounded-lg flex items-center justify-center backdrop-blur-sm border border-teal-400/50 shadow-2xl shadow-teal-500/30 transform rotate-12">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-300 to-emerald-400 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a
                  href={featuredProject.live}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>
            </div>
            {/* Aurora overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-emerald-500/10 pointer-events-none"></div>
            {/* Scroll text */}
            <div className="absolute bottom-8 right-8 text-white/50 text-xs uppercase tracking-widest transform -rotate-90 origin-right pointer-events-none">
              SCROLL TO DISCOVER
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass glass-hover p-6 rounded-xl transform hover:scale-105 transition-all duration-300 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${(index + 1) * 0.1}s`,
              }}
            >
              <div className="mb-4">
                <div className="w-full h-40 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-5xl">📽</div>
                  
                </div>
                <h3 className="text-xl font-bold gradient-text mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs border border-teal-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={project.live}
                  className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-teal-400 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
