import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { gsap } from 'gsap'

interface QRModalProps {
  isOpen: boolean
  onClose: () => void
}

const QRModal: React.FC<QRModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden'
      
      // Animación de entrada
      gsap.fromTo(
        '.modal-content',
        {
          opacity: 0,
          scale: 0.8,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power3.out'
        }
      )
      
      gsap.fromTo(
        '.modal-backdrop',
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.2
        }
      )
    } else {
      // Restaurar scroll del body
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  if (!isOpen) return null
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }
  
  return (
    <div 
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-primary-black/75 p-4"
      onClick={handleBackdropClick}
    >
      <div className="modal-content bg-primary-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
        {/* Botón cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-secondary-gray hover-red p-2 rounded-full hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red"
          aria-label="Cerrar modal"
        >
          <X size={24} />
        </button>
        
        {/* Contenido del modal */}
        <div className="text-center">
          <h3 className="text-xl lg:text-2xl font-bold text-primary-black mb-2">
            Código QR
          </h3>
          <p className="text-secondary-gray mb-6">
            Escanea para acceder a mi tarjeta de presentación
          </p>
          
          {/* QR Code ampliado */}
          <div className="flex justify-center mb-6">
            <img 
              src="./qr-code.jpg" 
              alt="Código QR para acceder a la tarjeta de presentación de Álvaro Vera" 
              className="w-48 h-48 lg:w-56 lg:h-56 border-2 border-gray-200 rounded-lg"
            />
          </div>
          
          {/* Instrucción */}
          <p className="text-sm text-secondary-gray">
            Usa la cámara de tu teléfono para escanear este código QR
          </p>
          
          {/* Botón alternativo para cerrar */}
          <button 
            onClick={onClose}
            className="mt-6 bg-primary-black text-primary-white px-6 py-3 font-semibold uppercase tracking-wide hover-bg-red transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2"
          >
            CERRAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default QRModal