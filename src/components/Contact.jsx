import { useRef, useEffect, useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false) // new
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

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

 const handleSubmit = async (e) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    const formDataToSend = new FormData()
    formDataToSend.append('access_key', '8fdd4bd7-46fe-41c4-b9d4-fd6f99f78645')
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('message', formData.message)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend,
    })

    const data = await res.json()

    if (data.success) {
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } else {
      console.error(data)
      alert('Something went wrong. Please try again later.')
    }
  } catch (error) {
    console.error(error)
    alert('Network error. Please try again later.')
  } finally {
    setIsLoading(false)
  }
}

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
    >
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-12 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div
          className={`glass glass-hover p-8 rounded-2xl ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 text-white placeholder-gray-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-button flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-teal-400" />
              <span>gopalrajput.py@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-teal-400" />
              <span>Available Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
