import React from 'react'

interface ExperienceItem {
  id: number
  period: string
  title: string
  company: string
  description: string
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    period: "2022-Presente",
    title: "Desarrollador Frontend",
    company: "Ministerio de Producción",
    description: "Desarrollo de aplicaciones frontend, diseño de interfaces de usuario, optimización de experiencia de usuario."
  },
  {
    id: 2,
    period: "2021-2022",
    title: "Educador IT",
    company: "Ministerio de Educación",
    description: "Enseñanza de programación y tecnologías IT, enfoque en resolución de problemas e innovación."
  },
  {
    id: 3,
    period: "2010-Presente",
    title: "Desarrollador y Diseñador Web",
    company: "OpcionesDesign",
    description: "Desarrollo frontend y backend, integración de diseños, creación de interfaces web responsivas."
  },
  {
    id: 4,
    period: "2007-Presente",
    title: "Especialista en Soporte IT",
    company: "LT10 Radio Universidad Nacional del Litoral",
    description: "Soporte técnico especializado, desarrollo de scripts (bash/python), automatización, mantenimiento de infraestructura TI."
  }
]

const ExperienceSection: React.FC = () => {
  return (
    <section className="animate-section py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm lg:text-base font-semibold text-accent-red uppercase tracking-wider px-4 py-2 border border-accent-red rounded-full">
              CUALIFICACIÓN
            </span>
          </div>
          <h2 className="text-section-title-mobile lg:text-section-title font-bold uppercase text-primary-black">
            MI EXPERIENCIA
          </h2>
        </div>
        
        {/* Timeline */}
        <div className="relative timeline-line">
          {experienceData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item relative mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'
              }`}
            >
              {/* Timeline point */}
              <div className="timeline-point" style={{ top: '2rem' }}></div>
              
              {/* Content */}
              <div className={`bg-primary-white p-6 lg:p-8 rounded-lg shadow-lg ml-12 lg:ml-0 ${
                index % 2 === 0 ? 'lg:mr-12' : 'lg:ml-12'
              } hover:shadow-xl transition-shadow duration-300`}>
                <div className="mb-3">
                  <span className="inline-block text-sm font-semibold text-accent-red uppercase tracking-wide px-3 py-1 bg-accent-red/10 rounded-full">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="text-lg lg:text-xl font-bold text-primary-black mb-2">
                  {item.title}
                </h3>
                
                <h4 className="text-base lg:text-lg font-semibold text-secondary-gray mb-4">
                  {item.company}
                </h4>
                
                <p className="text-sm lg:text-base text-secondary-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection