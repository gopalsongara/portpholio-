import { useRef, useEffect, useState } from 'react'
import { 
  SiTailwindcss, 
  SiPython, 
  SiNodedotjs, 
  SiMongodb, 
  SiReact ,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiCplusplus,
  
} from 'react-icons/si'

const Skills = () => {
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

  // FastAPI icon as SVG component (stylized F in circle)
  const FastAPIIcon = ({ className }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 7h6v2h-4v2h3v2h-3v4H9V7z" fill="currentColor"/>
    </svg>
  )

  // Java icon as SVG component (coffee cup with steam)
  const JavaIcon = ({ className }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Coffee cup body */}
      <path d="M6 5h10c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" fill="currentColor"/>
      {/* Cup handle */}
      <path d="M16 9c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      {/* Steam lines */}
      <path d="M8 3L8 1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3L12 1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M16 3L16 1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )

  const skills = [
    { name: 'Tailwind CSS', icon: SiTailwindcss },
   
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'Express', icon: SiExpress },
    { name: 'React', icon: SiReact },
    { name: 'C++', icon: SiCplusplus }
   

  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-12 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-white text-lg">
            Modern Applications | Modern Technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div
                key={skill.name}
                className={`flex flex-col items-center transform hover:scale-110 transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 mb-3 text-cyan-400"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))',
                  }}
                >
                  <IconComponent className="w-full h-full" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


export default Skills



 