import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import QRModal from './components/QRModal'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const appRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animaciones de carga inicial para el Hero
    const heroTitle = document.querySelector('.hero-title')
    const heroSubtitle = document.querySelector('.hero-subtitle')
    const heroDescription = document.querySelector('.hero-description')
    const heroImage = document.querySelector('.hero-image')
    const socialIcons = document.querySelector('.social-icons')

    if (heroTitle && heroSubtitle && heroDescription && heroImage && socialIcons) {
      // Asegurar que todos los elementos tengan opacidad completa antes de animar
      gsap.set([heroTitle, heroSubtitle, heroDescription, socialIcons, heroImage], { opacity: 1 });
      
      const tl = gsap.timeline()
      
      tl.from(heroTitle, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(heroSubtitle, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .from(heroDescription, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .from(socialIcons, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.2")
      .from(heroImage, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
    }

    // Animaciones en scroll para las secciones
    const sections = document.querySelectorAll('.animate-section')
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Animaciones para los elementos del timeline
    const timelineItems = document.querySelectorAll('.timeline-item')
    
    timelineItems.forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={appRef} className="min-h-screen bg-primary-white font-montserrat">
      <Header onQRClick={() => setIsQRModalOpen(true)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <QRModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
      />
    </div>
  )
}

export default App