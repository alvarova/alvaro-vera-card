import React from 'react'
import { Mail, Linkedin } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 relative z-10 bg-primary-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title text-hero-title-mobile lg:text-hero-title font-black uppercase text-primary-black mb-4 lg:mb-6" style={{ opacity: 1 }}>
              <span className="text-accent-red">¡HOLA!</span> SOY ÁLVARO VERA
            </h1>
            
            <h2 className="hero-subtitle text-xl lg:text-2xl font-semibold uppercase text-primary-black mb-6 lg:mb-8 tracking-wide" style={{ opacity: 1 }}>
              DESARROLLADOR FRONTEND / EDUCADOR IT
            </h2>
            
            <p className="hero-description text-base lg:text-lg text-secondary-gray leading-relaxed mb-8 lg:mb-10 max-w-2xl" style={{ opacity: 1 }}>
              Me especializo en diseñar interfaces web responsivas y enseñar programación, 
              con más de una década de experiencia en desarrollo frontend, soporte IT y educación.
            </p>
            
            {/* Iconos sociales */}
            <div className="social-icons flex justify-center lg:justify-start space-x-6" style={{ opacity: 1 }}>
              <a 
                href="mailto:alvarojaviervera@gmail.com" 
                className="text-primary-black hover-red p-3 rounded-full border-2 border-primary-black hover:border-accent-red transition-all duration-300"
                aria-label="Enviar email a Álvaro Vera"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/alvarovera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-black hover-red p-3 rounded-full border-2 border-primary-black hover:border-accent-red transition-all duration-300"
                aria-label="Visitar perfil de LinkedIn de Álvaro Vera"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Imagen de perfil */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="hero-image" style={{ opacity: 1 }}>
              <img 
                src="./perfil.jpg" 
                alt="Foto de perfil de Álvaro Vera" 
                className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-primary-black shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection