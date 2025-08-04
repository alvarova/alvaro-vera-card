import React, { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, MessageSquare, Phone as PhoneIcon } from 'lucide-react'

const ContactSection: React.FC = () => {
  const whatsappButtonRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Función para activar la animación de sacudida
  const triggerShakeAnimation = () => {
    if (whatsappButtonRef.current && !isVisible) {
      setIsVisible(true);
      whatsappButtonRef.current.classList.add('shake-animation-repeat');
      
      // Eliminar la clase después de que termine la animación para permitir que se repita
      const animationDuration = 0.8 * 3 * 1000; // 0.8s por animación * 3 repeticiones
      setTimeout(() => {
        if (whatsappButtonRef.current) {
          whatsappButtonRef.current.classList.remove('shake-animation-repeat');
          setIsVisible(false);
        }
      }, animationDuration);
    }
  };

  // Efecto para activar la animación cuando el componente se monta
  useEffect(() => {
    // Pequeño retraso para asegurar que el componente esté completamente renderizado
    const initialTimeout = setTimeout(() => {
      triggerShakeAnimation();
    }, 1000);

    return () => clearTimeout(initialTimeout);
  }, []);

  // Efecto para observar cuando el botón entra en la vista
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          triggerShakeAnimation();
        }
      },
      { threshold: 0.1 } // Activar cuando al menos el 10% del elemento sea visible
    );

    if (whatsappButtonRef.current) {
      observer.observe(whatsappButtonRef.current);
    }

    return () => {
      if (whatsappButtonRef.current) {
        observer.unobserve(whatsappButtonRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className="animate-section py-20 lg:py-32 bg-primary-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm lg:text-base font-semibold text-accent-red uppercase tracking-wider px-4 py-2 border border-accent-red rounded-full">
              CONTACTO
            </span>
          </div>
          <h2 className="text-section-title-mobile lg:text-section-title font-bold uppercase text-primary-black mb-6">
            CONTÁCTAME
          </h2>
          <p className="text-lg lg:text-xl text-secondary-gray max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y construyamos algo increíble juntos!
          </p>
        </div>
        
        {/* Información de contacto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Email */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-accent-red/10 rounded-full mb-6 group-hover:bg-accent-red/20 transition-colors duration-300">
              <Mail size={32} className="text-accent-red" />
            </div>
            <h3 className="text-lg font-bold text-primary-black mb-3 uppercase">
              Email
            </h3>
            <a 
              href="mailto:alvarojaviervera@gmail.com" 
              className="text-secondary-gray hover-red transition-colors duration-300 text-sm lg:text-base break-all"
            >
              alvarojaviervera@gmail.com
            </a>
          </div>
          
          {/* Teléfono */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-accent-red/10 rounded-full mb-6 group-hover:bg-accent-red/20 transition-colors duration-300">
              <Phone size={32} className="text-accent-red" />
            </div>
            <h3 className="text-lg font-bold text-primary-black mb-3 uppercase">
              Teléfono
            </h3>
            <a 
              href="tel:+543425974002" 
              className="text-secondary-gray hover-red transition-colors duration-300 text-sm lg:text-base"
            >
              +54 342 5974002
            </a>
          </div>
          
          {/* Ubicación */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-accent-red/10 rounded-full mb-6 group-hover:bg-accent-red/20 transition-colors duration-300">
              <MapPin size={32} className="text-accent-red" />
            </div>
            <h3 className="text-lg font-bold text-primary-black mb-3 uppercase">
              Ubicación
            </h3>
            <p className="text-secondary-gray text-sm lg:text-base">
              Santa Fe, Argentina
            </p>
          </div>
          
          {/* LinkedIn */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-accent-red/10 rounded-full mb-6 group-hover:bg-accent-red/20 transition-colors duration-300">
              <Linkedin size={32} className="text-accent-red" />
            </div>
            <h3 className="text-lg font-bold text-primary-black mb-3 uppercase">
              LinkedIn
            </h3>
            <a 
              href="https://linkedin.com/in/alvarovera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary-gray hover-red transition-colors duration-300 text-sm lg:text-base"
            >
              /in/alvarovera
            </a>
          </div>
        </div>
        
        {/* Call to action final */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-primary-black mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-secondary-gray mb-8 text-base lg:text-lg">
              Estoy disponible para proyectos freelance y oportunidades de colaboración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:alvarojaviervera@gmail.com" 
                className="inline-flex items-center justify-center gap-3 bg-primary-black text-primary-white px-8 py-4 font-semibold uppercase tracking-wide hover-bg-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
              >
                <Mail size={20} />
                ENVIAR EMAIL
              </a>
              <a 
                href="tel:+543425974002" 
                className="inline-flex items-center justify-center gap-3 border-2 border-primary-black text-primary-black px-8 py-4 font-semibold uppercase tracking-wide hover:border-accent-red hover-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
              >
                <Phone size={20} />
                LLAMAR
              </a>
              <a 
                ref={whatsappButtonRef}
                href="https://wa.me/543425974002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-primary-white px-8 py-4 font-semibold uppercase tracking-wide hover:bg-[#128C7E] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 shadow-lg hover:shadow-xl"
                style={{ willChange: 'transform' }}
              >
                <PhoneIcon size={20} />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection