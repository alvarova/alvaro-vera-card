import React from 'react'
import { Download } from 'lucide-react'

const AboutSection: React.FC = () => {
  const handleDownloadCV = () => {
    // Aquí se implementaría la descarga del CV
    console.log('Descargando CV...')
    // Por ahora, simplemente alerta al usuario
    alert('Función de descarga de CV - Implementar enlace real al archivo PDF')
  }

  return (
    <section className="animate-section py-20 lg:py-32 bg-primary-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="/perfil2.jpg" 
                alt="Álvaro Vera - Desarrollador Frontend" 
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary-black shadow-xl"
              />
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-red rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-red rounded-full opacity-60"></div>
            </div>
          </div>
          
          {/* Contenido */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Etiqueta */}
            <div className="inline-block mb-4">
              <span className="text-sm lg:text-base font-semibold text-accent-red uppercase tracking-wider px-4 py-2 border border-accent-red rounded-full">
                SOBRE MÍ
              </span>
            </div>
            
            <h2 className="text-section-title-mobile lg:text-section-title font-bold uppercase text-primary-black mb-6 lg:mb-8 leading-tight">
              CONSTRUYAMOS ALGO INCREÍBLE JUNTOS.
            </h2>
            
            <h3 className="text-lg lg:text-xl font-semibold text-secondary-gray uppercase mb-6 lg:mb-8 tracking-wide">
              DESARROLLADOR WEB | DISEÑADOR UI/UX | EDUCADOR
            </h3>
            
            <p className="text-base lg:text-lg text-secondary-gray leading-relaxed mb-8 lg:mb-10 max-w-2xl">
              Soy un Desarrollador Frontend y Educador IT con experiencia en PHP, JavaScript, HTML5, CSS y Python. 
              Diseño interfaces web amigables y enseño programación enfocándome en la resolución de problemas e innovación.
            </p>
            
            {/* Botón CTA */}
            <button 
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-3 bg-primary-black text-primary-white px-8 py-4 font-semibold uppercase tracking-wide hover-bg-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
            >
              <Download size={20} />
              DESCARGAR CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection