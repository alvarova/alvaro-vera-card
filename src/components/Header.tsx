import React from 'react'

interface HeaderProps {
  onQRClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onQRClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo/Nombre */}
          <div className="text-lg lg:text-xl font-bold text-primary-black uppercase tracking-wide">
            ÁLVARO VERA
          </div>
          
          {/* QR Code */}
          <div className="cursor-pointer hover-scale" onClick={onQRClick}>
            <img 
              src="/qr-code.jpg" 
              alt="Código QR para contactar a Álvaro Vera" 
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header